import React from 'react';

import VK from './vk';
import { testResponse } from './test';
import { CharForm, PlayerForm, StatusTable } from './components/forms';
import toast, { Toaster } from 'react-hot-toast';
import { UserData } from './type';
import { info } from './api/paths';
import axios from 'axios';

function extractUsernameFromVkLink(link:string): string {
  const match = link.match(/https:\/\/vk\.com\/([a-zA-Z0-9_.]+)/);
  if (match && match[1]) {
    return match[1];
  }

  return '';
}

export function AdminPage(): JSX.Element {
  const [userLink, setUserLink] = React.useState<string>('');
  const [userId, setUserId] = React.useState<string>('');
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [userData, setUserData] = React.useState<UserData | undefined>(undefined);

  const handleChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setUserLink(e.target.value);
  }, []);

  const handleSubmit = React.useCallback( async () => {
    if (process.env.REACT_APP_NEW === 'prod') {
      try {
        const userName = extractUsernameFromVkLink(userLink);
        VK.Api.call('users.get', { user_ids: userName, v:'5.81' }, (r: any) => {
          setUserId(r.response[0].id);
          fetchUserInfo(r.response[0].id);
        });
      } catch (error) {
        console.error('Error fetching user ID:', error);
        return 'Ошибка поиска пользователя';
      }
    } else {
      setUserId(testResponse.session.user.id);
      fetchUserInfo(testResponse.session.user.id);
    }

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
        middleName: { value: response.data.middle_name, error: undefined },
        birthDate: { value: response.data.birth_date, error: undefined },
        charName: { value: response.data.char_name, error: undefined },
        role: { value: response.data.role, error: undefined },
        location: { value: response.data.location, error: undefined },
        playerRequest: response.data.player_request,
        payment: response.data.payment,
        photoCheck: Boolean(response.data.photo_check),
        isAdmin: Boolean(response.data.isAdmin),
        isBanned: Boolean(response.data.isBanned),
      }
      setUserData(validResponse);
      setIsLoading(false);
    } catch (err) {
      toast.error('Ошибка при получении данных');
    }
  }

  fetchPlayerInfo();
}, [userId]);

  return (
    <>
      <div>
        <label style={{ color: 'white' }}>Ссылка на страницу ВК</label>
        <input type='text' onChange={handleChange} />
        <button onClick={handleSubmit}>Проверить</button>
      </div>

      {userData && (
        <>
          <StatusTable
            vkId={userId}
            playerRequest={userData.playerRequest}
            payment={userData.payment}
            photoCheck={userData.photoCheck}
            isLoading={isLoading}
            isAdmin={userData.isAdmin}
          />

          <PlayerForm
            vkId={userId}
            lastName={userData.lastName}
            firstName={userData.firstName}
            middleName={userData.middleName}
            birthDate={userData.birthDate}
            isLoading={isLoading}
          />

          <CharForm
            vkId={userId}
            charName={userData.charName}
            role={userData.role}
            location={userData.location}
            isLoading={isLoading}
          />
        </>
      )}

      <Toaster
        position="bottom-left"
        reverseOrder={false}
      />
    </>
  )
}