import fighter01 from '../../../assets/rules/man/fighter/01.jpg';
import fighter02 from '../../../assets/rules/man/fighter/02.jpg';
import fighter03 from '../../../assets/rules/man/fighter/03.jpg';

import { AccordionBlock, ImagesAdaptive } from '../../../components';
import { Item } from '../../type';

const images = [fighter01, fighter02, fighter03];

export const fighter: Item = {
  label: 'Боец',
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
                <li>Боевой игрок в составе команды</li>
              </>
          },
          {
            label: 'Требования',
            element:
              <>
                <li>Знает кто капитан</li>
                <li>Хорошо знает разделы: основы,  допуск, боевые взаимодействия, грузоподъемность</li>
              </>
          },
          {
            label: 'Рекомендации',
            element: 
              <>
                <li>Умение играть в команде</li>
                <li>Умение слушать капитана и интенданта</li>
                <li>Провести несколько тренировок вне игры по правилам проекта</li>
              </>
          }
        ]} />
    </>
}