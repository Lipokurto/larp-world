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
          const username = extractUsernameFromVkLink(link);
          if (!username) {
            reject('Некорректная ссылка');
            return;
          }
          const response = await axios.get('/api/get-vk-id', { params: { username } });
          if (response.data.id) {
            resolve(response.data.id.toString());
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