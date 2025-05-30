import React from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';

import { loginSuccess, loginFailure } from '../../redux/user-slice';
import { exchangeCodeForToken } from '../user/utils/auth-utils';
import { User } from './type';

export function AuthCallback(): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  React.useEffect(() => {
    const handleCallback = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const deviceId = urlParams.get('device_id');
      const code = urlParams.get('code');

      if (!code) {
        dispatch(loginFailure('Код авторизации не получен'));
        toast.error('Ошибка авторизации: код не получен');
        navigate('/');
        return;
      }

      try {
        const redirectUri = `${window.location.origin}/auth/callback`;
        const userResponse = await exchangeCodeForToken(code, redirectUri, deviceId);

        if (userResponse.data?.error) {
          throw new Error(userResponse.data?.error.error_msg);
        }

        const userData: User = {
          id: userResponse.user_id,
          href: `https://vk.com/id${userResponse.user_id}`,
          accessToken: userResponse.access_token,
        };
        dispatch(loginSuccess(userData));
        toast.success('Авторизация успешна');
        navigate('/user');
      } catch (error: any) {
        dispatch(loginFailure(error.message));
        toast.error(`Ошибка авторизации: ${error.message}`);
        navigate('/');
      }
    };

    handleCallback();
  }, [dispatch, navigate]);

  return <div>Авторизация...</div>;
}