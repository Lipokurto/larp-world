export type Item = {
  value: string,
  error?: string,
}

export type UserData = {
  lastName: Item,
  firstName: Item,
  middleName: Item,
  birthDate: Item,
  charName: Item,
  role: Item,
  locationId: Item,
  playerRequest: boolean,
  payment: string,
  photoCheck: boolean,
  status: string,
}

export type LocationItem = {
  id: number,
  name: string,
  type: string,
}

export type BuildingItem = {
  id: number,
  type: string,
  class: string,
  sign: boolean,
}