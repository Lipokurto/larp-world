import icon from '../../assets/icons/items/ore.png';

import { Item } from '../type';

import s from './items.module.css';

export const ore: Item = {
  label: 'Руда',
  icon: icon,
  element:
    <>
      <div className={s.icon}><img src={icon} alt='' /></div>
      <h2>Эффекты</h2>
        <div>Руда необходимая для производства ремкомплектов</div>
      <h2>Вес: 1</h2>
      <h2>Ограничения:</h2>
        <li>Одноразовое</li>
        <li>Игровой предмет</li>
        <li>Используются исключительно для производства и торговли</li>
      
      <h2>Моделируется:</h2>
        <div>Карточка с соответствующим описанием</div>
      <br />
      <div>Использованную руду можно продать мастерам</div>
      <div>Может покупаться у мастерского торговца, или добываться крестьянами</div>
    </>
}