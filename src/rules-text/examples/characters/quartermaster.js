import quartermaster01 from '../../../assets/rules/man/quartermaster/01.jpg';
import quartermaster02 from '../../../assets/rules/man/quartermaster/02.jpg';
import quartermaster03 from '../../../assets/rules/man/quartermaster/03.jpg';

import { AccordionBlock, ImagesAdaptive } from '../../../components';

const images = [quartermaster01, quartermaster02, quartermaster03];

export const quartermaster = {
  label: 'Интендант',
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
                <li>Выполняет роль регионального мастера команды</li>
                <li>Имеет доступ к мастерским ресурсам</li>
                <li>Является членом команды, которую предствляет</li>
              </>
          },
          {
            label: 'Требования',
            text:
              <>
                <li>Должен досканально знать правила</li>
                <li>Личная отвественность за соблюдение правил командой</li>
                <li>Обязательный фотодопуск</li>
              </>
          },
          {
            label: 'Рекомендации',
            text: 
              <>
                <li>Умение анализировать правила</li>
                <li>Умение принимать не популярные решения</li>
                <li>Стремление к справедливому противостоянию</li>
              </>
          }
        ]} />
    </>
}