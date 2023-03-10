import icon from '../../assets/icons/items/box.png';

import { Item } from '../type';

import s from './items.module.css';

export const cannonBox: Item = {
  label: 'Зарядный ящик',
  icon: icon,
  element:
    <>
      <div className={s.icon}><img src={icon} alt='' /></div>
      <h2>Эффекты</h2>
        <div>Позволяет перезаряжать огнестрельное осадное орудие</div>
      <h2>Вес: каждые 10 снарядов +1 весу (округляется в большу сторону)</h2>
      <h2>Ограничения:</h2>
        <li>Запрещается уничтожать</li>
        <li>Запрещается прятать без возможности обнаружения</li>
        <li>Игровой предмет</li>
        <li>Нельзя забрать без разрешения владельца</li>
      
      <h2>Моделируется:</h2>
        <div>материал изготовления – окрашенная фанера, доски</div>
    </>
}