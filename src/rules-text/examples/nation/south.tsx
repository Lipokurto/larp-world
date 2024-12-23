import male from '../../../assets/rules/nation/south/male.png';
import female from '../../../assets/rules/nation/south/female.png';
import south01 from '../../../assets/rules/nation/south/01.jpg';
import south02 from '../../../assets/rules/nation/south/02.jpg';
import south03 from '../../../assets/rules/nation/south/03.jpg';
import south04 from '../../../assets/rules/nation/south/04.jpg';

import { ImagesAdaptive } from '../../../components';
import { Item } from '../../type';

import s from './nation.module.css';

const casual = [south01, south02];
const high = [south03, south04];

export const southFasionNorm: Item = {
  label: 'Повседневная мода',
  element: (
    <div className={s.container}>
      <ImagesAdaptive images={casual} />
      <div>Суровый жаркий климат сформировал свой уникальный стиль одежды который позволяет сохранять температуру тела в любых условиях</div>
      <div>Одежда должна просторной, удобной, и уже потом красивой</div>
      <div>При этом способы выделиться в таком стиле достаточно ограничены и в основном сводятся к ветвистыми головным уборам</div>
    </div>
  ),
}

export const southFasionHigh: Item = {
  label: 'Высокая мода',
  element: (
    <div className={s.container}>
      <ImagesAdaptive images={high} />
      <div>Южане не отделяют себя по сословиям, но очень любят показать свою состоятельность</div>
      <div>Красивые узоры, редкие ткани, украшения, все что может показать твой достаток и успех</div>
    </div>
  ),
}

export const south: Item = {
  label: 'Южане',
  element: (
    <>
      <div>
        <div className={s.container_first}>
          <img src={male} alt='Fasion' />
          <img src={female} alt='Fasion' />
        </div>
      </div>

      <div className={s.label}>Описание</div>
      <div className={s.listContainer}>
        <div><b>Внешность:</b> Темные длинные  волосы, минимум растительности на лице, смуглая кожа</div>
        <div><b>Снаряжение:</b> Ламеллярные доспехи, кольчуги, копья, малые щиты и луки</div>
        <div><b>Распространение:</b> Кушанская империя</div>
        <div><b>Религия:</b> Политеизм</div>
        <div><b>Речь:</b> Восточный акцент</div>
      </div>
    </>
  ),
}