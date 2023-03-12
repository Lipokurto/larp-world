import civil01 from '../../../assets/rules/man/civil/01.jpg';
import civil02 from '../../../assets/rules/man/civil/02.jpg';
import civil03 from '../../../assets/rules/man/civil/03.jpg';

import { AccordionBlock, ImagesAdaptive } from '../../../components';
import { Item } from '../../type';

const images = [civil01, civil02, civil03];

export const civil: Item = {
  label: 'Простолюдин',
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
                <li>Игрок желающий отыгрывать простолюдина</li>
              </>
          },
          {
            label: 'Требования',
            element:
              <>
                <li>Хорошо знает разделы: основы, грузоподъемность, ресурсы</li>
                <li>Понимает строение феодального общества</li>
              </>
          },
          {
            label: 'Рекомендации',
            element: 
              <>
                <li>Умение наслаждаться игрой</li>
              </>
          }
        ]} />
    </>
}