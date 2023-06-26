import quartermaster01 from '../../../assets/rules/man/quartermaster/01.jpg';
import quartermaster02 from '../../../assets/rules/man/quartermaster/02.jpg';
import quartermaster03 from '../../../assets/rules/man/quartermaster/03.jpg';

import { ImagesAdaptive } from '../../../components';
import { Item } from '../../type';

import s from './char.module.css';

const images = [quartermaster01, quartermaster02, quartermaster03];

export const quartermaster: Item = {
  label: 'Интендант',
  element: 
    <>      
      <div>      
        <ImagesAdaptive images={images} />
      </div>

      <div className={s.label}>Описание</div>
      <div className={s.listContainer}>
        <li>Выполняет роль хрониста в рамках указанной локации</li>
      </div>

      <div className={s.label}>Требования</div>
      <div className={s.listContainer}>
        <li>Должен досконально знать правила</li>
        <li>Личная ответственность за соблюдение правил командой</li>
        <li>Обязательный фотодопуск</li>
      </div>

      <div className={s.label}>Рекомендации</div>
      <div className={s.listContainer}>
        <li>Умение анализировать правила</li>
        <li>Умение принимать не популярные решения</li>
        <li>Стремление к справедливому противостоянию</li>
      </div>
    </>
}