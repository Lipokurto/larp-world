import img from '../../../assets/locations/alchemist.png';
import { Item } from '../../type';

import s from './buildings.module.css';

export const alchemist: Item = {
  label: 'Лаборатория алхимика',
  element: (
    <>
      <div className={s.container}>
        <img src={img} alt='Alchemist' />
      </div>

      <div className={s.label}>Базовые требования</div>
      <ol className={s.listContainer}>
        <li>Наличие отдельного шатра/строения с крышей, стенами.</li>
        <li>Наличие стола алхимика.</li>
        <li>Наличие книги рецептов алхимика (книга в которую можно складывать листы формата А4).</li>
        <li>Наличие коллекции ингредиентов (полки с колбами, образцы жидкостей и минералов, редкие ингредиенты).</li>
      </ol>
    </>
  ),
}