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
  monsters = 'Чудовища',
  unknown = 'Неизвесно',
}

