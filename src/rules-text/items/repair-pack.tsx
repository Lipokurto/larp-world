import icon from '../../assets/icons/items/repairPack.png';
import card from '../../assets/cards/repair-pack.png';

import { Item } from '../type';

import s from './items.module.css';

export const repairPack: Item = {
  label: 'Ремкомплект',
  icon: icon,
  element:
    <>
      <div className={s.icon}><img src={card} alt='' /></div>
      <div className={s.label}>Эффекты</div>
        <div>Восстанавливает все броневые хиты у людей</div>
      <div className={s.label}>Вес: 1</div>
      <div className={s.label}>Ограничения:</div>
      <div className={s.listContainer}>
        <li>Требуется подождать 15 минут</li>
        <li>Одноразовое</li>
        <li>Игровой предмет</li>
      </div>
      <br />
      <div>Производится в кузнице, потребляет руду</div>
      <div>Использованные карточки можно продать мастерским торговцам</div>
    </>
  
}