import merchant01 from '../../../assets/rules/man/merchant/01.jpg';
import merchant02 from '../../../assets/rules/man/merchant/02.jpg';
import merchant03 from '../../../assets/rules/man/merchant/03.jpg';

import { AccordionBlock, ImagesAdaptive } from '../../../components';

const images = [merchant01, merchant02, merchant03];

export const merchant = {
  label: 'Торговец',
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
                <li>игрок желающий предоставлять игровые товары в рамках игрового процесса</li>
              </>
          },
          {
            label: 'Требования',
            text:
              <>
                <li><li>Хорошо знает разделы: основы,  допуск, боевые взаимодейсвтия, грузоподъемность</li></li>
                <li>Умение торговаться</li>
              </>
          },
          {
            label: 'Рекомендации',
            text: 
              <>
                <li>Предметы усиливающие грузоподьемность</li>
                <li>Умение общаться с людьми</li>
              </>
          }
        ]} />
    </>
}