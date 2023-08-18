import { AccordionBlock } from '../../../components';
import smithImg from '../../../assets/locations/smith.png';
import { Item } from '../../type';

import s from './buildings.module.css';

export const smith: Item = {
  label: 'Кузница',
  element:
    <>
      <div className={s.container}>
        <img src={smithImg} alt='Blacksmith' />
      </div>

      <AccordionBlock
        items={[
          {
            label: 'Минимальные требования',
            element:
              <>
                <li>Крытое место</li>
                <li>Наличие наковальни</li>
                <li>Наличия горна</li>
                <li>Место для хранения угля и руды</li>
              </>
          },
          {
            label: 'Повышение эффективности',
            element:
              <>
                <li>Дополнительные рабочие места с кузнецами</li>
                <li>Помощники кузнеца</li>
                <li>Доска с чертежами</li>
                <li>Книга с зарисовками элементов производства</li>
                <li>Шкафчик с мелкими деталями</li>
                <li>Выставочные образцы</li>
              </>
          }
        ]} />
    </>
}