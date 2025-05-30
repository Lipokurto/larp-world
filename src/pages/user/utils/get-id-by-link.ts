import { testResponse } from '../../main/test';
import axios from 'axios';

function extractUsernameFromVkLink(link: string): string {
  const match = link.match(/https:\/\/vk\.com\/([a-zA-Z0-9_.]+)/);
  if (match && match[1]) {
    return match[1];
  }
  return '';
}

export function getIdWithLink(link: string, isCreateDev?: boolean): Promise<string> {
  if (process.env.REACT_APP_NEW === 'prod') {
    return new Promise((resolve, reject) => {
      (async () => {
        try {
          const screen_name = extractUsernameFromVkLink(link);
          if (!screen_name) {
            reject('Некорректная ссылка');
            return;
          }
          const response = await axios.post(`${process.env.REACT_APP_HOST}/resolveScreenName`, {
              screen_name,
              access_token: process.env.REACT_APP_APP_SERVICE_KEY,
          });

          if (response.data.response.object_id) {
            resolve(response.data.response.object_id.toString());
          } else {
            reject('Пользователь не найден');
          }
        } catch (error) {
          console.error('Error fetching user ID:', error);
          reject('Ошибка поиска пользователя');
        }
      })();
    });
  } else {
    if (isCreateDev) {
      return Promise.resolve(Math.floor(Math.random() * 9999).toString());
    } else {
      return Promise.resolve(testResponse.session.user.id);
    }
  }
}