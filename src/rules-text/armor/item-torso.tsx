import React from 'react';

import armor from '../../assets/armor-zone/torso.jpg';

import { HitZone } from '../../components';
import { Item } from '../type';

export const itemTorso: Item = {
  label: 'Торс',
  element: 
    <>
      <div>
        За ношение нагрудника начисляется больше всего хитов, так как в реальности эта броня защищает жизненно важные органы
      </div>
      <br />
      <HitZone src={armor} />
    </>
}