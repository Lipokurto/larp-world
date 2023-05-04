import icon from '../../assets/icons/items/repairPack.png';

import { Item } from '../type';

import s from './items.module.css';

export const repairPack: Item = {
  label: 'Ремкомплект',
  icon: icon,
  element:
    <>
      <div className={s.icon}><img src={icon} alt='' /></div>
      <h2>Эффекты</h2>
        <div>Восстанавливает все броневые хиты у людей</div>
      <h2>Вес: 1</h2>
      <h2>Ограничения:</h2>
        <li>До полного восстановления требуется подождать 15 минут</li>
        <li>Одноразовое</li>
        <li>Игровой предмет</li>
        <li>Не использованный медкомплект имеет вес 1, использованный 0</li>
      <h2>Моделируется:</h2>
      <div>Карточка с соответствующим описанием</div>
      <br />
      <div>Производится в кузнице, потребляет руду</div>
      <div>Использованные карточки можно продать мастерским торговцам</div>
    </>
  
}