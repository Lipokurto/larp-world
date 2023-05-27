import civil01 from '../../../assets/rules/man/civil/01.jpg';
import civil02 from '../../../assets/rules/man/civil/02.jpg';
import civil03 from '../../../assets/rules/man/civil/03.jpg';

import { ImagesAdaptive } from '../../../components';
import { Item } from '../../type';

import s from './char.module.css';

const images = [civil01, civil02, civil03];

export const civil: Item = {
  label: 'Обыватель',
  element: 
    <>      
      <div>      
        <ImagesAdaptive images={images} />
      </div>

      <div className={s.label}>Описание</div>
      <div className={s.listContainer}>
        <li>Гости или жители местных земель</li>
      </div>

      <div className={s.label}>Требования</div>
      <div className={s.listContainer}>
        <li>Хорошо знает разделы: основы, грузоподъемность, ресурсы, стресс</li>
        <li>Понимает строение феодального общества</li>
      </div>

      <div className={s.label}>Рекомендации</div>
      <div className={s.listContainer}>
        <li>Умение наслаждаться игрой</li>
      </div>
    </>
}