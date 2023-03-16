export type ObsessedType = {
  label: string,
  value: {
    src: {
      on: string,
      off: string,
    },
    hits: number,
    isAlive: boolean,
  },
};

export type MonsterLabel = 'Мерзость' | 'Тяжеловес' | 'Падальщик';