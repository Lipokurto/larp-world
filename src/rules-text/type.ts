export type Item = {
  label: string,
  element: JSX.Element,
  icon?: string,
  weight?: number,
  desc?: string,
  player?: string,
  psyLevel?: number,
  marker?: string,
  count?: number,
};

export type VideoItem = {
  name: string,
  link: string,
}