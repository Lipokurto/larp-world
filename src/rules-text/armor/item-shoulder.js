import armor from '../../assets/armor-zone/shoulder.jpg';

import { HitZone } from '../../components';

export const itemShoulder = {
  label: 'Плече',
  text: 
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