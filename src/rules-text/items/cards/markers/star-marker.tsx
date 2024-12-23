import icon from '../../../../assets/cards/icons/markers/star.png';

import { Item } from '../../../type';

import s from '../../items.module.css';

export const starMarker: Item = {
  label: 'Маркер "Звезда"',
  icon: icon,
  element: (
    <>
      <div className={s.icon}><img src={icon} alt='' /></div>
      <div>Данный маркер крепится на вывеске заведения. Количество маркеров «Звезда» равно уровню качества заведения.</div>
      <div className={s.label}><i>Общее</i></div>
      <ol className={s.listContainer}>
        <li>Данный маркер можетбыть удален интендантом в ходе игровых действий или фактического упадка качества заведения.</li>
        <li>Восстанавливается только через действие <b>"Ремонт строения"</b>.</li>
        <li>Восстановить выше стартового качества нельзя.</li>
        <li>Качество может быть повышено на одну единицу выше стартового за счет фактического улучшения локации в течении мероприятия.</li>
      </ol>
    </>
  ),
}