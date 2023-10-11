import icon from '../../assets/icons/items/healPotion.png';
import card from '../../assets/cards/heal-potion.png';

import { Item } from '../type';

import s from './items.module.css';

export const healPotion: Item = {
  label: 'Целебная мазь',
  icon: icon,
  weight: 0,
  element:
    <>
      <div className={s.icon}><img src={card} alt='' /></div>
      <div className={s.label}>Эффекты</div>
      <div>Игрок-человек мгновенно восстанавливает живые хиты</div>
      <div className={s.label}>Вес: 0</div>
      <div className={s.label}>Ограничения:</div>

      <div className={s.listContainer}>
        <li>Одноразовое</li>
        <li>Игровой предмет</li>
      </div>
      
      <div className={s.label}>Моделируется:</div>
        <div>Прозрачная колба внутри которой находится карточка зелья</div>
      <br />
      <div>Производится у алхимиков, потребляет медокмплект и лечебные травы</div>
    </>
  
}