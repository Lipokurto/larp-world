import icon from '../../../../assets/cards/icons/injury/exhaustion.png';

import { Item } from '../../../type';

export const exhaustion: Item = {
  label: 'Истощение',
  icon: icon,
  element:
    <>
      <div>Вы не можете пользоваться оружием. Можно передвигаться только медленным шагом.</div>
    </>
}