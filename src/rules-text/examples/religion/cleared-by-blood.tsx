import symbol from '../../../assets/rules/religion/cleared-by-blood.png';

import { Item } from '../../type';

import s from './religion.module.css';

export const clearedByBlood: Item = {
  label: 'Очищенные кровью',
  element:
    <>      
      <div>      
        <div className={s.container_first}>
          <img src={symbol} alt='Religion' />
        </div>
      </div>

      <h3>Описание</h3>
      <div>Радикальное ответвление Святого престола, которое не признает власти Ватикана и священного происхождения власти Святого престола.</div>
      <div><b>Символика:</b> Окровавленные крылья, кровавая длань</div>
      <div><b>Цвета:</b> Черный, красный, белый</div>
      <div><b>Распространение:</b> Горы севера Альянса Панерия</div>
    </>
}