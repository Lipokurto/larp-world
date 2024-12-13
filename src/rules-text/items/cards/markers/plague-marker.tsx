import icon from '../../../../assets/cards/icons/markers/plague.png';

import { Item } from '../../../type';

import s from '../../items.module.css';

export const plagueMarker: Item = {
  label: 'Маркер "Чума"',
  icon: icon,
  element:
    <>
      <div className={s.icon}><img src={icon} alt='' /></div>
      <div>Маркер вешается исключительно на строения, обозначает уровень заражения строения. Снимает одну звезду качества. После излечения не восстанавливает потраченную звезду качества.</div>
      <div className={s.label}><i>Общее</i></div>
      <ol className={s.listContainer}>
        <li>Чтобы убрать данный маркер со строения необходимо применить действие <b>"Устранение инфекций"</b>.</li>
        <li>УДаление маркера НЕ восстанавливает звезду качества.</li>
        <li>Каждый маркер чума повышает уровень заражения района.</li>
      </ol>
    </>
}