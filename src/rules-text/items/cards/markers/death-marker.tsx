import icon from '../../../../assets/cards/icons/markers/death.png';

import { Item } from '../../../type';

import s from '../../items.module.css';

export const deathMarker: Item = {
  label: 'Маркер "Смерть"',
  icon: icon,
  element: (
    <>
      <div className={s.icon}><img src={icon} alt='' /></div>
      <div>Срыв этого маркера в паспорте игрока обозначает смерть его персонажа.</div>
      <div className={s.label}><i>Общее</i></div>
      <ol className={s.listContainer}>
        <li>У каждого игрока на старте наклеен этот маркер в паспорт игрока.</li>
        <li>если маркер не был сорван - персонаж не мертв, проверить корректность срыва этого маркера - задача убийц.</li>
      </ol>
    </>
  ),
}