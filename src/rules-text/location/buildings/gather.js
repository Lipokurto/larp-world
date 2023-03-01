import { AccordionBlock } from '../../../components';
import gatherImg from '../../../assets/locations/peasant.png';

import s from './buildings.module.css';


export const gather = {
  label: 'Производственные постройки',
  text: 
    <>
      <div className={s.container}>
        <img src={gatherImg} alt='Gather' />
      </div>

      <AccordionBlock
        items={[
          {
            label: 'Минимальные требования',
            text:
              <>
                <li>Крытое место для хранения ресурсов</li>
                <li>Место добычи (шахта или огород)</li>
                <li>Рабочий инструмент</li>
              </>
          },
          {
            label: 'Повышение эффективности',
            text: 
              <>
                <li>Ограда рабочей зоны</li>
                <li>Работники</li>
                <li>Улучшенные условия хранения ресурсов</li>
                <li>Учетная книга</li>
              </>
          }
        ]} />
    </>
}