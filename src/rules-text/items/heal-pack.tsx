import icon from '../../assets/icons/items/healPack.png';
import card from '../../assets/cards/heal-pack.png';

import { Item } from '../type';

import s from './items.module.css';

export const healPack: Item = {
  label: 'Медкомплект',
  icon: icon,
  weight: 1,
  element: (
    <>
      <div className={s.icon}><img src={card} alt='' /></div>
      <div className={s.label}>Эффекты</div>
      <div>Восстанавливает все живые хиты у людей</div>
      <div className={s.label}>Вес: 1</div>
      <div className={s.label}>Ограничения:</div>

      <div className={s.listContainer}>
        <li>Требуется подождать 15 минут</li>
        <li>Одноразовое</li>
        <li>Игровой предмет</li>
      </div>
      <br />
      <div>Производится в госпитале, потребляет лечебные травы</div>
    </>
  ),
}