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
