import icon from '../../assets/icons/items/repairPotion.png';

import { Item } from '../type';

import s from './items.module.css';

export const repairPotion: Item = {
  label: 'Оружейное масло',
  icon: icon,
  element:
    <>
      <div className={s.icon}><img src={icon} alt='' /></div>
      <h2>Эффекты</h2>
        <div>В случае не полной потери брони мгновенно восстанавливает броневые хиты</div>
      <h2>Вес: 0</h2>
      <h2>Ограничения:</h2>
        <li>Не восстанавливает броневые хиты на поломанной броне (0 броневых хитов)</li>
        <li>Одноразовое</li>
        <li>Игровой предмет</li>

      <h2>Моделируется:</h2>
        <div>Прозрачная колба с соответствующим маркером, и вложенной запиской</div>
      <br />
      <div>Производится у алхимиков, потребляет ремкомплект и руду</div>
    </>
  
}