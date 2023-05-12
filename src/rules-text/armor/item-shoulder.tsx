import React from 'react';

import armor from '../../assets/armor-zone/shoulder.jpg';

import { HitZone } from '../../components';
import { Item } from '../type';

export const itemShoulder: Item = {
  label: 'Плечо',
  element: 
    <>
      <div>
        Защитой плеча считается наплечник, закрывающий плечо полностью
      </div>
      <br />
      <div>Горжет и бросары без самого наплечника не считаются защитой</div>
      <br />
      <HitZone src={armor} />
    </>
}