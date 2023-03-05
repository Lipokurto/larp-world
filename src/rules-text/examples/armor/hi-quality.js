import hiAr01 from '../../../assets/rules/armor/hi-quality/01.jpg';
import hiAr02 from '../../../assets/rules/armor/hi-quality/02.jpg';
import hiAr03 from '../../../assets/rules/armor/hi-quality/03.jpg';

import { ImagesAdaptive } from '../../../components';

const armor = [hiAr01, hiAr02, hiAr03];

export const hiArmor = {
  label: 'Примеры доспехов хорошего качества',
  text: 
    <>
      <div>
        <ImagesAdaptive images={armor} />
        <div>В примерах не учитывается наличие шлема</div>
      </div>
    </>
}