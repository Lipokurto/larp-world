import armor from '../../assets/armor-zone/helmet.jpg';

import { HitZone } from '../../components';

export const itemHelmet = {
  label: 'Шлем',
  text: 
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