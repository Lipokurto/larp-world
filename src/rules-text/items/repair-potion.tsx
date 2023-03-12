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
        <div>Мгновенно восстанавливает все бронехиты на участках броне где количество броневых хитов не равно нулю</div>
      <h2>Вес: 0</h2>
      <h2>Ограничения:</h2>
        <li>Не восстанавливает броневые хиты на броне с нулевым уровнем хитов</li>
        <li>Одноразовое</li>
        <li>Игровой предмет</li>
      <h2>Моделируется:</h2>
        <div>Прозрачная колба с запиской</div>
      <br />
      <div>Производится у алхимиков, потребляет медокмплект</div>
    </>
  
}