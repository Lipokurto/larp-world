import axios from 'axios';
import React from 'react';

import { editPlayer, infoPlayer } from '../../../api/paths';

type UserData = {
  lastName: string,
  firstName: string,
  middleName: string,
  birthDate: string,
}

type Props = {
  vkId: string,
}

export function PlayerForm(props: Props): JSX.Element {
  const [isEditing, setIsEditing] = React.useState<boolean>(false);
  const [message, setMessage] = React.useState<string | undefined>(undefined);
  const [userData, setUserData] = React.useState<UserData>({
    lastName: '',
    firstName: '',
    middleName: '',
    birthDate: '',
  });

  React.useEffect(() => {
    const fetchPlayerInfo = async () => {
      try {
        const response = await axios.get(infoPlayer, {
          params: { vk_id: props.vkId },
        });
        const validResponse = {
          lastName: response.data.last_name,
          firstName: response.data.first_name,
          middleName: response.data.middle_name,
          birthDate: response.data.birth_date,
        }
        setUserData(validResponse);
      } catch (err) {
        setMessage('Ошибка при получении данных');
      }
  }

  fetchPlayerInfo();
}, [props]);

  const handleChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }, [userData]);

  const handleSubmit = React.useCallback(async () => {
    try {
      await axios.post(editPlayer, {
        last_name: userData.lastName,
        first_name: userData.firstName,
        middle_name: userData.middleName,
        birth_date: userData.birthDate,
        vk_id: props.vkId,
      });

      setMessage('Данные успешно обновлены');
    } catch (error) {
        setMessage('Что-то пошло не так');
      }

    setIsEditing(false);

    return undefined;
  }, [userData]);

  const renderButton = React.useMemo(() => {
    return isEditing ? <button onClick={handleSubmit}>Сохранить</button> : <button onClick={() => setIsEditing(true)}>Редактировать</button>;
  }, [isEditing, userData]);

  return (
    <div>
      <div>
        <label>
          Фамилия:
          <input
            type="text"
            name="lastName"
            value={userData.lastName}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </label>
      </div>

      <div>
        <label>
          Имя:
          <input
            type="text"
            name="firstName"
            value={userData.firstName}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </label>
      </div>

      <div>
        <label>
          Отчество:
          <input
            type="text"
            name="middleName"
            value={userData.middleName}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </label>
      </div>

      <div>
        <label>
          Дата рождения:
          <input
            type="date"
            name="birthDate"
            value={userData.birthDate}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </label>
      </div>

      {message}

      {renderButton}
    </div>
  );
}