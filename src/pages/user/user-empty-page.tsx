import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { NavigateFunction, NavLink, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../redux/hooks';
import { loginFailure, loginStart, loginSuccess } from '../../redux/user-slice';
import vkImage from '../../assets/icons/social/vk.png';
import packImage from '../../assets/icons/pack.png';
import { testResponse } from '../main/test';
// import { getAuthUrl } from '../main/authUtils'; // Утилита для генерации URL авторизации
import { getAuthUrl } from './utils/auth-utils';

import s from './user.module.scss';

export function UserEmptyPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate: NavigateFunction = useNavigate();

  const handleLogin = React.useCallback(async (e: React.MouseEvent) => {
    e.nativeEvent.stopImmediatePropagation();

    try {
      dispatch(loginStart());

      if (process.env.REACT_APP_NEW === 'prod') {
        const clientId = process.env.REACT_APP_VK_ID; // ID приложения из .env
        const redirectUri = `${window.location.origin}/auth/callback`; // URL для callback
        const scope = 'photos'; // Права доступа

        const authUrl = await getAuthUrl(clientId, redirectUri, scope);
        window.location.href = authUrl; // Перенаправление на страницу авторизации VK ID
      } else {
        const { user } = testResponse.session; // Тестовый пользователь для dev-режима
        dispatch(loginSuccess(user));
        navigate('/user');
      }
    } catch (error: any) {
      dispatch(loginFailure(error.message));
      toast.error('Ошибка авторизации');
    }
  }, [dispatch, navigate]);

  return (
    <>
      <div className={s.unknownContainer}>
        <img src={packImage} alt="pack" />
        <h3>Войдите в личный кабинет</h3>
        <div>
          Чтобы разблокировать свой личный кабинет пройдите{' '}
          <NavLink to="/player/registration">регистрацию</NavLink>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div>Или авторизуйтесь</div>
          <img src={vkImage} width={50} onClick={handleLogin} alt="vk" />
        </div>
      </div>

      <Toaster position="bottom-left" reverseOrder={false} />
    </>
  );
}