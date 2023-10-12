import artist01 from '../../../assets/rules/man/burgomaster/01.png';
import artist02 from '../../../assets/rules/man/burgomaster/02.png';
import artist03 from '../../../assets/rules/man/burgomaster/03.png';

import { ImagesAdaptive } from '../../../components';
import { Item } from '../../type';

import s from './char.module.css';

const images = [artist01, artist02, artist03];

export const burgomaster: Item = {
  label: 'Бургомистр',
  player: 'Регионал',
  desc: 'Отвечает за игротехнические процессы города',
  element: 
    <>      
      <div>      
        <ImagesAdaptive images={images} />
      </div>

      <div className={s.label}><i>Описание</i></div>
      <div className={s.listContainer}>
        <li>Выполняет роль регионального мастера центрального города.</li>
      </div>

      <div className={s.label}><i>Требования</i></div>
      <div className={s.listContainer}>
        <li>Должен досконально знать правила.</li>
        <li>Личная ответственность за соблюдение правил внутри города.</li>
        <li>бязательный фотодопуск.</li>
      </div>

      <div className={s.label}><i>Рекомендации</i></div>
      <div className={s.listContainer}>
        <li>Умение анализировать правила.</li>
        <li>Умение принимать не популярные решения.</li>
      </div>
    </>
}