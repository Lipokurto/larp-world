import { testResponse } from './test';
import VK from './vk';

function extractUsernameFromVkLink(link:string): string {
  const match = link.match(/https:\/\/vk\.com\/([a-zA-Z0-9_.]+)/);
  if (match && match[1]) {
    return match[1];
  }

  return '';
}

export function getIdWithLink(link: string, isCreateDev?: boolean): Promise<string> {
  if (process.env.REACT_APP_NEW === 'prod') {
    return new Promise((resolve, reject) => {
      try {
        const userName = extractUsernameFromVkLink(link);
        VK.Api.call('users.get', { user_ids: userName, v: '5.81' }, (r: any) => {
          if (r && r.response && r.response[0]) {
            resolve(r.response[0].id);
          } else {
            reject('Ошибка поиска пользователя');
          }
        });
      } catch (error) {
        console.error('Error fetching user ID:', error);
        reject('Ошибка поиска пользователя');
      }
    });
  } else {
    if (isCreateDev) {
      return Promise.resolve(Math.floor(Math.random() * 9999).toString());
    } else {
      return Promise.resolve(testResponse.session.user.id);
    }
  }
}