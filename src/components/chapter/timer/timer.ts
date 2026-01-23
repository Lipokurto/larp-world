export type PayLimits = {
  timeLimit: Date,
  name: string,
  price: number,
  text: string,
};

export type DiffTime = {
  days: number,
  hours: number,
  minutes: number,
  seconds: number,
};

export const standardDiff = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
};

export const playTime = new Date('2026-09-30T00:00:00');

export const payLimits: PayLimits[] = [
  { timeLimit: new Date('2026-05-01T23:59:59'), name: 'Благородный', price: 5000, text: 'Взносы формирующие базис бюджета, очень важны для мастеров' },
  { timeLimit: new Date('2026-08-01T23:59:59'), name: 'Обычный', price: 5500, text: 'Взносы которые покрывают расходы бюджета' },
  { timeLimit: new Date('2026-10-11T23:59:59'), name: 'Ускоренный', price: 6000, text: 'Взносы которые позволят покрыть превышенный лимит бюджета' },
  { timeLimit: new Date('2026-10-05T23:59:59'), name: 'Горящий',price: 6500, text: 'Хочешь узнать что такое безумие?' },
];