import liAr01 from '../../../assets/rules/armor/light/01.jpg';
import liAr02 from '../../../assets/rules/armor/light/02.jpg';
import liAr03 from '../../../assets/rules/armor/light/03.jpg';

import { ImagesAdaptive } from '../../../components';

const armor = [liAr01, liAr02, liAr03];

export const lightArmor = {
  label: 'Примеры легкой брони',
  text: 
    <>
      <div>      
        <ImagesAdaptive images={armor} />
        <div>В примерах не учитывается наличие шлема</div>
      </div>
    </>
}