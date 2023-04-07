import React from 'react';

import armor from '../../assets/armor-zone/arm.jpg';
import { HitZone } from '../../components';
import { Item } from '../type';

export const itemArm: Item = {
  label: 'Рука',
  element: 
    <>
      <div>
        В расчёт берется область между кистью и локтем
      </div>
      <br />
      <div>
        При этом наличие перчаток, или локтя не влияет на уровень тренированности, но являются средствами индивидуального уменьшения травматичности.
        В расчёт может браться высокая крага перчатки закрывающая 3/4 расчетной области
      </div>
      <br />
      <HitZone src={armor} />
    </>
}