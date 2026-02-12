import React from 'react';
import { RiCloseLine } from 'react-icons/ri';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

import { useAppSelector } from '../../../../../../redux/hooks';
import { InputForm, SelectForm } from '../../../../components/ui-kit';
import { NavButton } from '../../../../../../components';
import { CharData } from '../../../../components/forms/char-form';
import { charNameValidation } from '../../../../components/forms/form-validation';
import { editPlayerChar, vkRegistryChar } from '../../../../../../api/user';

import s from './create-char-modal.module.css';

type Props = {
  vkId: string,
  isAdmin: boolean,
  setIsOpen: (arg0: boolean) => void,
  onCallback: () => void,
}

export function CreateCharModal(props: Props): JSX.Element {
  const [charData, setCharData] = React.useState<CharData>({
    charName: { value: '', error: '' },
    role: { value: '', error: '' },
    locationId: { value: '', error: '' },
  });

  const { locations } = useAppSelector((state) => state.appData);

  const handleClose = React.useCallback(() => {
    document.body.style.overflowY = 'visible';

    props.setIsOpen(false);
  }, [props.setIsOpen]);

  const handleChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCharData((prevData) => ({
      ...prevData,
      [name]: {
        value: value,
        error: undefined,
      },
    }));
  }, [charData]);

  const handleSubmit = React.useCallback(async () => {
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
        error: undefined,
      },
    };

    // const failedValidation = Object.values(validateCharData).some(e => e.error);
    // if (!failedValidation) {
      setCharData(validateCharData);

      try {
        // await axios.post(vkRegistryChar, { vk_id: props.vkId });

        await axios.post(editPlayerChar, {
          char_name: validateCharData.charName.value,
          role: validateCharData.role.value,
          location_id: validateCharData.locationId.value,
          vk_id: props.vkId,
        });

      props.onCallback();
      props.setIsOpen(false);

        toast.success('Данные успешно обновлены');
      } catch (error) {
        toast.error('Что-то пошло не так');
      }
    // }
  }, [charData, props]);

  return (
    <>
      <div className={s.darkBG} onClick={handleClose} />

        <div className={s.modal} >
          <div className={s.modalHeader}>
            <h5 className={s.heading}>Создать персонажа</h5>
          </div>

          <button className={s.closeBtn} onClick={handleClose}>
            <RiCloseLine style={{ marginBottom: '-3px' }} />
          </button>

        <div className={s.inputContainer}>
          <InputForm
            label='Имя'
            type="text"
            name="charName"
            value={charData.charName?.value?.toString() || ''}
            onChange={handleChange}
          />

          <InputForm
            label='Роль'
            type="text"
            name="role"
            value={charData.role?.value?.toString() || ''}
            onChange={handleChange}
          />

          <SelectForm
            label='Локация'
            name='locationId'
            locationsList={locations}
            value={charData.locationId?.value?.toString() || ''}
            onSelectChange={handleChange}
            isAdmin={props.isAdmin}
          />
        </div>

        <div className={s.actionsContainer}>
          <NavButton text='Сохранить' onclick={handleSubmit} />
        </div>
      </div>

      <Toaster
        position="bottom-left"
        reverseOrder={false}
      />
    </>
  )
}