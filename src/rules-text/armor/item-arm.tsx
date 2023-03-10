import React from 'react';

import armor from '../../assets/armor-zone/arm.jpg';
import { HitZone } from '../../components';
import { Item } from '../type';

export const itemArm: Item = {
  label: 'Рука',
  element: 
    <>
      <div>
        В рассчет берется область между кистью и локтем
      </div>
      <br />
      <div>
        При этом наличиее перчаток, или локтя не влияет на уровень бронированности, но являются средствами индивидуального уменьшения травматичности.
        В рассчет может браться высокая крага перчатки закрывающая 3/4 рассчетной области
      </div>
      <br />
      <HitZone src={armor} />
    </>
}