import inquisitor01 from '../../../assets/rules/man/inquisitor/01.jpg';
import inquisitor02 from '../../../assets/rules/man/inquisitor/02.jpg';
import inquisitor03 from '../../../assets/rules/man/inquisitor/03.jpg';

import { ImagesAdaptive } from '../../../components';
import { Item } from '../../type';

import s from './char.module.css';

const images = [inquisitor01, inquisitor02, inquisitor03];

export const inquisitor: Item = {
  label: 'Инквизитор',
  element: 
    <>      
      <div>     
        <ImagesAdaptive images={images} /> 
      </div>

      <div className={s.label}>Описание</div>
      <div className={s.listContainer}>
        <li>Может использовать: "Исповедь", "Очищение огнем", "Молитва"</li>
        <li>Может собирать "Церковную десятину"</li>
        <li>Иммунен к повышению стресса</li>
      </div>

      <div className={s.label}>Требования</div>
      <div className={s.listContainer}>
        <li>Не может использовать броню открытого ношения</li>
        <li>Не может использовать воинское оружие</li>
        <li>Должен носить при себе том "Святого писания"</li>
        <li>Должен уметь порицать аморальные поступки людей</li>
        <li>Обязательный фотодопуск</li>
      </div>

      <div className={s.label}>Рекомендации</div>
      <div className={s.listContainer}>
        <li>Умение выступать на публику</li>
        <li>Умение принимать не популярные решения</li>
        <li>Умение спланировать выезд команды</li>
      </div>
    </>
}