import artist01 from '../../../assets/rules/man/artist/01.jpg';
import artist02 from '../../../assets/rules/man/artist/02.jpg';
import artist03 from '../../../assets/rules/man/artist/03.jpg';

import { ImagesAdaptive } from '../../../components';
import { Item } from '../../type';

import s from './char.module.css';

const images = [artist01, artist02, artist03];

export const artist: Item = {
  label: 'Артист',
  element: 
    <>      
      <div>      
        <ImagesAdaptive images={images} />
      </div>

      <div className={s.label}>Описание</div>
      <div className={s.listContainer}>
        <li>Артист, который готов дарить свое творчество окружающим</li>
        <li>Может использовать: "Автограф", "Выступление"</li>
      </div>

      <div className={s.label}>Требования</div>
      <div className={s.listContainer}>
        <li>Может впечатлить своим искусством</li>
        <li>Техника безопасности</li>
        <li>Обязательный фотодопуск персонажа, инструмента и творчества</li>
      </div>

      <div className={s.label}>Рекомендации</div>
      <div className={s.listContainer}>
        <li>Желание выступать на публике</li>
      </div>
    </>
}