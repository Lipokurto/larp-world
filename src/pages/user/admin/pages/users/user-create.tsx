import React from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

import { getIdWithLink } from '../../../utils/get-id-by-link';
import { getSeparateName } from '../../../utils/get-separate-name';
import { createUser } from '../../../../../api/user';
import { InputForm, SelectForm } from '../../../components/ui-kit';
import { useAppSelector } from '../../../../../redux/hooks';

type UserData = {
  fullName: string,
  vkLink: string,
  char: string,
  role: string,
  locationId: string,
}

export function UserCreate(): JSX.Element {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [userData, setUserData] = React.useState<UserData>({
    fullName: '',
    vkLink: '',
    char: '',
    role: '',
    locationId: '',
  });
  const [isDisableSubmit, setIsDisableSubmit] = React.useState<boolean>(true);
  const { locations } = useAppSelector((state) => state.appData);
  const isMounted = React.useRef(true);

  React.useEffect(() => {
    isMounted.current = false;
    setIsDisableSubmit(isLoading || userData.fullName === '' || userData.vkLink === '');
  }, [isLoading, userData]);

  const handleChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }, [userData]);

  const handleSubmit = React.useCallback(async () => {
    const userId = await getIdWithLink(userData.vkLink, true);
    const name = getSeparateName(userData.fullName);

    const checkRequireInputs = (
      name.lastName !== '' &&
      name.firstName !== '' &&
      userData.vkLink !== ''
    )

    if (checkRequireInputs) {
      try {
        await axios.post(createUser, {
          vk_id: userId,
          vk_link: userData.vkLink,
          last_name: name.lastName,
          first_name: name.firstName,
          mid_name: name.middleName || '',
          char_name: userData.char || '',
          role: userData.role || '',
          location_id: Number(userData.locationId),
        });

        if (isMounted.current) {
          toast.success('Данные успешно обновлены');
        }
      } catch (error) {
        if (isMounted.current) {
          toast.error('Что-то пошло не так');
        }
      } finally {
        if (isMounted.current) {
          setIsLoading(false);
        }
      setIsLoading(false);
    }
  }
    return undefined;
  }, [userData]);

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h3 style={{ color: 'white' }}>Создать пользователя</h3>
        <InputForm
          label='ФИО'
          type='text'
          name="fullName"
          onChange={handleChange}
          isLoading={isLoading}
          disabled={isLoading}
          value={userData.fullName}
        />

        <InputForm
          label='Ссылка на профиль ВК'
          type='text'
          name="vkLink"
          onChange={handleChange}
          isLoading={isLoading}
          disabled={isLoading}
          value={userData.vkLink}
        />

        <InputForm
          label='Имя персонажа'
          type='text'
          name="char"
          onChange={handleChange}
          isLoading={isLoading}
          disabled={isLoading}
          value={userData.char}
        />

        <InputForm
          label='Роль'
          type='text'
          name="role"
          onChange={handleChange}
          isLoading={isLoading}
          disabled={isLoading}
          value={userData.role}
        />

        <SelectForm
          label='Локация'
          name="locationId"
          onSelectChange={handleChange}
          isLoading={isLoading}
          disabled={isLoading}
          value={userData.locationId}
          locationsList={locations}
          isAdmin={true}
        />

        <div>
          <button onClick={handleSubmit} disabled={isDisableSubmit}>СОЗДАТЬ</button>
        </div>
      </div>

      <Toaster
        position="bottom-left"
        reverseOrder={false}
      />
    </>
  )
}