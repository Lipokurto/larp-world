import React from 'react';

import hiAr01 from '../../../assets/rules/armor/hi-quality/01.jpg';
import hiAr02 from '../../../assets/rules/armor/hi-quality/02.jpg';
import hiAr03 from '../../../assets/rules/armor/hi-quality/03.jpg';

import { ImagesAdaptive } from '../../../components';
import { Item } from '../../type';

const armor = [hiAr01, hiAr02, hiAr03];

export const hiArmor: Item = {
  label: 'Примеры доспехов хорошего качества',
  element: 
    <>
      <div>
        <ImagesAdaptive images={armor} />
        <div>В примерах не учитывается наличие шлема</div>
      </div>
    </>
}