import merchant01 from '../../../assets/rules/man/merchant/01.jpg';
import merchant02 from '../../../assets/rules/man/merchant/02.jpg';
import merchant03 from '../../../assets/rules/man/merchant/03.jpg';

import { AccordionBlock, ImagesAdaptive } from '../../../components';
import { Item } from '../../type';

const images = [merchant01, merchant02, merchant03];

export const merchant: Item = {
  label: 'Торговец',
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
                <li>игрок желающий предоставлять игровые товары в рамках игрового процесса</li>
              </>
          },
          {
            label: 'Требования',
            element:
              <>
                <li><li>Хорошо знает разделы: основы,  допуск, боевые взаимодействия, грузоподъемность</li></li>
                <li>Умение торговаться</li>
              </>
          },
          {
            label: 'Рекомендации',
            element:
              <>
                <li>Предметы усиливающие грузоподъемность</li>
                <li>Умение общаться с людьми</li>
              </>
          }
        ]} />
    </>
}