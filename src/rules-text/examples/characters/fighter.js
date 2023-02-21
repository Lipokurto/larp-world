import fighter01 from '../../../assets/rules/man/fighter/01.jpg';
import fighter02 from '../../../assets/rules/man/fighter/02.jpg';
import fighter03 from '../../../assets/rules/man/fighter/03.jpg';
import { AccordionBlock } from '../../../components';

import s from './characters.module.css';

export const fighter = {
  label: 'Боец',
  text: 
    <>      
      <div>      
        <div class={s.container}>
          <img src={fighter01} alt='Character' />
          <img src={fighter02} alt='Character' />
          <img src={fighter03} alt='Character' />
        </div>
      </div>

      <AccordionBlock
        items={[
          {
            label: 'Описание',
            text:
              <>
                <li>Боевой игрок в составе команды</li>
              </>
          },
          {
            label: 'Требования',
            text:
              <>
                <li>Знает кто капитан</li>
                <li>Знает разделы: основы,  допуск, боевые взаимодейсвтия, грузоподъемность</li>
              </>
          },
          {
            label: 'Рекомендации',
            text: 
              <>
                <li>Умение играть в команде</li>
                <li>Умение слшуать капитана и интенданта</li>
                <li>Провести несколько тренеровок вне игры по правилам проекта</li>
              </>
          }
        ]} />
    </>
}