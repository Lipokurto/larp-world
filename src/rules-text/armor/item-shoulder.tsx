import React from 'react';

import armor from '../../assets/armor-zone/shoulder.jpg';

import { HitZone } from '../../components';
import { Item } from '../type';

export const itemShoulder: Item = {
  label: 'Плече',
  element: 
    <>
      <div>
        Защитой плеча считается наплечник, закрывающий плече полностью
      </div>
      <br />
      <div>Гаржет и бросары без самого наплечника не считаются защитой</div>
      <br />
      <HitZone src={armor} />
    </>
}