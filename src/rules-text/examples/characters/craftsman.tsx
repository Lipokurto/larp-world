import craftsman01 from '../../../assets/rules/man/craftsman/01.jpg';
import craftsman02 from '../../../assets/rules/man/craftsman/02.jpg';
import craftsman03 from '../../../assets/rules/man/craftsman/03.jpg';

import { ImagesAdaptive } from '../../../components';
import { Item } from '../../type';

import s from './char.module.css';

const images = [craftsman01, craftsman02, craftsman03];

export const craftsman: Item = {
  label: 'Ремесленник',
  player: 'Игрок',
  desc: 'Глава локации: "Госпиталь", "Кузница" или "Лаборатория"',
  element: 
    <>      
      <div>      
        <ImagesAdaptive images={images} />
      </div>

      <div className={s.label}><i>Описание</i></div>
      <div className={s.listContainer}>
        <li>Может выполнять действие  "Производство".</li>
      </div>

      <div className={s.label}><i>Требования</i></div>
      <div className={s.listContainer}>
        <li>Хорошо знает разделы: основы,  допуск, боевые взаимодействия, локация.</li>
        <li>Высокое качество подготовки мастерской и личного антуража.</li>
        <li>Техника безопасности.</li>
      </div>

      <div className={s.label}><i>Рекомендации</i></div>
      <div className={s.listContainer}>
        <li>Умение организовать работу мастерской.</li>
        <li>Умение активно торговаться с игроками за оказания услуг.</li>
      </div>
    </>
}