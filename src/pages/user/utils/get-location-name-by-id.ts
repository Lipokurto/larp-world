import { LocationItem } from '../type';

export function getLocationNameById(id: number, locationList: LocationItem[]): string {
  return locationList.find(p => p.id === id)?.name || '-';
}
