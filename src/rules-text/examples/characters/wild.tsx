import artist01 from '../../../assets/rules/monsters/wild.png';

import { ImagesAdaptive } from '../../../components';
import { Item } from '../../type';

import s from './char.module.css';

const images = [artist01];

export const wild: Item = {
  label: 'Дикое чудовище',
  player: 'Игротех',
  desc: 'Неудержимая мощь астрала в нашем мире',
  element: 
    <>      
      <div>      
        <ImagesAdaptive images={images} />
      </div>

      <div className={s.label}><i>Описание</i></div>
      <div className={s.listContainer}>
        <li>Почти как апостол, только более дикое и не будет церемониться.</li>
      </div>

      <div className={s.label}><b>Требования</b></div>
      <div className={s.listContainer}>
        <li>Обеспечивает игротехническую функциональность подземелья.</li>
        <li>Внешний вид должен подходить под стилистику подземелья.</li>
        <li>Обязательный фотодопуск.</li>
      </div>

      <div className={s.label}><b>Рекомендации</b></div>
      <div className={s.listContainer}>
        <li>Подготовить себя физически и морально.</li>
      </div>
    </>
}