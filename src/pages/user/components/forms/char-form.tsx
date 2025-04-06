import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';

import { editPlayerChar } from '../../../../api/user';
import { InputForm, SelectForm } from '../ui-kit';
import { charNameValidation } from './form-validation';
import { LocationItem } from '../../type';

import s from './form.module.scss';

type Item = {
  value: string | number,
  error?: string,
}

type CharData = {
  charName: Item,
  role: Item,
  locationId: Item,
}

type Props = CharData & {
  vkId: string,
  isLoading: boolean,
  locationsList: LocationItem[],
  isAdmin?: boolean,
}

export function CharForm(props: Props): JSX.Element {
  const [isEditing, setIsEditing] = React.useState<boolean>(false);
  const [isTouched, setIsTouched] = React.useState<boolean>(false);
  const [charData, setCharData] = React.useState<CharData>({
    charName: { value: props.charName.value, error: props.charName.error },
    role: { value: props.role.value, error: props.role.error },
    locationId: { value: props.locationId.value, error: props.locationId.error },
  });

  const handleChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCharData((prevData) => ({
      ...prevData,
      [name]: {
        value: value,
        error: undefined,
      },
    }));
    setIsTouched(true);
  }, [charData]);

  const handleSubmit = React.useCallback(async () => {
    if (!isTouched) {
      setIsEditing(false);

      return undefined;
    }

    const validateCharData = {
      charName: {
        value: charData.charName.value,
        error: charNameValidation(charData.charName.value.toString(), true),
      },
      role: {
        value: charData.role.value,
        error: charNameValidation(charData.role.value.toString(), false),
      },
      locationId: {
        value: charData.locationId.value,
        error: '',
      },
    };

    const checkValidation = Object.values(validateCharData).some(e => e.error);
    if (checkValidation) {
      setCharData(validateCharData);

      return;
    }

    try {
      await axios.post(editPlayerChar, {
        char_name: validateCharData.charName.value,
        role: validateCharData.role.value,
        location_id: validateCharData.locationId.value,
        vk_id: props.vkId,
      });

      toast.success('Данные успешно обновлены');
    } catch (error) {
      toast.error('Что-то пошло не так');
      }

    setIsEditing(false);

    return undefined;
  }, [charData]);

  const renderButton = React.useMemo(() => {
    return isEditing
      ? <div onClick={handleSubmit} className={props.isAdmin ? s.buttonAdmin : s.button}>Сохранить</div>
      : <div onClick={() => setIsEditing(true)} className={props.isAdmin ? s.buttonAdmin : s.button}>Редактировать</div>;
  }, [isEditing, charData]);

  return (
    <div className={s.container}>
      <div className={s.labelContainer}>
        <div className={s.label}>Персонаж</div>
        <div>{renderButton}</div>
      </div>

      <div className={s.inputContainer}>
        <InputForm
          label='Имя'
          type="text"
          name="charName"
          value={charData.charName.value.toString()}
          onChange={handleChange}
          disabled={!isEditing}
          error={charData.charName.error}
          isLoading={props.isLoading}
        />

        <InputForm
          label='Роль'
          type="text"
          name="role"
          value={charData.role.value.toString()}
          onChange={handleChange}
          disabled={!isEditing}
          error={charData.role.error}
          isLoading={props.isLoading}
        />

        <SelectForm
          label='Локация'
          name='locationId'
          value={charData.locationId.value.toString()}
          onSelectChange={handleChange}
          disabled={!isEditing}
          error={charData.locationId.error}
          isLoading={props.isLoading}
          locationsList={props.locationsList}
          isAdmin={props.isAdmin}
        />
      </div>

      <Toaster
        position="bottom-left"
        reverseOrder={false}
      />
    </div>
  );
}