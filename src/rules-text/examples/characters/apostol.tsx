import artist01 from '../../../assets/rules/monsters/monsters/heavy/ab-01.png';
import artist02 from '../../../assets/rules/monsters/monsters/mid/mid-03.png';
import artist03 from '../../../assets/rules/monsters/monsters/light/light-03.png';

import { ImagesAdaptive } from '../../../components';
import { Item } from '../../type';

import s from './char.module.css';

const images = [artist01, artist02, artist03];

export const apostol: Item = {
  label: 'Апостол',
  player: 'Игрок',
  desc: 'Чудовище с непреодолимым голодом',
  element: 
    <>      
      <div>      
        <ImagesAdaptive images={images} />
      </div>

      <div className={s.label}><i>Описание</i></div>
      <div className={s.listContainer}>
        <li>Может выполнять действия <b>"Пожирание"</b>, <b>"Чудовищный план"</b>, <b>"Призыв идола"</b>, <b>"Осквернение алтаря"</b>, <b>"Смена формы"</b>, <b>"Излечить одержимого"</b>, <b>"Создать одержимого"</b>.</li>
        <li>Обладает двумя формами: человеческой и монструозной.</li>
        <li>Все хиты апостола – живые.</li>
      </div>

      <div className={s.label}><b>Требования</b></div>
      <div className={s.listContainer}>
        <li>Костюм должен уверено выдерживать большое количество ударов, как рубящих так и колющих.</li>
        <li>Оператор должен быть готов физически носить сложный костюм.</li>
        <li>Обязательны консультации с мастерами на фазе концепции построения костюма.</li>
      </div>

      <div className={s.label}><b>Рекомендации</b></div>
      <div className={s.listContainer}>
        <li>Подготовить себя физически и морально.</li>
        <li>Уметь организовать достаточно "неординарный" опыт своей команде.</li>
      </div>
    </>
}