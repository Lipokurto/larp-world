import icon from '../../assets/icons/items/ore.png';
import card from '../../assets/cards/ore.png';

import { Item } from '../type';

import s from './items.module.css';

export const ore: Item = {
  label: 'Железная руда',
  icon: icon,
  element:
    <>
      <div className={s.icon}><img src={card} alt='' /></div>
      <div className={s.label}>Эффекты</div>
        <div>Руда необходимая для производства ремкомплектов</div>
      <div className={s.label}>Вес: 1</div>
      <div className={s.label}>Ограничения:</div>
      
      <div className={s.listContainer}>
        <li>Одноразовое</li>
        <li>Игровой предмет</li>
        <li>Используются исключительно для производства и торговли</li>
      </div>
      
      <br />
      <div>Использованную руду можно продать главному торговцу</div>
      <div>Может покупаться у главного торговца, или добываться крестьянами</div>
    </>
}