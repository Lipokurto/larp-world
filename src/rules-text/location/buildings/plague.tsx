import img from '../../../assets/locations/plague.png';
import { Item } from '../../type';

import s from './buildings.module.css';

export const plague: Item = {
  label: 'Чумная лаборатория',
  element:
    <>
      <div className={s.container}>
        <img src={img} alt='Plague' />
      </div>

      <div className={s.label}>Базовые требования</div>
      <ol className={s.listContainer}>
        <li>Наличие отдельного шатра/строения с крышей, стенами.</li>
        <li>Наличие стола доктора.</li>
        <li>Наличие подопытных экземпляров (крысы, птицы, пиявки все не настоящие).</li>
        <li>Наличие книги записей сведений о болезни.</li>
      </ol>

    </>
}