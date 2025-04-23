import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { NavigateFunction, NavLink, useNavigate } from 'react-router-dom';

import { useAppDispatch } from '../../redux/hooks';
import { loginFailure, loginStart, loginSuccess } from '../../redux/user-slice';
import vkImage from '../../assets/icons/social/vk.png';
import packImage from '../../assets/icons/pack.png';
import { User, VKResponse } from '../main/type';
import { testResponse } from '../main/test';
import VK from '../main/vk';

import s from './user.module.scss';

export function UserEmptyPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate: NavigateFunction = useNavigate();

const handleLogin = React.useCallback(async (e: React.MouseEvent) => {
  e.nativeEvent.stopImmediatePropagation();

  try {
    dispatch(loginStart());

    if (process.env.REACT_APP_NEW === 'prod') {
      const userData = await new Promise<User>((resolve, reject) => {
        VK.Auth.login((response: VKResponse) => {
          if (response.session?.user) {
            console.log('User authorized:', response.session.user.href);
            resolve(response.session.user);
          } else {
            reject(new Error('Авторизация не удалась'));
          }
        }, VK.access.PHOTOS);
      });

      dispatch(loginSuccess(userData));
    } else {
      const { user } = testResponse.session;
      dispatch(loginSuccess(user));
    }

    navigate('/user');
  } catch (error: any) {
    dispatch(loginFailure(error.message));
    toast.error('Ошибка авторизации');
  }
}, [dispatch, navigate]);

  return (
  <>
    <div className={s.unknownContainer}>
      <img src={packImage} />
      <h3>Войдите в личный кабинет</h3>
      <div>Чтобы разблокировать свой личный кабинет пройдите <NavLink to='/player/registration'>регистрацию</NavLink></div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div>Или авторизуйтесь</div>
        <img src={vkImage} width={50} onClick={handleLogin} />
      </div>
    </div>

    <Toaster
      position="bottom-left"
      reverseOrder={false}
    />
  </>
  )
}