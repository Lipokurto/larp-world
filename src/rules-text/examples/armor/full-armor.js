import fuAr01 from '../../../assets/rules/armor/full/01.jpg';
import fuAr02 from '../../../assets/rules/armor/full/02.jpg';
import fuAr03 from '../../../assets/rules/armor/full/03.jpg';

import s from './armor.module.css';

export const fullArmor = {
  label: 'Примеры полной брони',
  text: 
    <>
      <div>      
        <div class={s.container}>
          <img src={fuAr01} alt='Armor' />
          <img src={fuAr02} alt='Armor' />
          <img src={fuAr03} alt='Armor' />
        </div>
        <div>В примерах не учитывается наличие шлема</div>
      </div>
    </>
}