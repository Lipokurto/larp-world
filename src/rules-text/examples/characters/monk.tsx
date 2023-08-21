import monk01 from '../../../assets/rules/man/monk/01.png';
import monk02 from '../../../assets/rules/man/monk/02.png';

import { ImagesAdaptive } from '../../../components';
import { Item } from '../../type';

import s from './char.module.css';

const images = [monk01, monk02];

export const monk: Item = {
  label: 'Послушник',
  element: 
    <>      
      <div>     
        <ImagesAdaptive images={images} /> 
      </div>

      <div className={s.label}>Описание</div>
      <div className={s.listContainer}>
        <li>Ученик инквизитора</li>
        <li>В свите инквизитора не более 3 полушников</li>
        <li>Не может получить психозы</li>
      </div>

      <div className={s.label}>Требования</div>
      <div className={s.listContainer}>
        <li>Не может использовать броню</li>
        <li>Не может использовать воинское оружие</li>
        <li>Должен уметь порицать аморальные поступки людей</li>
        <li>Обязательный фотодопуск</li>
      </div>

      <div className={s.label}>Рекомендации</div>
      <div className={s.listContainer}>
        <li>Умение выступать на публику</li>
        <li>Умение принимать не популярные решения</li>
        <li>Умение выполнять поручения инквизитора</li>
      </div>
    </>
}