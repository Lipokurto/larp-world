import fuAr01 from '../../../assets/rules/armor/full/01.jpg';
import fuAr02 from '../../../assets/rules/armor/full/02.jpg';
import fuAr03 from '../../../assets/rules/armor/full/03.jpg';

import { ImagesAdaptive } from '../../../components';
import { Item } from '../../type';

const armor = [fuAr01, fuAr02, fuAr03];

export const fullArmor: Item = {
  label: 'Примеры полной брони',
  element: (
    <div>
      <ImagesAdaptive images={armor} />
      <div>В примерах не учитывается наличие шлема</div>
    </div>
  ),
}