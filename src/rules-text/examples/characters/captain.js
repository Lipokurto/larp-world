import captain01 from '../../../assets/rules/man/captain/01.jpg';
import captain02 from '../../../assets/rules/man/captain/02.jpg';
import captain03 from '../../../assets/rules/man/captain/03.jpg';
import { AccordionBlock } from '../../../components';

import s from './characters.module.css';

export const captain = {
  label: 'Капитан',
  text: 
    <>      
      <div>      
        <div class={s.container}>
          <img src={captain01} alt='Character' />
          <img src={captain02} alt='Character' />
          <img src={captain03} alt='Character' />
        </div>
      </div>

      <AccordionBlock
        items={[
          {
            label: 'Описание',
            text:
              <>
                <li>Опытный игрок готовы собрать и организовать бойцов для выполнения различных задач</li>
                <li>Обладает "Особым оружием"</li>
              </>
          },
          {
            label: 'Требования',
            text:
              <>
                <li>Должен досканально знать правила</li>
                <li>Является гарантом адекватности каманды, которую возглавляет</li>
                <li>Обязательный фотодопуск</li>
              </>
          },
          {
            label: 'Рекомендации',
            text: 
              <>
                <li>Умение выработать общий внешний вид команды</li>
                <li>Умение спланировать выезд команды</li>
              </>
          }
        ]} />
    </>
}