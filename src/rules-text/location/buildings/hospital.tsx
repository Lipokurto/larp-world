import img from '../../../assets/locations/hospital.png';
import { Item } from '../../type';

import s from './buildings.module.css';

export const hospital: Item = {
  label: 'Госпиталь',
  element:
    <>      
      <div className={s.container}>
        <img src={img} alt='Hospital' />
      </div>

      <div className={s.label}>Базовые требования</div>
      <ol className={s.listContainer}>
        <li>Наличие отдельного шатра/строения с крышей, стенами.</li>
        <li>Наличие хирургического стола.</li>
        <li>Наличие хирургического инструмента. (в безопасном исполнении)</li>
        <li>Наличие полок с различными медицинскими препаратами.</li>
      </ol>
    </>
}