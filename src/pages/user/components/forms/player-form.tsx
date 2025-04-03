import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';

import { editPlayer } from '../../../../api/user';
import { InputForm } from '../ui-kit';
import { dateValidation, nameValidation } from './form-validation';

import s from './form.module.scss';

type Item = {
  value: string,
  error?: string,
}

type UserData = {
  lastName: Item,
  firstName: Item,
  middleName: Item,
  birthDate: Item,
}

type Props = UserData & {
  vkId: string,
  isLoading: boolean,
}

export function PlayerForm(props: Props): JSX.Element {
  const [isEditing, setIsEditing] = React.useState<boolean>(false);
  const [isTouched, setIsTouched] = React.useState<boolean>(false);
  const [userData, setUserData] = React.useState<UserData>({
    lastName: { value: props.lastName.value, error: props.lastName.error },
    firstName: { value: props.firstName.value, error: props.firstName.error },
    middleName: { value: props.middleName.value, error: props.middleName.error },
    birthDate: { value: props.birthDate.value, error: props.birthDate.error },
  });

  const handleChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: {
        value: value,
        error: undefined,
      },
    }));
    setIsTouched(true);
  }, [userData]);

  const handleSubmit = React.useCallback(async () => {
    if (!isTouched) {
      setIsEditing(false);

      return undefined;
    }

    const validateUserData = {
      lastName: {
        value: userData.lastName.value,
        error: nameValidation(userData.lastName.value, true),
      },
      firstName: {
        value: userData.firstName.value,
        error: nameValidation(userData.firstName.value, true),
      },
      middleName: {
        value: userData.middleName.value,
        error: nameValidation(userData.middleName.value, false),
      },
      birthDate: {
        value: userData.birthDate.value,
        error: dateValidation(userData.birthDate.value),
      },
    };

    const checkValidation = Object.values(validateUserData).some(e => e.error);
    if (checkValidation) {
      setUserData(validateUserData);

      return;
    }

    try {
      await axios.post(editPlayer, {
        last_name: validateUserData.lastName.value,
        first_name: validateUserData.firstName.value,
        mid_name: validateUserData.middleName.value,
        birth_date: validateUserData.birthDate.value,
        vk_id: props.vkId,
      });

      toast.success('Данные успешно обновлены');
    } catch (error) {
      toast.error('Что-то пошло не так');
      }

    setIsEditing(false);

    return undefined;
  }, [userData, props]);

  const renderButton = React.useMemo(() => {
    return isEditing
      ? <div onClick={handleSubmit} className={s.button}>Сохранить</div>
      : <div onClick={() => setIsEditing(true)} className={s.button}>Редактировать</div>;
  }, [isEditing, userData]);

  return (
    <div className={s.container}>
      <div className={s.labelContainer}>
        <div className={s.label}>Игрок</div>
        <div>{renderButton}</div>
      </div>

    <div className={s.inputContainer}>
      <InputForm
        label='Фамилия'
        type="text"
        name="lastName"
        value={userData.lastName.value}
        onChange={handleChange}
        disabled={!isEditing}
        error={userData.lastName.error}
        isLoading={props.isLoading}
      />

      <InputForm
        label='Имя'
        type="text"
        name="firstName"
        value={userData.firstName.value}
        onChange={handleChange}
        disabled={!isEditing}
        error={userData.firstName.error}
        isLoading={props.isLoading}
      />

      <InputForm
        label='Отчество (необязательно)'
        type="text"
        name="middleName"
        value={userData.middleName.value}
        onChange={handleChange}
        disabled={!isEditing}
        error={userData.middleName.error}
        isLoading={props.isLoading}
      />

      <InputForm
        label='Дата рождения'
        type="text"
        name="birthDate"
        value={userData.birthDate.value}
        onChange={handleChange}
        disabled={!isEditing}
        error={userData.birthDate.error}
        isLoading={props.isLoading}
      />
    </div>

      <Toaster
        position="bottom-left"
        reverseOrder={false}
      />
    </div>
  );
}