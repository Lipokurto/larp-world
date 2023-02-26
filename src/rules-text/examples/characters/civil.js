import civil01 from '../../../assets/rules/man/civil/01.jpg';
import civil02 from '../../../assets/rules/man/civil/02.jpg';
import civil03 from '../../../assets/rules/man/civil/03.jpg';
import { AccordionBlock } from '../../../components';

import s from './characters.module.css';

export const civil = {
  label: 'Простолюдин',
  text: 
    <>      
      <div>      
        <div class={s.container}>
          <img src={civil01} alt='Character' />
          <img src={civil02} alt='Character' />
          <img src={civil03} alt='Character' />
        </div>
      </div>

      <AccordionBlock
        items={[
          {
            label: 'Описание',
            text:
              <>
                <li>Игрок желающий отыгрывать простолюдина</li>
              </>
          },
          {
            label: 'Требования',
            text:
              <>
                <li>Хорошо знает разделы: основы, грузоподъемность, ресурсы</li>
                <li>Понимает строение феодального общества</li>
              </>
          },
          {
            label: 'Рекомендации',
            text: 
              <>
                <li>Умение наслаждаться игрой</li>
              </>
          }
        ]} />
    </>
}