import armor from '../../assets/armor-zone/leg.jpg';

import { HitZone } from '../../components';

export const itemLeg = {
  label: 'Бедро',
  text: 
    <>
      <div>
        Бронированные поножи должны быть визуально определимы. Высокие сапоги не являются кожанной броней
      </div>
      <br />
      <br />
      <HitZone src={armor} />
    </>
}