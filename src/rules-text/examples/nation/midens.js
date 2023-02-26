import male from '../../../assets/rules/nation/midens/male.png';
import female from '../../../assets/rules/nation/midens/female.png';
import midens01 from '../../../assets/rules/nation/midens/01.jpg';
import midens02 from '../../../assets/rules/nation/midens/02.jpg';
import midens03 from '../../../assets/rules/nation/midens/03.jpg';
import midens04 from '../../../assets/rules/nation/midens/04.jpg';

import s from './nation.module.css';

export const midensFasionNorm = {
  label: 'Повседневная мода',
  text: 
    <div className={s.container}>
      <div>Простолюдины старались формировать свою одежду из практичных соображений</div>
      <div>Одежда должна быть удобной, теплой, и уже потом красивой</div>
      <div class={s.sub_container}>
        <img src={midens01} alt='Fasion' />
        <img src={midens02} alt='Fasion' />
      </div>
    </div>
}

export const midensFasionHigh = {
  label: 'Высокая мода',
  text: 
    <div className={s.container}>
      <div>Аристократия всегда стремилась отделить себя от простолюдин, и одежда один из способов этого добиться</div>
      <div>Яркие цвета, вышивка, редкие ткани, все это должно говорить о том, что хозяин одежды может себе это позволить</div>
      <div>Различные аксессуары в виде цепей, фибул, перьев позволяли подчеркнуть статус своего хозяина</div>
      <div class={s.sub_container}>
        <img src={midens03} alt='Fasion' />
        <img src={midens04} alt='Fasion' />
      </div>
    </div>
}

export const midens = {
  label: 'Мода мединцев',
  text: 
    <>      
      <div>      
        <div class={s.container_first}>
          <img src={male} alt='Fasion' />
          <img src={female} alt='Fasion' />
        </div>
      </div>

      <h3>Описание</h3>
      <div><b>Внешность:</b> Темный или светло темные волосы, светлая или смугловатая кожа, аккуратная растительность на лице</div>
      <div><b>Снаряжение:</b> Классические средневековые европейские доспехи</div>
      <div><b>Распространение:</b> Основное распростронение на территории королевства Мидленд и империи Тюдор</div>
      <div><b>Религия:</b>  Святой престол</div>
      <div><b>Речь:</b> Чистая</div>
    </>
}