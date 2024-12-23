import artist01 from '../../../assets/rules/monsters/obsessed/ob-heavy/ob-heavy-03.png';
import artist02 from '../../../assets/rules/monsters/obsessed/ob-mid/ob-mid-02.png';
import artist03 from '../../../assets/rules/monsters/obsessed/ob-light/obs-light-02.png';

import { ImagesAdaptive } from '../../../components';
import { Item } from '../../type';

import s from './char.module.css';

const images = [artist01, artist02, artist03];

export const obsessed: Item = {
  label: 'Одержимый',
  player: 'Игрок',
  desc: 'Верный слуга апостола',
  element: (
    <>
      <div>
        <ImagesAdaptive images={images} />
      </div>

      <div className={s.label}><i>Описание</i></div>
      <div className={s.listContainer}>
        <li>Только апостол может лечить одержимых.</li>
        <li>Не имеет статуса <b>"Тяжело ранен"</b> - вместо этого переходит в статус <b>"Мертв"</b>.</li>
        <li>В случаем смерти хозяина-апостола все его одержимые переходят в состояние <b>"Мертв"</b>.</li>
      </div>

      <div className={s.label}><b>Требования</b></div>
      <div className={s.listContainer}>
        <li>Не может существовать одержимых без апостола.</li>
        <li>Лимит одержимых на каждом апостоле зависит от уровня подготовки антуража.больше одержимых он может содержать. Количество хитов одержимого так же зависит от красоты подготовки костюма.</li>
        <li>Одержимые могут использовать оружие ближнего и дальнего боя.</li>
        <li>Не могу использовать пушки и особое оружие.</li>
        <li>Все хиты одержимого – живые.</li>
      </div>

      <div className={s.label}><b>Рекомендации</b></div>
      <div className={s.listContainer}>
        <li>Подготовить себя физически и морально.</li>
        <li>Уметь играть в команде.</li>
      </div>
    </>
  ),
}