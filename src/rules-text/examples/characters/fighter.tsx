import fighter01 from '../../../assets/rules/man/fighter/01.jpg';
import fighter02 from '../../../assets/rules/man/fighter/02.jpg';
import fighter03 from '../../../assets/rules/man/fighter/03.jpg';

import { ImagesAdaptive } from '../../../components';
import { Item } from '../../type';

import s from './char.module.css';

const images = [fighter01, fighter02, fighter03];

export const fighter: Item = {
  label: 'Член отряда',
  player: 'Игрок',
  desc: 'Член отряда наемников',
  element: (
    <>
      <div>
        <ImagesAdaptive images={images} />
      </div>

      <div className={s.label}><i>Требования</i></div>
      <div className={s.listContainer}>
        <li>Хорошо знает разделы правил касающиеся боевых взаимодействий.</li>
      </div>

      <div className={s.label}><i>Рекомендации</i></div>
      <div className={s.listContainer}>
        <li>Умение играть в команде.</li>
        <li>Умение слушать капитана и интенданта.</li>
        <li>Провести несколько тренировок вне игры по правилам проекта.</li>
        <li>Быть готовым победить или проиграть.</li>
      </div>
    </>
  ),
}