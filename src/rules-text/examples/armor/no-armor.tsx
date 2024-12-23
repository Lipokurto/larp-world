import noAr01 from '../../../assets/rules/armor/no-armor/01.jpg';
import noAr02 from '../../../assets/rules/armor/no-armor/02.jpg';
import noAr03 from '../../../assets/rules/armor/no-armor/03.jpg';

import { ImagesAdaptive } from '../../../components';
import { Item } from '../../type';

const armor = [noAr01, noAr02, noAr03];

export const noArmor: Item = {
  label: 'Примеры отсутствия брони',
  element: (
    <div>
      <ImagesAdaptive images={armor} />
      <div>В примерах не учитывается наличие шлема</div>
    </div>
  ),
}