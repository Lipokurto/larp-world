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
  location: Item,
  playerRequest: boolean,
  payment: string,
  photoCheck: boolean,
  status: string,
}