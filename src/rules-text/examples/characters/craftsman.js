import craftsman01 from '../../../assets/rules/man/craftsman/01.jpg';
import craftsman02 from '../../../assets/rules/man/craftsman/02.jpg';
import craftsman03 from '../../../assets/rules/man/craftsman/03.jpg';
import { AccordionBlock } from '../../../components';

import s from './characters.module.css';

export const craftsman = {
  label: 'Ремесленник',
  text: 
    <>      
      <div>      
        <div class={s.container}>
          <img src={craftsman01} alt='Character' />
          <img src={craftsman02} alt='Character' />
          <img src={craftsman03} alt='Character' />
        </div>
      </div>

      <AccordionBlock
        items={[
          {
            label: 'Описание',
            text:
              <>
                <li>Игрок готовы играть в экономику и понимающий ее принципы</li>
                <li>Игрок желающий вывести красивую мастерскую</li>
              </>
          },
          {
            label: 'Требования',
            text:
              <>
                <li>Хорошо знает разделы: основы,  допуск, боевые взаимодейсвтия, локация</li>
                <li>Высокое качество подготовки мастерской и личного антуража</li>
                <li>Техника безопасности</li>
              </>
          },
          {
            label: 'Рекомендации',
            text: 
              <>
                <li>Умение организовать работу мастерской</li>
                <li>Умение активно торговаться с игроками за оказания услуг</li>
              </>
          }
        ]} />
    </>
}