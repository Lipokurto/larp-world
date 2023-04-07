import priest01 from '../../../assets/rules/man/priest/01.jpg';
import priest02 from '../../../assets/rules/man/priest/02.jpg';
import priest03 from '../../../assets/rules/man/priest/03.jpg';

import { AccordionBlock, ImagesAdaptive } from '../../../components';
import { Item } from '../../type';

const images = [priest01, priest02, priest03];

export const priest: Item = {
  label: 'Капитан',
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
                <li>Игрок желающий поиграть в мистику и социалку</li>
              </>
          },
          {
            label: 'Требования',
            element:
              <>
                <li>Хорошо знает разделы: основы, религиозные действия</li>
                <li>Умение выступать перед толпой</li>
                <li>Соответствующий внешний вид</li>
              </>
          },
          {
            label: 'Рекомендации',
            element:
              <>
                <li>Умение громок и четко читать речи</li>
                <li>Умение убеждать людей</li>
              </>
          }
        ]} />
    </>
}