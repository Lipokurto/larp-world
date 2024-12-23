import quartermaster01 from '../../../assets/rules/man/quartermaster/01.jpg';
import quartermaster02 from '../../../assets/rules/man/quartermaster/02.jpg';
import quartermaster03 from '../../../assets/rules/man/quartermaster/03.jpg';

import { ImagesAdaptive } from '../../../components';
import { Item } from '../../type';

import s from './char.module.css';

const images = [quartermaster01, quartermaster02, quartermaster03];

export const quartermaster: Item = {
  label: 'Интендант',
  player: 'Регионал',
  desc: 'Отвечает за игротехнические процессы лагеря',
  element: (
    <>
      <div>
        <ImagesAdaptive images={images} />
      </div>

      <div className={s.label}><i>Описание</i></div>
      <div>Выполняет роль регионального мастера в рамках указанной локации.</div>

      <div className={s.label}><i>Требования</i></div>
      <div className={s.listContainer}>
        <li>Должен досконально знать правила.</li>
        <li>Личная ответственность за соблюдение правил командой.</li>
        <li>Обязательный фотодопуск.</li>
      </div>

      <div className={s.label}><i>Рекомендации</i></div>
      <div className={s.listContainer}>
        <li>Умение анализировать правила.</li>
        <li>Умение принимать не популярные решения.</li>
        <li>Стремление к справедливому противостоянию.</li>
      </div>
    </>
  ),
}