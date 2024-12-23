import icon from '../../assets/icons/items/ore.png';
import card from '../../assets/cards/ore.png';

import { Item } from '../type';

import s from './items.module.css';

export const ore: Item = {
  label: 'Железная руда',
  icon: icon,
  weight: 1,
  element: (
    <>
      <div className={s.icon}><img src={card} alt='' /></div>
      <div className={s.label}>Эффекты</div>
        <div>Руда необходима для производства ремкомплектов</div>
      <div className={s.label}>Вес: 1</div>
      <div className={s.label}>Ограничения:</div>

      <div className={s.listContainer}>
        <li>Одноразовое</li>
        <li>Игровой предмет</li>
        <li>Используются для производства, торговли и функционирования пушек</li>
      </div>

      <br />
      <div>Использованную руду можно продать главному торговцу</div>
      <div>Может покупаться у главного торговца, или добываться крестьянами</div>
    </>
  ),
}