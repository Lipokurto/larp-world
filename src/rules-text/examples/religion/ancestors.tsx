import symbol from '../../../assets/rules/religion/north.png';

import { Item } from '../../type';

import s from './religion.module.css';

export const ancestors: Item = {
  label: 'Культ предков',
  element:
    <>      
      <div>      
        <div className={s.container_first}>
          <img src={symbol} alt='Religion' />
        </div>
      </div>

      <h3>Описание</h3>
      <div>Верование в котором все строится на том что предки ждут павших воинов чтоб сразиться вместе с ними после смерти</div>
      <div><b>Глава:</b> Провидцы</div>
      <div><b>Символика:</b> Ворон</div>
      <div><b>Цвета:</b> Черный, зеленый, синий</div>
      <div><b>Распространение:</b> Северные земли</div>
    </>
}