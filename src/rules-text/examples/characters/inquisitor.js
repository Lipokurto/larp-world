import inquisitor01 from '../../../assets/rules/man/inquisitor/01.jpg';
import inquisitor02 from '../../../assets/rules/man/inquisitor/02.jpg';
import inquisitor03 from '../../../assets/rules/man/inquisitor/03.jpg';
import { AccordionBlock } from '../../../components';

import s from './characters.module.css';

export const inquisitor = {
  label: 'Инквизитор',
  text: 
    <>      
      <div>      
        <div class={s.container}>
          <img src={inquisitor01} alt='Character' />
          <img src={inquisitor02} alt='Character' />
          <img src={inquisitor03} alt='Character' />
        </div>
      </div>

      <AccordionBlock
        items={[
          {
            label: 'Описание',
            text:
              <>
                <li>Опытный игрок, желающий поиграть в мистику с бюрократией</li>
              </>
          },
          {
            label: 'Требования',
            text:
              <>
                <li>Должен досканально знать правила</li>
                <li>Является гарантом адекватности каманды, которую возглавляет</li>
                <li>Обязательный фотодопуск</li>
              </>
          },
          {
            label: 'Рекомендации',
            text: 
              <>
                <li>Умение выступать на публику</li>
                <li>Умение принимать не популярные решения</li>
                <li>Умение спланировать выезд команды</li>
              </>
          }
        ]} />
    </>
}