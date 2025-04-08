import { useAppSelector } from '../../../redux/hooks';

export function getLocationNameById(id: number): string {
    const { locations } = useAppSelector((state) => state.appData);

  return locations.find(p => p.id === id)?.name || '-';
}
