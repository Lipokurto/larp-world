import React from 'react';

import inquisitor01 from '../../../assets/rules/man/inquisitor/01.jpg';
import inquisitor02 from '../../../assets/rules/man/inquisitor/02.jpg';
import inquisitor03 from '../../../assets/rules/man/inquisitor/03.jpg';

import { AccordionBlock, ImagesAdaptive } from '../../../components';
import { Item } from '../../type';

const images = [inquisitor01, inquisitor02, inquisitor03];

export const inquisitor: Item = {
  label: 'Инквизитор',
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
                <li>Опытный игрок, желающий поиграть в мистику с бюрократией</li>
              </>
          },
          {
            label: 'Требования',
            element:
              <>
                <li>Должен досканально знать правила</li>
                <li>Является гарантом адекватности каманды, которую возглавляет</li>
                <li>Обязательный фотодопуск</li>
              </>
          },
          {
            label: 'Рекомендации',
            element: 
              <>
                <li>Умение выступать на публику</li>
                <li>Умение принимать не популярные решения</li>
                <li>Умение спланировать выезд команды</li>
              </>
          }
        ]} />
    </>
}