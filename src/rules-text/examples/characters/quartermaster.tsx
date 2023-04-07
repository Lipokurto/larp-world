import quartermaster01 from '../../../assets/rules/man/quartermaster/01.jpg';
import quartermaster02 from '../../../assets/rules/man/quartermaster/02.jpg';
import quartermaster03 from '../../../assets/rules/man/quartermaster/03.jpg';

import { AccordionBlock, ImagesAdaptive } from '../../../components';
import { Item } from '../../type';

const images = [quartermaster01, quartermaster02, quartermaster03];

export const quartermaster: Item = {
  label: 'Интендант',
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
                <li>Выполняет роль регионального мастера команды</li>
                <li>Имеет доступ к мастерским ресурсам</li>
                <li>Является членом команды, которую представляет</li>
              </>
          },
          {
            label: 'Требования',
            element:
              <>
                <li>Должен досконально знать правила</li>
                <li>Личная ответственность за соблюдение правил командой</li>
                <li>Обязательный фотодопуск</li>
              </>
          },
          {
            label: 'Рекомендации',
            element:
              <>
                <li>Умение анализировать правила</li>
                <li>Умение принимать не популярные решения</li>
                <li>Стремление к справедливому противостоянию</li>
              </>
          }
        ]} />
    </>
}