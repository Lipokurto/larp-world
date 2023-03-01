import { AccordionBlock } from '../../../components';
import smithImg from '../../../assets/locations/smith.png';

import s from './buildings.module.css';

export const smith = {
  label: 'Кузница',
  text: 
    <>
      <div className={s.container}>
        <img src={smithImg} alt='Blacksmith' />
      </div>

      <AccordionBlock
        items={[
          {
            label: 'Минимальные требования',
            text:
              <>
                <li>Крытое место</li>
                <li>Наличие хирургического стола</li>
                <li>Наличия столика с инструментами</li>
                <li>Место для восстанволения больных (лавочка, подстилка, сено)</li>
              </>
          },
          {
            label: 'Повышение эффективности',
            text: 
              <>
                <li>Дополнительные хирургические места с докторами</li>
                <li>Помошники доктора</li>
                <li>Доска с анатомической картой</li>
                <li>Докторская книга с перечнем травм и способом их лечения</li>
                <li>Шкавчик с лекарствами</li>
                <li>Подопытные грызуны</li>
              </>
          }
        ]} />
    </>
}