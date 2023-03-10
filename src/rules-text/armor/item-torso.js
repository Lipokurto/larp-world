import armor from '../../assets/armor-zone/torso.jpg';

import { HitZone } from '../../components';

export const itemTorso = {
  label: 'Торс',
  text: 
    <>
      <div>
        За ношение нагрудника начисляется больше всего хитов, так как в реальности эта броня защищает жизненно важные органы
      </div>
      <br />
      <HitZone src={armor} />
    </>
}