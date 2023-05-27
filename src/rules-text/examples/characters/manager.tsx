import manager01 from '../../../assets/rules/man/manager/01.jpg';
import manager02 from '../../../assets/rules/man/manager/02.jpg';
import manager03 from '../../../assets/rules/man/manager/03.jpg';

import { ImagesAdaptive } from '../../../components';
import { Item } from '../../type';

import s from './char.module.css';

const images = [manager01, manager02, manager03];

export const manager: Item = {
  label: 'Бригадир',
  element: 
    <>      
      <div>      
        <ImagesAdaptive images={images} />
      </div>

      <div className={s.label}>Описание</div>
      <div className={s.listContainer}>
        <li>Глава локации, продящей "Целебные травы" или "Железную руду"</li>
        <li>Может использовать: "Подготовка почвы"</li>
      </div>

      <div className={s.label}>Требования</div>
      <div className={s.listContainer}>
        <li>Хорошо знает разделы: основы, локации, ресурсы, грузоподъемность</li>
        <li>Понимает строение феодального общества</li>
        <li>Ответственный подход к отыгрышу и организации локации</li>
      </div>

      <div className={s.label}>Рекомендации</div>
      <div className={s.listContainer}>
        <li>Желание играть в экономику и рабочий класс</li>
      </div>
    </>
}