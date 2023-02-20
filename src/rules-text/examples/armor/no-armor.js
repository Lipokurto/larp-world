import noAr01 from '../../../assets/rules/armor/no-armor/01.jpg';
import noAr02 from '../../../assets/rules/armor/no-armor/02.jpg';
import noAr03 from '../../../assets/rules/armor/no-armor/03.jpg';

import s from './armor.module.css';

export const noArmor = {
  label: 'Примеры отсутсвия брони',
  text: 
    <>
      <div>      
        <div class={s.container}>
          <img src={noAr01} alt='Armor' />
          <img src={noAr02} alt='Armor' />
          <img src={noAr03} alt='Armor' />
        </div>
        <div>В примерах не учитывается наличие шлема</div>
      </div>
    </>
}