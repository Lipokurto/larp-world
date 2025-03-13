import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';

import { editPlayerChar, infoChar } from '../../api/paths';
import { InputForm } from '../ui-kit/input-form';
import { nameValidation } from './form-validation';
import { SelectForm } from '../ui-kit/select-form';

import s from './form.module.scss';

type Item = {
  value: string,
  error?: string,
}

type CharData = {
  charName: Item,
  role: Item,
  location: Item,
}

type Props = {
  vkId: string,
}

export function CharForm(props: Props): JSX.Element {
  const [isEditing, setIsEditing] = React.useState<boolean>(false);
  const [isTouched, setIsTouched] = React.useState<boolean>(false);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [charData, setCharData] = React.useState<CharData>({
    charName: { value: '', error: undefined },
    role: { value: '', error: undefined },
    location: { value: '', error: undefined },
  });

  React.useEffect(() => {
    const fetchPlayerInfo = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(infoChar, {
          params: { vk_id: props.vkId },
        });
        const validResponse = {
          charName: { value: response.data.char_name, error: undefined },
          role: { value: response.data.role, error: undefined },
          location: { value: response.data.location, error: undefined },
        }
        setCharData(validResponse);
        setIsLoading(false);
      } catch (err) {
        toast.error('Ошибка при получении данных');
      }
  }

  fetchPlayerInfo();
}, [props]);

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
        error: nameValidation(charData.charName.value, true),
      },
      role: {
        value: charData.role.value,
        error: nameValidation(charData.role.value, false),
      },
      location: {
        value: charData.location.value,
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
        location: validateCharData.location.value,
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
      ? <div onClick={handleSubmit} className={s.button}>Сохранить</div>
      : <div onClick={() => setIsEditing(true)} className={s.button}>Редактировать</div>;
  }, [isEditing, charData]);

  return (
    <div className={s.container}>
      <div className={s.labelContainer}>
        <div className={s.label}>Персонаж</div>
        <div>{renderButton}</div>
      </div>

      <InputForm
        label='Имя'
        type="text"
        name="charName"
        value={charData.charName.value}
        onChange={handleChange}
        disabled={!isEditing}
        error={charData.charName.error}
        isLoading={isLoading}
      />

      <InputForm
        label='Роль'
        type="text"
        name="role"
        value={charData.role.value}
        onChange={handleChange}
        disabled={!isEditing}
        error={charData.role.error}
        isLoading={isLoading}
      />

      <SelectForm
        label='Локация'
        name='location'
        value={charData.location.value}
        onSelectChange={handleChange}
        disabled={!isEditing}
        error={charData.location.error}
        isLoading={isLoading}
      />

      <Toaster
        position="bottom-left"
        reverseOrder={false}
      />
    </div>
  );
}