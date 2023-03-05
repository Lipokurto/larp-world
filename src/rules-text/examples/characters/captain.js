import captain01 from '../../../assets/rules/man/captain/01.jpg';
import captain02 from '../../../assets/rules/man/captain/02.jpg';
import captain03 from '../../../assets/rules/man/captain/03.jpg';

import { AccordionBlock, ImagesAdaptive } from '../../../components';

const images = [captain01, captain02, captain03];

export const captain = {
  label: 'Капитан',
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