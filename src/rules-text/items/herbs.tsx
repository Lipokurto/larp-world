import icon from '../../assets/icons/items/herbs.png';

import { Item } from '../type';

import s from './items.module.css';

export const herbs: Item = {
  label: 'Лечебные травы',
  icon: icon,
  element:
    <>
      <div className={s.icon}><img src={icon} alt='' /></div>
      <h2>Эффекты</h2>
        <div>Лечебные травы необходимы для производства медкомплектов</div>
      <h2>Вес: 1</h2>
      <h2>Ограничения:</h2>
        <li>Одноразовое</li>
        <li>Игровой предмет</li>
        <li>Имеет вес (использованные травы складируется в госпитале, не имеет веса)</li>
      
      <h2>Моделируется:</h2>
        <div>Набор трав с мастерской печатью</div>
      <div>Использованную руду можно передать мастера в обмена на игровые деньги</div>
      <div>Может покупаться у мастерского торговца, или добываться крестьянами</div>
    </>
}