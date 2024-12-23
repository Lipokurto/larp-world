import artist01 from '../../../assets/rules/monsters/dungeon-master/01.png';
import artist02 from '../../../assets/rules/monsters/dungeon-master/02.png';
import artist03 from '../../../assets/rules/monsters/dungeon-master/03.png';

import { ImagesAdaptive } from '../../../components';
import { Item } from '../../type';

import s from './char.module.css';

const images = [artist01, artist02, artist03];

export const dungeonMaster: Item = {
  label: 'Хранитель подземелья',
  player: 'Регионал',
  desc: 'Отвечает за игротехнические процессы подземелья',
  element: (
    <>
      <div>
        <ImagesAdaptive images={images} />
      </div>

      <div className={s.label}><i>Описание</i></div>
      <div className={s.listContainer}>
        <li>Хранит «Колоду подземелья».</li>
        <li>Выполняет роль регионального мастера в рамках подземелья.</li>
      </div>

      <div className={s.label}><b>Требования</b></div>
      <div className={s.listContainer}>
        <li>Обеспечивает игротехническую функциональность подземелья.</li>
        <li>Внешний вид должен подходить под стилистику подземелья.</li>
        <li>Обязательный фотодопуск.</li>
      </div>

      <div className={s.label}><b>Рекомендации</b></div>
      <div className={s.listContainer}>
        <li>Должен досконально знать правила.</li>
      </div>
    </>
  ),
}