import male from '../../../assets/rules/nation/midens/male.png';
import female from '../../../assets/rules/nation/midens/female.png';
import midens01 from '../../../assets/rules/nation/midens/01.jpg';
import midens02 from '../../../assets/rules/nation/midens/02.jpg';
import midens03 from '../../../assets/rules/nation/midens/03.jpg';
import midens04 from '../../../assets/rules/nation/midens/04.jpg';

import { Item } from '../../type';
import { ImagesAdaptive } from '../../../components';

import s from './nation.module.css';

const casual = [midens01, midens02];
const high = [midens03, midens04];

export const midensFasionNorm: Item = {
  label: 'Повседневная мода',
  element: (
    <div className={s.container}>
      <ImagesAdaptive images={casual} />
      <div>Простолюдины старались формировать свою одежду из практичных соображений</div>
      <div>Одежда должна быть удобной, теплой, и уже потом красивой</div>
    </div>
  ),
}

export const midensFasionHigh: Item = {
  label: 'Высокая мода',
  element: (
    <div className={s.container}>
      <ImagesAdaptive images={high} />
      <div>Аристократия всегда стремилась отделить себя от простолюдин, и одежда один из способов этого добиться</div>
      <div>Яркие цвета, вышивка, редкие ткани, все это должно говорить о том, что хозяин одежды может себе это позволить</div>
      <div>Различные аксессуары в виде цепей, фибул, перьев позволяли подчеркнуть статус своего хозяина</div>
    </div>
  ),
}

export const midens: Item = {
  label: 'Мода мединцев',
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
        <div><b>Внешность:</b> Темный или светло темные волосы, светлая или смугловатая кожа, аккуратная растительность на лице</div>
        <div><b>Снаряжение:</b> Классические средневековые европейские доспехи</div>
        <div><b>Распространение:</b> Основное распространение на территории королевства Мидленд и империи Тюдор</div>
        <div><b>Религия:</b>  Святой престол</div>
        <div><b>Речь:</b> Чистая</div>
      </div>
    </>
  ),
}