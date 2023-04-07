import { AccordionBlock } from '../../../components';
import hospitalImg from '../../../assets/locations/hospital.png';
import { Item } from '../../type';

import s from './buildings.module.css';

export const hospital: Item = {
  label: 'Госпиталь',
  element:
    <>      
      <div className={s.container}>
        <img src={hospitalImg} alt='Hospital' />
      </div>

      <AccordionBlock
        items={[
          {
            label: 'Минимальные требования',
            element:
              <>
                <li>Крытое место</li>
                <li>Наличие хирургического стола</li>
                <li>Наличия столика с инструментами</li>
                <li>Место для восстановления больных (лавочка, подстилка, сено)</li>
              </>
          },
          {
            label: 'Повышение эффективности',
            element:
              <>
                <li>Дополнительные хирургические места с докторами</li>
                <li>Помощники доктора</li>
                <li>Доска с анатомической картой</li>
                <li>Докторская книга с перечнем травм и способом их лечения</li>
                <li>Шкафчик с лекарствами</li>
                <li>Подопытные грызуны</li>
              </>
          }
        ]} />
    </>
}