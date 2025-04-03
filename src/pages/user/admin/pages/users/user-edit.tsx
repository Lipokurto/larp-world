import React from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

import { CharForm, PlayerForm, StatusTable } from '../../../components/forms';
import { UserData } from '../../../type';
import { info } from '../../../../../api/user';
import { getIdWithLink } from '../../../utils/get-id-with-link';
import { InputForm } from '../../../components/ui-kit';

export function UserEdit(): JSX.Element {
  const [userLink, setUserLink] = React.useState<string>('');
  const [userId, setUserId] = React.useState<string>('');
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [userData, setUserData] = React.useState<UserData | undefined>(undefined);

  const handleLinkChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setUserLink(e.target.value);
  }, []);

  const handleSubmit = React.useCallback( async () => {
    const userId = await getIdWithLink(userLink);
    setUserId(userId);
    fetchUserInfo(userId);
  }, [userLink]);

const fetchUserInfo = React.useCallback((innerUserId: string) => {
  const fetchPlayerInfo = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(info, {
        params: { vk_id: innerUserId },
      });
      const validResponse: UserData = {
        lastName: { value: response.data.last_name, error: undefined },
        firstName: { value: response.data.first_name, error: undefined },
        middleName: { value: response.data.mid_name, error: undefined },
        birthDate: { value: response.data.birth_date, error: undefined },
        charName: { value: response.data.char_name, error: undefined },
        role: { value: response.data.role, error: undefined },
        location: { value: response.data.location, error: undefined },
        playerRequest: response.data.player_request,
        payment: response.data.payment,
        photoCheck: Boolean(response.data.photo_check),
        status: response.data.status,
      }
      setUserData(validResponse);
      setIsLoading(false);
    } catch (err) {
      toast.error('Ошибка при получении данных');
    }
  }

  fetchPlayerInfo();
}, [userId]);

const renderData = React.useMemo(() => {
  if (userData) {
    return (
      <>
        <StatusTable
          vkId={userId}
          playerRequest={userData.playerRequest}
          payment={userData.payment}
          photoCheck={userData.photoCheck}
          isLoading={isLoading}
          isAdmin={true}
        />

        <PlayerForm
          vkId={userId}
          lastName={userData.lastName}
          firstName={userData.firstName}
          middleName={userData.middleName}
          birthDate={userData.birthDate}
          isLoading={isLoading}
          isAdmin={true}
        />

        <CharForm
          vkId={userId}
          charName={userData.charName}
          role={userData.role}
          location={userData.location}
          isLoading={isLoading}
          isAdmin={true}
        />
      </>
    )
  }
}, [userData, isLoading, userId]);

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h3 style={{ color: 'white' }}>Редактировать пользователя</h3>
        <InputForm
          label='Ссылка на страницу ВК'
          type='text'
          name='link'
          value={userLink}
          onChange={handleLinkChange}
        />

        <button onClick={handleSubmit} disabled={!userLink}>ПОКАЗАТЬ</button>
      </div>

      {renderData}

      <Toaster
        position="bottom-left"
        reverseOrder={false}
      />
    </>
  )
}