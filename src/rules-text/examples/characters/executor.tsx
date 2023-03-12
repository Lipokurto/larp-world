import executor01 from '../../../assets/rules/man/executor/01.jpg';
import executor02 from '../../../assets/rules/man/executor/02.jpg';
import executor03 from '../../../assets/rules/man/executor/03.jpg';

import { AccordionBlock, ImagesAdaptive } from '../../../components';
import { Item } from '../../type';

const images = [executor01, executor02, executor03];

export const executor: Item = {
  label: 'Палач',
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
                <li>Игрок желающий подготовить красивый внушающий страх образ упертого фанатика</li>
                <li>Обладает "Особым оружием"</li>
              </>
          },
          {
            label: 'Требования',
            element:
              <>
                <li>Хорошо знает разделы: основы,  допуск, боевые взаимодейсвтия, религиозные действия, боевые действия</li>
                <li>Наличие закрытой маски</li>
                <li>Обязательный фотодопуск</li>
              </>
          },
          {
            label: 'Рекомендации',
            element: 
              <>
                <li>Умение исполнять даже приказы инквизитора</li>
                <li>Умение отигрывать фанатичную жестокость</li>
              </>
          }
        ]} />
    </>
}