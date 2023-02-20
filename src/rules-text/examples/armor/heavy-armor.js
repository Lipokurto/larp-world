import heAr01 from '../../../assets/rules/armor/heavy/01.jpg';
import heAr02 from '../../../assets/rules/armor/heavy/02.jpg';
import heAr03 from '../../../assets/rules/armor/heavy/03.jpg';

import s from './armor.module.css';

export const heavyArmor = {
  label: 'Примеры тяжелой брони',
  text: 
    <>
      <div>      
        <div class={s.container}>
          <img src={heAr01} alt='Armor' />
          <img src={heAr02} alt='Armor' />
          <img src={heAr03} alt='Armor' />
        </div>
        <div>В примерах не учитывается наличие шлема</div>
      </div>
    </>
}