import quartermaster01 from '../../../assets/rules/man/quartermaster/01.jpg';
import quartermaster02 from '../../../assets/rules/man/quartermaster/02.jpg';
import quartermaster03 from '../../../assets/rules/man/quartermaster/03.jpg';
import { AccordionBlock } from '../../../components';

import s from './characters.module.css';

export const quartermaster = {
  label: 'Интендант',
  text: 
    <>      
      <div>      
        <div class={s.container}>
          <img src={quartermaster01} alt='Character' />
          <img src={quartermaster02} alt='Character' />
          <img src={quartermaster03} alt='Character' />
        </div>
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