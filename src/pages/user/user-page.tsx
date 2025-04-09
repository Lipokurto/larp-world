import React from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { NavigateFunction, useNavigate } from 'react-router-dom';

import { CharForm, PlayerForm, StatusTable } from './components/forms';
import { info } from '../../api/user';
import { UserData } from './type';
import { AdminSelector } from './admin';
import { CaptainSelector } from './captain';
import exitImage from '../../assets/icons/social/exit.png';
import { useAppDispatch } from '../../redux/hooks';
import { logout } from '../../redux/user-slice';

import s from './user.module.scss';

type Props = {
  vkId: string,
}

export function UserPage(props: Props): JSX.Element {
  const [userData, setUserData] = React.useState<UserData | undefined>(undefined);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const dispatch = useAppDispatch();
  const navigate: NavigateFunction = useNavigate();

  React.useEffect(() => {
    const fetchPlayerInfo = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(info, {
          params: { vk_id: props.vkId },
        });
        const validResponse = {
          lastName: { value: response.data.last_name, error: undefined },
          firstName: { value: response.data.first_name, error: undefined },
          middleName: { value: response.data.mid_name, error: undefined },
          birthDate: { value: response.data.birth_date, error: undefined },
          charName: { value: response.data.char_name, error: undefined },
          role: { value: response.data.role, error: undefined },
          locationId: { value: response.data.location_id, error: undefined },
          playerRequest: response.data.player_request,
          payment: response.data.payment,
          photoCheck: response.data.photo_check,
          status: response.data.status,
        }
        setUserData(validResponse);
        setIsLoading(false);
      } catch (err) {
        toast.error('Ошибка при получении данных');
      }
    }

  fetchPlayerInfo();
}, [props]);

const handleLogout = React.useCallback(() => {
  dispatch(logout());
  navigate('/')
}, []);

const renderElement = React.useMemo(() => {
  if (userData) {
    if (userData.status === 'ADMIN') {
      return <AdminSelector />
    }

    if (userData.status === 'CAPTAIN') {
      return (
        <CaptainSelector
          userData={userData}
          vkId={props.vkId}
          isLoading={isLoading}
        />
      )
    }

    return (
      <div className={s.formContainer}>
        <PlayerForm
          vkId={props.vkId}
          lastName={userData.lastName}
          firstName={userData.firstName}
          middleName={userData.middleName}
          birthDate={userData.birthDate}
          isLoading={isLoading}
        />

        <CharForm
          vkId={props.vkId}
          charName={userData.charName}
          role={userData.role}
          locationId={userData.locationId}
          isLoading={isLoading}
        />

        <StatusTable
          vkId={props.vkId}
          playerRequest={userData.playerRequest}
          payment={userData.payment}
          photoCheck={userData.photoCheck}
          isLoading={isLoading}
          isAdmin={userData.status === 'ADMIN'}
        />
      </div>
    )
  }

  return null;
}, [userData, props, isLoading]);

  return (
  <>
    <div className={s.loginContainer}>
      <img src={exitImage} width={30} onClick={handleLogout} />
    </div>

    {renderElement}

    <Toaster
      position="bottom-left"
      reverseOrder={false}
    />
  </>
  )
}