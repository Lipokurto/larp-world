import liAr01 from '../../../assets/rules/armor/light/01.jpg';
import liAr02 from '../../../assets/rules/armor/light/02.jpg';
import liAr03 from '../../../assets/rules/armor/light/03.jpg';

import s from './armor.module.css';

export const lightArmor = {
  label: 'Примеры легкой брони',
  text: 
    <>
      <div>      
        <div class={s.container}>
          <img src={liAr01} alt='Armor' />
          <img src={liAr02} alt='Armor' />
          <img src={liAr03} alt='Armor' />
        </div>
        <div>В примерах не учитывается наличие шлема</div>
      </div>
    </>
}