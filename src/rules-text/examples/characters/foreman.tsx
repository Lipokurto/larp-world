import manager01 from '../../../assets/rules/man/manager/01.jpg';
import manager02 from '../../../assets/rules/man/manager/02.jpg';
import manager03 from '../../../assets/rules/man/manager/03.jpg';

import { ImagesAdaptive } from '../../../components';
import { Item } from '../../type';

import s from './char.module.css';

const images = [manager01, manager02, manager03];

export const foreman: Item = {
  label: 'Бригадир',
  player: 'Игрок',
  desc: 'Глава локации, производящей "Целебные травы" или "Железную руду"',
  element: (
    <>
      <div>
        <ImagesAdaptive images={images} />
      </div>

      <div className={s.label}><i>Описание</i></div>
      <div className={s.listContainer}>
        <li>Может выполнять действие <b>"План работ"</b>.</li>
      </div>

      <div className={s.label}><i>Требования</i></div>
      <div className={s.listContainer}>
        <li>Хорошо знает разделы: основы, локации, ресурсы, грузоподъемность.</li>
        <li>Понимает строение феодального общества.</li>
        <li>Ответственный подход к отыгрышу и организации локации.</li>
      </div>

      <div className={s.label}><i>Рекомендации</i></div>
      <div className={s.listContainer}>
        <li>Желание играть в экономику и рабочий класс.</li>
      </div>
    </>
  ),
}