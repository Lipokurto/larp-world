import React from 'react';

import armor from '../../assets/armor-zone/leg.jpg';

import { HitZone } from '../../components';
import { Item } from '../type';

export const itemLeg: Item = {
  label: 'Бедро',
  element: 
    <>
      <div>
        Бронированные поножи должны быть визуально определимы. Высокие сапоги не являются кожаной броней
      </div>
      <br />
      <br />
      <HitZone src={armor} />
    </>
}