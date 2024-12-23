import symbol from '../../../assets/rules/religion/south.png';

import { Item } from '../../type';

import s from './religion.module.css';

export const politeism: Item = {
  label: 'Политеизм',
  element: (
    <>
      <div>
        <div className={s.container_first}>
          <img src={symbol} alt='Religion' />
        </div>
      </div>

      <h3>Описание</h3>
      <div>Для воинских кланов свойственно поклонение - богу разрушения Шиве, для торговцев - богу мудрости Ганешу</div>
      <div><b>Глава:</b> Жрецы отдельных богов</div>
      <div><b>Символика:</b> Третий глаз</div>
      <div><b>Цвета:</b> Фиолетовый, золотой, красный</div>
      <div><b>Распространение:</b> Кушаанская империя</div>
    </>
  ),
}