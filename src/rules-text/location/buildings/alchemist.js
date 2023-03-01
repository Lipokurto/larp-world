import { AccordionBlock } from '../../../components';
import alchemistImg from '../../../assets/locations/alchemist.png';

import s from './buildings.module.css';


export const alchemist = {
  label: 'Лаборатория',
  text: 
    <>
      <div className={s.container}>
        <img src={alchemistImg} alt='Alchemist' />
      </div>

      <AccordionBlock
        items={[
          {
            label: 'Минимальные требования',
            text:
              <>
                <li>Крытое место для работы</li>
                <li>Алхимический стол (стол с пентоограммами для смешивания веществ)</li>
                <li>Полка с книгами или ингридиентами</li>
              </>
          },
          {
            label: 'Повышение эффективности',
            text: 
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