import icon from '../../assets/icons/items/herbs.png';
import card from '../../assets/cards/herbs.png';

import { Item } from '../type';

import s from './items.module.css';

export const herbs: Item = {
  label: 'Лечебные травы',
  icon: icon,
  weight: 1,
  element: (
    <>
      <div className={s.icon}><img src={card} alt='' /></div>
      <div className={s.label}>Эффекты</div>
      <div>Лечебные травы необходимы для производства медкомплектов</div>
      <div className={s.label}>Вес: 1</div>
      <div className={s.label}>Ограничения:</div>

      <div className={s.listContainer}>
        <li>Одноразовое</li>
        <li>Игровой предмет</li>
        <li>Используются исключительно для производства и торговли</li>
      </div>
      <br />
      <div>Может покупаться у мастерского торговца, или добываться крестьянами</div>
    </>
  ),
}