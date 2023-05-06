import icon from '../../assets/icons/items/money.png';

import { Item } from '../type';

import s from './items.module.css';

export const money: Item = {
  label: 'Деньги',
  icon: icon,
  element:
    <>
      <div className={s.icon}><img src={icon} alt='' /></div>
      <div className={s.label}>Эффекты</div>
        <div>Универсальный способ обмена товаров</div>
      <div className={s.label}>Вес: 0</div>
      <div className={s.label}>Ограничения:</div>
      
      <div className={s.listContainer}>
        <li>Представлены тремя номиналами: золото, серебро, медь</li>
        <li>Обменный курс: Золото -1 = Серебро - 5 = медь - 10</li>
        <li>Игровой предмет</li>
      </div>
      
      <div className={s.label}>Моделируется:</div>
        <div>Монеты разного наминала</div>
    </>
}