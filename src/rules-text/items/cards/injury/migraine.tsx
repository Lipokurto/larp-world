import icon from '../../../../assets/cards/icons/injury/migraine.png';

import { Item } from '../../../type';

export const migraine: Item = {
  label: 'Мигрень',
  icon: icon,
  element: (
    <>
      <div>Игрок не может носить шлем.</div>
      <div>Автоматически появляется после действия <b>«Оглушение»</b>.</div>
    </>
  ),
}