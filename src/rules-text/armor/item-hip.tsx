import React from 'react';

import armor from '../../assets/armor-zone/hip.jpg';

import { HitZone } from '../../components';
import { Item } from '../type';

export const itemHip: Item = {
  label: 'Бедро',
  element: 
    <>
      <div>
        Если тассеты или элементы брони плотно закрывают обязательную к защите зону то эта броня считается защитой бедра
      </div>
      <br />
      <div>
        Если планируете активно участвовать в боевых взаимодействиях подумайте про индивидуальную защиту паха
      </div>
      <br />
      <HitZone src={armor} />
    </>
}