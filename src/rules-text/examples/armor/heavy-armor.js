import heAr01 from '../../../assets/rules/armor/heavy/01.jpg';
import heAr02 from '../../../assets/rules/armor/heavy/02.jpg';
import heAr03 from '../../../assets/rules/armor/heavy/03.jpg';

import { ImagesAdaptive } from '../../../components';

const armor = [heAr01, heAr02, heAr03];

export const heavyArmor = {
  label: 'Примеры тяжелой брони',
  text: 
    <>
      <div>
        <ImagesAdaptive images={armor} />
        <div>В примерах не учитывается наличие шлема</div>
      </div>
    </>
}