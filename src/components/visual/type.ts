export type CargoItem = {
  value: { 
    id: string,
    weight: number,
  },
  icon: string | undefined,
  label: string,
};

export type OptionsCargo = {
  value: number,
  label: JSX.Element,
};

export type ArmorItem = {
  value: {
    type: string,
    armorClass: number,
  },
  label: string,
};

export type HelmetItem = {
  value: {
    type: string,
    hasArmor: boolean,
  },
  label: string,
};

export type ArmorHit = {
  limb: string,
  hits: number,
};

export type BackItem = {
  value: boolean,
  label: 'Да' | 'Нет',
};

export type HandleArmor = {
  name: string,
  option: ArmorItem,
};