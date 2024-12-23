import { Item } from '../type';

import s from './battle.module.css';

export const darkness: Item = {
  label: 'Тьмы',
  marker: 'Желтый дым и звуковой сигнал',
  element: (
    <ol className={s.listContainer}>
      <li>Блоки инквизиции и чудовищ получают свои вводные.</li>
      <li>Выжившие после королевской битвы организуются в один блок в центре боевой зоны.</li>
      <li>Устанавливаются точки старта чудовищ и инквизиции.</li>
      <li>На этой фазе происходят дуэли.</li>
    </ol>
  ),
}