import icon from '../../../../assets/cards/icons/deck/beer-stein.png';

import { Item } from '../../../type';

import s from '../../items.module.css';

export const managerDeck: Item = {
  label: 'Колода Хозяина',
  icon: icon,
  element:
    <>
      <div className={s.icon}><img src={icon} alt='' /></div>
      <div>Может находится только у хозяина увеселительного заведения.</div>
      <div className={s.label}><i>Общее</i></div>
      <ol className={s.listContainer}>
        <li>Личный набор карт, которые получило заведение за свое качество обслуживания.</li>
        <li>В этой колоде хранятся только карты <b>"Отдыха"</b>.</li>
        <li>Колоду качества нельзя отобрать во время обыска.</li>
        <li>Колода качества НЕ пропадает после смерти хозяина, и сохраняется у нового персонажа.</li>
        <li>Пополняется действием <b>"Контроль качества"</b>.</li>
        <li>Тратится на снятие психозов посетителей.</li>
      </ol>
    </>
}