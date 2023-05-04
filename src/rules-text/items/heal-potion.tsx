import icon from '../../assets/icons/items/healPotion.png';

import { Item } from '../type';

import s from './items.module.css';

export const healPotion: Item = {
  label: 'Целебная мазь',
  icon: icon,
  element:
    <>
      <div className={s.icon}><img src={icon} alt='' /></div>
      <h2>Эффекты</h2>
        <div>В случае легкого ранения мгновенно восстанавливает живые хиты</div>
      <h2>Вес: 0</h2>
      <h2>Ограничения:</h2>
        <li>Не лечит тяжелое ранение</li>
        <li>Одноразовое</li>
        <li>Игровой предмет</li>
      
      <h2>Моделируется:</h2>
        <div>Прозрачная колба с соответствующим маркером, и вложенной запиской</div>
      <br />
      <div>Производится у алхимиков, потребляет медокмплект и лечебные травы</div>
    </>
  
}