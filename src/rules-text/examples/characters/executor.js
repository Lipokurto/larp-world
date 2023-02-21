import executor01 from '../../../assets/rules/man/executor/01.jpg';
import executor02 from '../../../assets/rules/man/executor/02.jpg';
import executor03 from '../../../assets/rules/man/executor/03.jpg';
import { AccordionBlock } from '../../../components';

import s from './characters.module.css';

export const executor = {
  label: 'Палач',
  text: 
    <>      
      <div>      
        <div class={s.container}>
          <img src={executor01} alt='Character' />
          <img src={executor02} alt='Character' />
          <img src={executor03} alt='Character' />
        </div>
      </div>

      <AccordionBlock
        items={[
          {
            label: 'Описание',
            text:
              <>
                <li>Игрок желающий подготовить красивый внушающий страх образ упертого фанатика</li>
                <li>Обладает "Особым оружием"</li>
              </>
          },
          {
            label: 'Требования',
            text:
              <>
                <li>Знает разделы: основы,  допуск, боевые взаимодейсвтия, религиозные действия, боевые действия</li>
                <li>Наличие закрытой маски</li>
                <li>Обязательный фотодопуск</li>
              </>
          },
          {
            label: 'Рекомендации',
            text: 
              <>
                <li>Умение исполнять даже приказы инквизитора</li>
                <li>Умение отигрывать фанатичную жестокость</li>
              </>
          }
        ]} />
    </>
}