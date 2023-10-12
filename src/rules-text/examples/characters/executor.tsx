import executor01 from '../../../assets/rules/man/executor/01.jpg';
import executor02 from '../../../assets/rules/man/executor/02.jpg';
import executor03 from '../../../assets/rules/man/executor/03.jpg';

import weapon01 from '../../../assets/rules/man/executor//weapon/01.png';
import weapon02 from '../../../assets/rules/man/executor//weapon/02.png';
import weapon03 from '../../../assets/rules/man/executor//weapon/03.png';

import heart from '../../../assets/icons/health/heart.png';
import shield from '../../../assets/icons/health/shield.png';

import { ImagesAdaptive } from '../../../components';
import { Item } from '../../type';

import s from './char.module.css';

const images = [executor01, executor02, executor03];
const weapons = [weapon01, weapon02, weapon03];

export const executor: Item = {
  label: 'Палач',
  player: 'Игрок',
  desc: 'Божественная кара в руках инквизитора',
  element: 
    <>      
      <div>      
        <ImagesAdaptive images={images} />
      </div>

      <div className={s.label}><i>Описание</i></div>
      <div className={s.listContainer}>
        <li>Может использовать: <b>"Казнь"</b></li>
        <li>Может использовать ТОЛЬКО <b>"Особое оружие"</b></li>
        <li>В случае получения психоза заменяет ее на психоз <b>"Фанатик"</b></li>
        <li>В свите инквизитора не более <b>2 палачей</b></li>
      </div>

      <div>      
        <ImagesAdaptive images={weapons} />
      </div>

      <div className={s.label}><i>Требования к оружию палача</i></div>
      <div className={s.listContainer}>
        <li>Оружие должно соответствовать всем допускам.</li>
        <li>Стилистика оружия должна быть простой и массивной.</li>
        <li>Оружие не должно быть прямого воинского назначения типа: меч, клевец, булава, цеп и т. д.</li>
        <li>Визуально оружие само по себе должно давать понимание что это <b>"Особое оружие"</b> на расстоянии минимум 10 метров.</li>
        <li>"DragonSlayer" (меч Гатса) еще не выкован, поэтому вывести его нельзя.</li>
        <li>На фазе проектирования рекомендуется согласовать концепт оружия с мастерами.</li>
      </div>

      <div className={s.label}><i>Требования</i></div>
      <div className={s.listContainer}>
        <li>Наличие скрытого лица под маской.</li>
        <li>Наличие шлема.</li>
        <li>Максимум 3 хита ( <img src={heart} alt='' width={15} /> <img src={shield} alt='' width={15} /> <img src={shield} alt='' width={15} /> ).</li>
        <li>Обязательный фотодопуск персонажа и оружия.</li>
      </div>

      <div className={s.label}><i>Рекомендации</i></div>
      <div className={s.listContainer}>
        <li>Умение исполнять даже приказы инквизитора.</li>
        <li>Умение отыгрывать фанатичную жестокость без перегибов.</li>
      </div>
    </>
}