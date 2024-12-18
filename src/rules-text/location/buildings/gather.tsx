import img from '../../../assets/locations/peasant.png';
import { Item } from '../../type';

import s from './buildings.module.css';


export const gather: Item = {
  label: 'Ресурсная постройка',
  element:
    <>
      <div className={s.container}>
        <img src={img} alt='Gather' />
      </div>

      <div className={s.label}>Базовые требования</div>
      <ol className={s.listContainer}>
        <li>Место добычи (шахта или огород).</li>
        <li>Ограда рабочей зоны.</li>
        <li>Крытое место для хранения ресурсов.</li>
      </ol>
    </>
}