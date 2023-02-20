import hiAr01 from '../../../assets/rules/armor/hi-quality/01.jpg';
import hiAr02 from '../../../assets/rules/armor/hi-quality/02.jpg';
import hiAr03 from '../../../assets/rules/armor/hi-quality/03.jpg';

import s from './armor.module.css';

export const hiArmor = {
  label: 'Примеры доспехов хорошего качества',
  text: 
    <>
      <div>      
        <div class={s.container}>
          <img src={hiAr01} alt='Armor' />
          <img src={hiAr02} alt='Armor' />
          <img src={hiAr03} alt='Armor' />
        </div>
        <div>В примерах не учитывается наличие шлема</div>
      </div>
    </>
}