import React from 'react';

import craftsman01 from '../../../assets/rules/man/craftsman/01.jpg';
import craftsman02 from '../../../assets/rules/man/craftsman/02.jpg';
import craftsman03 from '../../../assets/rules/man/craftsman/03.jpg';

import { AccordionBlock, ImagesAdaptive } from '../../../components';
import { Item } from '../../type';

const images = [craftsman01, craftsman02, craftsman03];

export const craftsman: Item = {
  label: 'Ремесленник',
  element: 
    <>      
      <div>      
        <ImagesAdaptive images={images} />
      </div>

      <AccordionBlock
        items={[
          {
            label: 'Описание',
            element:
              <>
                <li>Игрок готовы играть в экономику и понимающий ее принципы</li>
                <li>Игрок желающий вывести красивую мастерскую</li>
              </>
          },
          {
            label: 'Требования',
            element:
              <>
                <li>Хорошо знает разделы: основы,  допуск, боевые взаимодейсвтия, локация</li>
                <li>Высокое качество подготовки мастерской и личного антуража</li>
                <li>Техника безопасности</li>
              </>
          },
          {
            label: 'Рекомендации',
            element: 
              <>
                <li>Умение организовать работу мастерской</li>
                <li>Умение активно торговаться с игроками за оказания услуг</li>
              </>
          }
        ]} />
    </>
}