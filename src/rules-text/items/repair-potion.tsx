import icon from '../../assets/icons/items/repairPotion.png';
import card from '../../assets/cards/repair-potion.png';

import { Item } from '../type';

import s from './items.module.css';

export const repairPotion: Item = {
  label: 'Оружейное масло',
  icon: icon,
  element:
    <>
      <div className={s.icon}><img src={card} alt='' /></div>
      <div className={s.label}>Эффекты</div>
      <div>В случае не полной потери брони мгновенно восстанавливает броневые хиты</div>
      <div className={s.label}>Вес: 0</div>
      <div className={s.label}>Ограничения:</div>
      <div className={s.listContainer}>
        <li>Не восстанавливает броневые хиты на поломанной броне (0 броневых хитов)</li>
        <li>Одноразовое</li>
        <li>Игровой предмет</li>
      </div>

      <div className={s.label}>Моделируется:</div>
      <div>Прозрачная колба внутри которой находится карточка зелья</div>
      <br />
      <div>Производится у алхимиков, потребляет ремкомплект и руду</div>
    </>
  
}