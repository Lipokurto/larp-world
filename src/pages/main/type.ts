export type BandItem = {
  image: string,
  status: StatusBand,
  title: string,
  capitan: string,
  description: string,
  contact: string,
};

export enum StatusBand {
  free = 'Банда',
  hired = 'Наемники',
  order = 'Орден',
  inquisitors = 'Инквизиция',
  unknown = 'Неизвесно',
}

export type Link = {
  id: number,
  name: string,
  link: string,
  page: string,
}

export type VKResponse = {
  session: Session,
  status: string,
}

export type User = {
  domain: string,
  first_name: string,
  href: string,
  id: string,
  last_name: string,
  nickname: string,
}

export type Session = {
  access_token: string,
  expire: number,
  secret: string,
  sig: string,
  user: User,
}