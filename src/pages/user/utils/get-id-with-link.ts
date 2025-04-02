import { testResponse } from './test';
import VK from './vk';

function extractUsernameFromVkLink(link:string): string {
  const match = link.match(/https:\/\/vk\.com\/([a-zA-Z0-9_.]+)/);
  if (match && match[1]) {
    return match[1];
  }

  return '';
}

export function getIdWithLink(link: string, isCreateDev?: boolean): string {
  let userId = '';
  if (process.env.REACT_APP_NEW === 'prod') {
    try {
      const userName = extractUsernameFromVkLink(link);
      VK.Api.call('users.get', { user_ids: userName, v:'5.81' }, (r: any) => {
        userId = r.response[0].id;
      });
    } catch (error) {
      console.error('Error fetching user ID:', error);
      return 'Ошибка поиска пользователя';
    }
  } else {
    if (isCreateDev) {
      userId = Math.floor(Math.random() * 9999).toString();
    } else {
      userId = testResponse.session.user.id;
    }
  }

  return userId;
}