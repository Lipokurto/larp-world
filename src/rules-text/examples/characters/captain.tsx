import captain01 from '../../../assets/rules/man/captain/01.jpg';
import captain02 from '../../../assets/rules/man/captain/02.jpg';
import captain03 from '../../../assets/rules/man/captain/03.jpg';

import { ImagesAdaptive } from '../../../components';
import { Item } from '../../type';

import s from './char.module.css';

const images = [captain01, captain02, captain03];

export const captain: Item = {
  label: 'Капитан',
  element: 
    <>      
      <div>
        <ImagesAdaptive images={images} />
      </div>

      <div className={s.label}>Описание</div>
      <div className={s.listContainer}>
        <li>Личным отыгрышем может временно отменить действие некоторых психозов</li>
        <li>Обладает возможность использовать "Особым оружием"</li>
      </div>

      <div className={s.label}>Требования</div>
      <div className={s.listContainer}>
        <li>Должен досконально знать правила</li>
        <li>Является гарантом адекватности команды, которую возглавляет</li>
        <li>Обязательный фотодопуск</li>
      </div>

      <div className={s.label}>Рекомендации</div>
      <div className={s.listContainer}>
        <li>Умение выработать общий внешний вид команды</li>
        <li>Умение спланировать выезд команды</li>
      </div>
    </>
}