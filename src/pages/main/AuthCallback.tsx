import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';

import { loginSuccess, loginFailure } from '../../redux/user-slice';
import { exchangeCodeForToken } from '../user/utils/auth-utils';

export function AuthCallback(): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const handleCallback = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const deviceId = urlParams.get('device_id');
      const code = urlParams.get('code');

      if (!code) {
        console.error('Код авторизации не получен');
        dispatch(loginFailure('Код авторизации не получен'));
        toast.error('Ошибка авторизации: код не получен');
        navigate('/');
        return;
      }

      console.log('Код авторизации получен:', code);

      try {
        const redirectUri = `${window.location.origin}/auth/callback`;
        const userToken = await exchangeCodeForToken(code, redirectUri, deviceId);

        const userResponse = await axios.post('https://bobelifor.beget.app/get-user-info', {
          id_token: userToken.id_token,
          client_id: '53650942',
        });

        // const userResponse = await axios.post('https://id.vk.com/oauth2/public_info', {
        //   params: {
        //     client_id: process.env.REACT_APP_VK_ID,
        //     id_token: userToken.id_token,
        //   },
        // });

        console.log('Данные пользователяaaaa:', userResponse);
        if (userResponse.data?.error) {
          throw new Error(userResponse.data?.error.error_msg);
        }

        const userData = userResponse.data?.response[0];
        console.log('Данные пользователя:', userResponse.data?.response);
        dispatch(loginSuccess(userData));
        toast.success('Авторизация успешна');
        navigate('/user');
      } catch (error: any) {
        console.error('Ошибка авторизации:', error);
        dispatch(loginFailure(error.message));
        toast.error(`Ошибка авторизации: ${error.message}`);
        navigate('/');
      }
    };

    handleCallback();
  }, [dispatch, navigate]);

  return <div>Авторизация...</div>;
}