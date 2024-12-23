import { AccordionBlock } from '../../../components';
import smithImg from '../../../assets/locations/smith.png';
import { Item } from '../../type';

import s from './buildings.module.css';

export const smith: Item = {
  label: 'Кузница',
  element: (
    <>
      <div className={s.container}>
        <img src={smithImg} alt='Blacksmith' />
      </div>

      <div className={s.label}>Базовые требованию</div>
      <ol className={s.listContainer}>
        <li>Наличие отдельного шатра/строения с крышей, стенами.</li>
        <li>Наличие наковальни.</li>
        <li>Наличие горна (имитация без открытого огня).</li>
        <li>Наличие мехов.</li>
      </ol>
    </>
  ),
}