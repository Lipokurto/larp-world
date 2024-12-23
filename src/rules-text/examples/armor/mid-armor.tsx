import miAr01 from '../../../assets/rules/armor/mid/01.jpg';
import miAr02 from '../../../assets/rules/armor/mid/02.jpg';
import miAr03 from '../../../assets/rules/armor/mid/03.jpg';

import { ImagesAdaptive } from '../../../components';
import { Item } from '../../type';

const armor = [miAr01, miAr02, miAr03];

export const midArmor: Item = {
  label: 'Примеры легкой брони',
  element: (
    <div>
      <ImagesAdaptive images={armor} />
      <div>В примерах не учитывается наличие шлема</div>
    </div>
  ),
}