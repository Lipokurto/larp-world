import knight01 from '../../../assets/rules/man/knight/01.png';
import knight02 from '../../../assets/rules/man/knight/02.png';
import knight03 from '../../../assets/rules/man/knight/03.png';

import { ImagesAdaptive } from '../../../components';
import { Item } from '../../type';

import s from './char.module.css';

const images = [knight01, knight02, knight03];

export const knight: Item = {
  label: 'Рыцарь',
  element: 
    <>      
      <div>      
        <ImagesAdaptive images={images} />
      </div>

      <div className={s.label}>Описание</div>
      <div className={s.listContainer}>
        <li>Боец, облаченный в "Качественную броню"</li>
        <li>Принадлежит рыцарскому ордену</li>
      </div>

      <div className={s.label}>Требования</div>
      <div className={s.listContainer}>
        <li>В одежде имеются аттрибуты рыцарских орденов</li>
        <li>Всегда в первую очередь выполняет требование кодекса</li>
        <li>Согласно церковной булле пренебрегают возможностью использовать стрелковое оружие</li>
      </div>

      <div className={s.label}>Рекомендации</div>
      <div className={s.listContainer}>
        <li>Умение играть самостоятельно</li>
      </div>
    </>
}