import icon from '../../../assets/cards/icons/rest.png';

import { Item } from '../../type';

import s from '../items.module.css';

export const rest: Item = {
  label: 'Отдых',
  icon: icon,
  element:
    <>
      <div className={s.icon}><img src={icon} alt='' /></div>
      <div>Если у игрока есть этак карта, то она убирает действие одного психоза, из тех, которые успел получить.</div>
      <div>Карта сдается по возможности интенданту своего лагеря или мастеру.</div>
      <div>Нельзя передавать, обменивать, уничтожать.</div>
      <div>В случае если у игрока более одной карты <b>"Отдых"</b> то они так же работают как одна.</div>
    </>
}