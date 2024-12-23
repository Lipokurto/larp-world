import inquisitor01 from '../../../assets/rules/man/inquisitor/01.jpg';
import inquisitor02 from '../../../assets/rules/man/inquisitor/02.jpg';
import inquisitor03 from '../../../assets/rules/man/inquisitor/03.jpg';
import heart from '../../../assets/icons/health/heart.png';
import shield from '../../../assets/icons/health/shield.png';

import { ImagesAdaptive } from '../../../components';
import { Item } from '../../type';

import s from './char.module.css';

const images = [inquisitor01, inquisitor02, inquisitor03];

export const inquisitor: Item = {
  label: 'Инквизитор',
  player: 'Игрок',
  desc: 'Представитель Святого престола на этой земле',
  element: (
    <>
      <div>
        <ImagesAdaptive images={images} />
      </div>

      <div className={s.label}><i>Описание</i></div>
      <div>Может выполнять действия <b>"Исповедь"</b>, <b>"Казнь”</b>, <b>"Молитва"</b>, <b>"Церковную десятину"</b>, <b>"Изгнание злого духа"</b>, <b>"Установить церковный алтарь"</b>.</div>

      <div className={s.label}><i>Требования</i></div>
      <div className={s.listContainer}>
        <li>Броня имеет церемониальный характер. Максимум 3 хита ( <img src={heart} alt='' width={15} /> <img src={shield} alt='' width={15} /> <img src={shield} alt='' width={15} /> ).</li>
        <li>Не может использовать воинское оружие. Должен носить при себе том Святого писания.</li>
        <li>Должен уметь порицать аморальные поступки людей.</li>
        <li>Обязательный фотодопуск.</li>
      </div>

      <div className={s.label}><i>Рекомендации</i></div>
      <div className={s.listContainer}>
        <li>Умение выступать на публику.</li>
        <li>Умение принимать не популярные решения.</li>
        <li>Умение спланировать выезд команды.</li>
      </div>
    </>
  ),
}