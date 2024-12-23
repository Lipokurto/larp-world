import icon from '../../../../assets/cards/icons/injury/bleed.png';

import { Item } from '../../../type';

export const bleed: Item = {
  label: 'Кровотечение',
  icon: icon,
  element: (
    <div>По прошествии 15 минут игрок переходит в состояние <b>«Мертв»</b>.</div>
  ),
}