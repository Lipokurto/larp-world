import captain01 from '../../../assets/rules/man/captain/01.jpg';
import captain02 from '../../../assets/rules/man/captain/02.jpg';
import captain03 from '../../../assets/rules/man/captain/03.jpg';

import { AccordionBlock, ImagesAdaptive } from '../../../components';
import { Item } from '../../type';

const images = [captain01, captain02, captain03];

export const captain: Item = {
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
                <li>Опытный игрок готовы собрать и организовать бойцов для выполнения различных задач</li>
                <li>Обладает "Особым оружием"</li>
              </>
          },
          {
            label: 'Требования',
            element:
              <>
                <li>Должен досканально знать правила</li>
                <li>Является гарантом адекватности каманды, которую возглавляет</li>
                <li>Обязательный фотодопуск</li>
              </>
          },
          {
            label: 'Рекомендации',
            element: 
              <>
                <li>Умение выработать общий внешний вид команды</li>
                <li>Умение спланировать выезд команды</li>
              </>
          }
        ]} />
    </>
}