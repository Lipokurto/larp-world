import React from 'react';
import axios from 'axios';

import VK from './vk';
import { vkRegistry } from '../../api/paths';
import { testResponse } from './test';
import { PlayerForm } from './components/player-form';

type User = {
  domain: string,
  first_name: string,
  href: string,
  id: string,
  last_name: string,
  nickname: string,
}

export type VKResponse = {
  session: Session,
  status: string,
}

type Session = {
  access_token: string,
  expire: number,
  secret: string,
  sig: string,
  user: User,
}

async function checkUserHttp(vkId: string, vkLink: string): Promise<string | undefined> {
  try {
    await axios.post(vkRegistry, { vk_id: vkId, vk_link: vkLink });

    return 'NEW';
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      if (error.response.data.message === 'Такой пользователь существует') {

        return 'OLD';
      }
    }

    return undefined;
  }
}

export function VKAuth(): JSX.Element {
  const [userRegistryStatus, setRegistryStatus] = React.useState<string | undefined> (undefined);
  const [user, setUser] = React.useState<User | undefined>(undefined);
  const [session, setSession] = React.useState<Session | undefined>(undefined);

  const handleLogin = React.useCallback(async () => {
    if (process.env.REACT_APP_NEW === 'prod') {
      VK.Auth.login(async (response: VKResponse) => {
        const { user } = response.session;
        if (user.id) {
          console.log('User authorized:', user.href);
          setRegistryStatus(await checkUserHttp(user.id, user.href));
          setUser(user);
          setSession(response.session);
        } else {
          console.error('Authorization failed');
        }
      }, VK.access.PHOTOS);
    } else {
      const { user } = testResponse.session;
      setRegistryStatus(await checkUserHttp(user.id, user.href));
      setUser(user);
      setSession(testResponse.session);
    }
  }, []);

  const handleLogOut = React.useCallback(async () => {
    if (process.env.REACT_APP_NEW === 'prod') {
      await VK.Auth.logout();
      setRegistryStatus(undefined);
      setUser(undefined);
      setSession(undefined);
    } else {
      setRegistryStatus(undefined);
      setUser(undefined);
      setSession(undefined);
    }
  }, []);

  const statusText = React.useMemo(() => {
    if (userRegistryStatus === 'NEW') {
      return <div style={{ color: 'green' }}>Добро пожаловать, {user?.first_name}!</div>
    }

    if (userRegistryStatus === 'OLD') {
      return <div style={{ color: 'white' }}>С возвращением, {user?.first_name}!</div>
    }

    return <div style={{ color: 'red' }}>Пожалуйста, авторизуйтесь</div>
  }, [user, userRegistryStatus]);

  const renderButtons = React.useMemo(() => {
    if (!session) {
      return <button onClick={handleLogin}>Войти через ВКонтакте</button>
    }

    return <button onClick={handleLogOut}>Выйти</button>
  }, [session]);

  return (
    <div>
      {renderButtons}
      {statusText}

      {user && (
        <PlayerForm vkId={user.id}/>
      )}
    </div>
  );
}
