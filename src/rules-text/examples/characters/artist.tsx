import artist01 from '../../../assets/rules/man/artist/01.jpg';
import artist02 from '../../../assets/rules/man/artist/02.jpg';
import artist03 from '../../../assets/rules/man/artist/03.jpg';

import { ImagesAdaptive } from '../../../components';
import { Item } from '../../type';

import s from './char.module.css';

const images = [artist01, artist02, artist03];

export const artist: Item = {
  label: 'Артист',
  player: 'Игрок',
  desc: 'Артист, который готов дарить свое творчество',
  element: (
    <>
      <div>
        <ImagesAdaptive images={images} />
      </div>

      <div className={s.label}><i>Описание</i></div>
      <div>Может выполнять действия: <b>"Автограф"</b>, <b>"Выступление"</b>.</div>

      <div className={s.label}><b>Требования</b></div>
      <div className={s.listContainer}>
        <li>Может впечатлить своим искусством.</li>
        <li>Техника безопасности.</li>
        <li>Обязательный фотодопуск персонажа, инструмента и творчества.</li>
      </div>

      <div className={s.label}><b>Рекомендации</b></div>
      <div className={s.listContainer}>
        <li>Желание выступать на публике.</li>
      </div>
    </>
  ),
}