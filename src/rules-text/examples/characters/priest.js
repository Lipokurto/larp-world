import priest01 from '../../../assets/rules/man/priest/01.jpg';
import priest02 from '../../../assets/rules/man/priest/02.jpg';
import priest03 from '../../../assets/rules/man/priest/03.jpg';
import { AccordionBlock } from '../../../components';

import s from './characters.module.css';

export const priest = {
  label: 'Капитан',
  text: 
    <>      
      <div>      
        <div class={s.container}>
          <img src={priest01} alt='Character' />
          <img src={priest02} alt='Character' />
          <img src={priest03} alt='Character' />
        </div>
      </div>

      <AccordionBlock
        items={[
          {
            label: 'Описание',
            text:
              <>
                <li>Игрок желающий поиграть в мистику и социалку</li>
              </>
          },
          {
            label: 'Требования',
            text:
              <>
                <li>Хорошо знает разделы: основы, религиозные действия</li>
                <li>Умение выступать перед толпой</li>
                <li>Соотвествующий внешний вид</li>
              </>
          },
          {
            label: 'Рекомендации',
            text: 
              <>
                <li>Умение громок и четко читать речи</li>
                <li>Умение убеждать людей</li>
              </>
          }
        ]} />
    </>
}