import icon from '../../../../assets/cards/icons/markers/cured.png';

import { Item } from '../../../type';

import s from '../../items.module.css';

export const cureMarker: Item = {
  label: 'Маркер "Исцелен"',
  icon: icon,
  element: (
    <>
      <div className={s.icon}><img src={icon} alt='' /></div>
      <div>Маркер обозначающий, что зараженный игрок был исцелен.</div>
      <div className={s.label}><i>Общее</i></div>
      <ol className={s.listContainer}>
        <li>Наклеивается поверх маркера "Заражен".</li>
        <li>Добывается в ходе действия <b>"Создание лекарства"</b>.</li>
        <li>Не восстанавливает живые хиты, не лечит травмы.</li>
      </ol>
    </>
  ),
}