import { AccordionBlock } from '../../../components';
import alchemistImg from '../../../assets/locations/alchemist.png';
import { Item } from '../../type';

import s from './buildings.module.css';

export const alchemist: Item = {
  label: 'Лаборатория',
  element:
    <>
      <div className={s.container}>
        <img src={alchemistImg} alt='Alchemist' />
      </div>

      <AccordionBlock
        items={[
          {
            label: 'Минимальные требования',
            element:
              <>
                <li>Крытое место для работы</li>
                <li>Алхимический стол (стол с пентаграммами для смешивания веществ)</li>
                <li>Полка с книгами или ингридиентами</li>
              </>
          },
          {
            label: 'Повышение эффективности',
            element:
              <>
                <li>Дополнительная полка с книгами или ингридиентами</li>
                <li>Подсветка алхимического стола</li>
                <li>Доска с алхимическими зарисовками</li>
                <li>Мелкое подопытное сказочное существо</li>
              </>
          }
        ]} />
    </>
}