import executor01 from '../../../assets/rules/man/executor/01.jpg';
import executor02 from '../../../assets/rules/man/executor/02.jpg';
import executor03 from '../../../assets/rules/man/executor/03.jpg';

import { ImagesAdaptive } from '../../../components';
import { Item } from '../../type';

import s from './char.module.css';

const images = [executor01, executor02, executor03];

export const executor: Item = {
  label: 'Палач',
  element: 
    <>      
      <div>      
        <ImagesAdaptive images={images} />
      </div>

      <div className={s.label}>Описание</div>
      <div className={s.listContainer}>
        <li>Может использовать: "Очищение огнем"</li>
        <li>Может использовать ТОЛЬКО "Особое оружие"</li>
        <li>В случае получения "Психологической особенности" заменяет ее на особенность "Фанатик"</li>
        <li>В свите инквизитора не более 5 палачей</li>
      </div>

      <div className={s.label}>Требования</div>
      <div className={s.listContainer}>
        <li>Наличие скрытого лица под маской</li>
        <li>Наличие шлема</li>
        <li>Максимальное количество доступных броневых хитов палача 2</li>
        <li>Обязательный фотодопуск персонажа и оружия</li>
      </div>

      <div className={s.label}>Требования</div>
      <div className={s.listContainer}>
        <li>Умение исполнять даже приказы инквизитора</li>
        <li>Умение отыгрывать фанатичную жестокость без перегибов</li>
      </div>
    </>
}