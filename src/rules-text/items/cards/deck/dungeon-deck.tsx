import icon from '../../../../assets/cards/icons/deck/dungeon-gate.png';

import { Item } from '../../../type';

import s from '../../items.module.css';

export const dungeonDeck: Item = {
  label: 'Колода Подземелья',
  icon: icon,
  element: (
    <>
      <div className={s.icon}><img src={icon} alt='' /></div>
      <div>Может находится только у хранителя подземелья.</div>
      <div className={s.label}><i>Общее</i></div>
      <ol className={s.listContainer}>
        <li>Личный набор карт, которые получило заведение за свое качество обслуживания.</li>
        <li>В этой колоде хранятся психозы и ресурсы.</li>
        <li>Полученные ресурсы можно выменять у хозяина подземелья на деньги.</li>
        <li>Колоду подземелья нельзя передать или отобрать.</li>
        <li>Пополняется действием <b>"Влияние астрала"</b>.</li>
        <li>тратится на посетителей подземелья.</li>
      </ol>
    </>
  ),
}