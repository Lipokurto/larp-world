import male from '../../../assets/rules/nation/south/male.png';
import female from '../../../assets/rules/nation/south/female.png';
import south01 from '../../../assets/rules/nation/south/01.jpg';
import south02 from '../../../assets/rules/nation/south/02.jpg';
import south03 from '../../../assets/rules/nation/south/03.jpg';
import south04 from '../../../assets/rules/nation/south/04.jpg';

import s from './nation.module.css';

export const southFasionNorm = {
  label: 'Повседневная мода',
  text: 
    <div className={s.container}>
      <div>Суровый жаркий климат сформировал свой уникальынй стиль одежды который позволяет сохранять температуру тела в любых условиях</div>
      <div>Одежда должна просторной, удобной, и уже потом красивой</div>
      <div>При этом способы выделиться в таком стиле достаточно ограничены и в основном сводятся к ветиватым головным уборам</div>
      <div class={s.sub_container}>
        <img src={south01} alt='Fasion' />
        <img src={south02} alt='Fasion' />
      </div>
    </div>
}

export const southFasionHigh = {
  label: 'Высокая мода',
  text: 
    <div className={s.container}>
      <div>Южане не отделяют себя по сословиям, но очень любят показать свою состоятельность</div>
      <div>Красивые узоры, редкие ткани, украшения, все что может показать твой достаток и успех</div>
      <div class={s.sub_container}>
        <img src={south03} alt='Fasion' />
        <img src={south04} alt='Fasion' />
      </div>
    </div>
}


export const south = {
  label: 'Южане',
  text: 
    <>      
      <div>      
        <div class={s.container_first}>
          <img src={male} alt='Fasion' />
          <img src={female} alt='Fasion' />
        </div>
      </div>

      <h3>Описание</h3>
      <div><b>Внешность:</b> Темные длинные  волосы, минимум растительности на лице, смуглая кожа</div>
      <div><b>Снаряжение:</b> Ламеллярные доспехи, кольчуги, копья, малые щиты и луки</div>
      <div><b>Распространение:</b> Кушанская империя</div>
      <div><b>Религия:</b> Политеизм</div>
      <div><b>Речь:</b> Восточный акцент</div>
    </>
}