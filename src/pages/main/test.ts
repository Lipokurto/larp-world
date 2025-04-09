import { VKResponse } from './type';

export const testResponse: VKResponse = {
  session: {
    access_token: 'vk1.a.',
    expire: 1741540000,
    secret: 'oauth',
    sig: '38c06',
    user: {
      domain: 'alex_sin_cube',
      first_name: 'Alex',
      href: 'https://vk.com/alex_cube',
      id: '245000000',
      last_name: 'Sin',
      nickname: '',
    },
  },
  status: 'connected',
  };