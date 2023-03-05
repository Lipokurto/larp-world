import fighter01 from '../../../assets/rules/man/fighter/01.jpg';
import fighter02 from '../../../assets/rules/man/fighter/02.jpg';
import fighter03 from '../../../assets/rules/man/fighter/03.jpg';

import { AccordionBlock, ImagesAdaptive } from '../../../components';

const images = [fighter01, fighter02, fighter03];

export const fighter = {
  label: 'Боец',
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
                <li>Боевой игрок в составе команды</li>
              </>
          },
          {
            label: 'Требования',
            text:
              <>
                <li>Знает кто капитан</li>
                <li>Хорошо знает разделы: основы,  допуск, боевые взаимодейсвтия, грузоподъемность</li>
              </>
          },
          {
            label: 'Рекомендации',
            text: 
              <>
                <li>Умение играть в команде</li>
                <li>Умение слшуать капитана и интенданта</li>
                <li>Провести несколько тренеровок вне игры по правилам проекта</li>
              </>
          }
        ]} />
    </>
}