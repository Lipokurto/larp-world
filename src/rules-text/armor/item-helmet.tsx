import React from 'react';

import armor from '../../assets/armor-zone/helmet.jpg';

import { HitZone } from '../../components';
import { Item } from '../type';

export const itemHelmet: Item = {
  label: 'Шлем',
  element: 
    <>
      <div>
        С целью уменьшения травматичности в бою введится правило обязательного ношения шлема
      </div>
      <br />
      <div>
        Если у вас нет шлема, считается что вы  не готовы к бою и любой удар будет для вас фатальным
      </div>
      <br />
      <HitZone src={armor} />
    </>
}