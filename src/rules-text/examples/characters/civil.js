import civil01 from '../../../assets/rules/man/civil/01.jpg';
import civil02 from '../../../assets/rules/man/civil/02.jpg';
import civil03 from '../../../assets/rules/man/civil/03.jpg';

import { AccordionBlock, ImagesAdaptive } from '../../../components';

const images = [civil01, civil02, civil03];

export const civil = {
  label: 'Простолюдин',
  text: 
    <>      
      <div>      
        <ImagesAdaptive images={images} />
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