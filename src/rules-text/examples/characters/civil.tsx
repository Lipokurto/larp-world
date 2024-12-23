import civil01 from '../../../assets/rules/man/civil/01.jpg';
import civil02 from '../../../assets/rules/man/civil/02.jpg';
import civil03 from '../../../assets/rules/man/civil/03.jpg';

import { ImagesAdaptive } from '../../../components';
import { Item } from '../../type';

import s from './char.module.css';

const images = [civil01, civil02, civil03];

export const civil: Item = {
  label: 'Обыватель',
  player: 'Игрок',
  desc: 'Гости или жители местных земель',
  element: (
    <>
      <div>
        <ImagesAdaptive images={images} />
      </div>

      <div className={s.label}><i>Описание</i></div>
      <div>Гости или жители местных земель</div>

      <div className={s.label}><i>Требования</i></div>
      <div className={s.listContainer}>
        <li>Хорошо знает разделы: основы, грузоподъемность, ресурсы, психозы</li>
        <li>Понимает строение феодального общества</li>
      </div>

      <div className={s.label}><i>Рекомендации</i></div>
      <div className={s.listContainer}>
        <li>Умение наслаждаться игрой</li>
      </div>
    </>
  ),
}