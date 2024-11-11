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

export const playTime = new Date('2025-10-01T00:00:00');

export const payLimits: PayLimits[] = [
  { timeLimit: new Date('2024-04-01T23:59:59'), name: 'Благородный', price: 3500, text: 'Взносы формирующие базис бюджета, очень важны для мастеров' },
  { timeLimit: new Date('2024-07-01T23:59:59'), name: 'Обычный', price: 4000, text: 'Взносы которые покрывают расходы бюджета' },
  { timeLimit: new Date('2024-09-11T23:59:59'), name: 'Ускоренный', price: 4500, text: 'Взносы которые позволят покрыть превышенный лимит бюджета' },
  { timeLimit: new Date('2024-10-05T23:59:59'), name: 'Горящий',price: 5000, text: 'Хочешь узнать что такое безумие?' },
];