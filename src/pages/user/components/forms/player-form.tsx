import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import Tooltip from 'react-tooltip-lite';

import { useAppSelector } from '../../../../redux/hooks';
import { achivmentDelete, achivmentsEdit, editPlayer } from '../../../../api/user';
import { InputForm, SelectAchivmentForm } from '../ui-kit';
import { nameValidation } from './form-validation';
import { AchivmentItem } from '../../../../redux/app-data-slice';
import { AchivmentModal } from './achivment-modal/achivment-modal';

import s from './form.module.scss';

type Item = {
  value: string,
  error?: string,
}

type UserData = {
  lastName: Item,
  firstName: Item,
  middleName: Item,
}

type Props = UserData & {
  vkId: string,
  isLoading: boolean,
  achivments: any[],
  onCallback: () => void,
  isAdmin?: boolean,
}

export type AchivmentsData = {
  achivmentId: string,
}

export function PlayerForm(props: Props): JSX.Element {
  const [isAchivmentModalOpen, setIsAchivmentModalOpen] = React.useState<boolean>(false);
  const [activeAchivment, setActiveAchivment] = React.useState<AchivmentItem | null>(null);
  const [isEditing, setIsEditing] = React.useState<boolean>(false);
  const [isTouched, setIsTouched] = React.useState<boolean>(false);
  const [achivmentData, setAchivmentData] = React.useState<AchivmentsData>({ achivmentId: '0' });
  const [userData, setUserData] = React.useState<UserData>({
    lastName: { value: props.lastName.value, error: props.lastName.error },
    firstName: { value: props.firstName.value, error: props.firstName.error },
    middleName: { value: props.middleName.value, error: props.middleName.error },
  });

  const { achivments } = useAppSelector((state) => state.appData);

  const handleUserChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
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

  const handleAchivmentChange = React.useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setAchivmentData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setIsTouched(true);
  }, [achivmentData]);

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
          vk_id: props.vkId,
        });

        toast.success('Данные успешно обновлены');
      } catch (error) {
        toast.error('Что-то пошло не так');
        }

    setIsEditing(false);

    return undefined;
  }, [userData, props]);

  const handleAchivmentSubmit = React.useCallback(async () => {
    if (!isTouched) {
      setIsEditing(false);

      return undefined;
    }

    try {
      await axios.post(achivmentsEdit, {
        vk_id: props.vkId,
        achivment_id: achivmentData.achivmentId,
      });

      setAchivmentData({ achivmentId: '0' });
      toast.success('Достижение успешно добавлено');
      setIsEditing(false);
      props.onCallback();
    } catch (error) {
      toast.error('Что-то пошло не так');
    }
  }, [achivmentData, props]);

  const renderEditButton = React.useMemo(() => {
    return isEditing
      ? <div onClick={handleSubmit} className={props.isAdmin ? s.buttonAdmin : s.button}>Сохранить</div>
      : <div onClick={() => setIsEditing(true)} className={props.isAdmin ? s.buttonAdmin : s.button}>Редактировать</div>;
  }, [isEditing, userData]);

  const renderAchivmentItem = React.useCallback((item: any, i: number) => {
    return (
      <div>
        <div key={i} className={s.achivmentText}>{item.label}</div>
        <div>{item.about}</div>
      </div>
    )},[]);

    const renderAchivmentsOptions = React.useMemo(() => {
      return (
        <>
          <option disabled value='0' hidden>Выберите достижение</option>
          {achivments.map(p => <option value={p.id} key={p.id}>{p.label}</option>)}
        </>

      )
    }, [achivments]);

  const handleAchivmentDelete = React.useCallback(async (e: React.MouseEvent<HTMLButtonElement>) =>{
    const achivmentId = e.currentTarget.value;

    try {
      await axios.delete(achivmentDelete, {
        data: {
          vk_id: props.vkId,
          achivment_id: achivmentId,
        },
      });

      toast.success('Достижение успешно удалено');
      setIsEditing(false);
      props.onCallback();
    } catch (error) {
      toast.error('Что-то пошло не так');
    }
  }, [props]);

  const handleAchivmentModalOpen = React.useCallback((isOpen: boolean, item: AchivmentItem | null) => {
    setActiveAchivment(item);
    setIsAchivmentModalOpen(isOpen);
  }, []);

  const renderAchivments = React.useMemo(() => {
    const currentAchivments = achivments.filter(a => props.achivments.some(p => p.achivment_id === a.id));

    return (
      <div className={s.achivment}>
        {isEditing && (
          <>
            <SelectAchivmentForm
              label='Добавить достижение'
              name='achivmentId'
              value={achivmentData.achivmentId}
              onSelectChange={handleAchivmentChange}
              options={renderAchivmentsOptions}
            />

            <button onClick={handleAchivmentSubmit} className={s.addAchivment}>
              Добавить
            </button>
          </>
        )}

        {!isEditing && props.achivments.length === 0 && props.isAdmin && (
          <button onClick={() => setIsEditing(true)} className={s.addAchivment}>+</button>
        )}

        <div>Достижения</div>
        {currentAchivments.map((item, i) => (
          <Tooltip content={renderAchivmentItem(item, i)} key={i} background='black' direction='left'>
            <div className={s.achivmentItem}>
              {isEditing && <button onClick={handleAchivmentDelete} value={item.id}>Убрать</button>}
              <img
                key={i}
                src={item.img}
                alt="achivment"
                style={{
                  width: '50px',
                  height: '50px',
                  marginRight: '5px',
                }}
                onClick={() => handleAchivmentModalOpen(true, item)}
              />
            </div>
          </Tooltip>
        ))}
      </div>
    )
  }, [props.achivments, isEditing, achivments, achivmentData]);

  return (
    <>
      <div className={s.container}>
        <div className={s.labelContainer}>
          <div className={s.label}>Игрок</div>

          {renderAchivments}

          <div>{renderEditButton}</div>
        </div>

      <div className={s.inputContainer}>
        <InputForm
          label='Фамилия'
          type="text"
          name="lastName"
          value={userData.lastName.value}
          onChange={handleUserChange}
          disabled={!isEditing}
          error={userData.lastName.error}
          isLoading={props.isLoading}
        />

        <InputForm
          label='Имя'
          type="text"
          name="firstName"
          value={userData.firstName.value}
          onChange={handleUserChange}
          disabled={!isEditing}
          error={userData.firstName.error}
          isLoading={props.isLoading}
        />

        <InputForm
          label='Отчество (необязательно)'
          type="text"
          name="middleName"
          value={userData.middleName.value}
          onChange={handleUserChange}
          disabled={!isEditing}
          error={userData.middleName.error}
          isLoading={props.isLoading}
        />
      </div>

        <Toaster
          position="bottom-left"
          reverseOrder={false}
        />
      </div>

      {isAchivmentModalOpen && (
        <AchivmentModal
          item={activeAchivment}
          setIsOpen={setIsAchivmentModalOpen}
        />
      )}
    </>
  );
}