import barrow01 from '../../../assets/cargo/barrow/barrow-01.png';
import barrow02 from '../../../assets/cargo/barrow/barrow-02.png';

import { Item } from "../../type";
import { ImagesAdaptive } from "../../../components";

import s from './cargo.module.css';

const barrowImg = [barrow01, barrow02];

export const barrow: Item = {
  label: 'Тачка',
  element: 
    <>
      <ImagesAdaptive images={barrowImg} />
      <div className={s.label}>Описание</div>
      <div>Одноколесная тачка для перевоза грузов</div>
      <div className={s.label}>Эффект</div>
      <div>Добавляет 3 слота под предметы</div>
      <div className={s.label}>Требования</div>
      <div className={s.listContainer}>
        <li>Не должна казаться пустой</li>
        <li>Предмет должен иметь исторические аналоги средневековья</li>
      </div>
      <div className={s.label}>Дополнительно</div>
      <div className={s.listContainer}>
        <li>Количество предметов, помещающихся в тачку может быть увеличено или уменьшено в зависимость от общего объема или антуража</li>
        <li>При обыске хозяина тачки, если она находится недалеко от него, это действие распространяется и на тачку</li>
        <li>На каждую тачку выдается специальный паспорт количеством предметов которые она может переносить. Предметы хранятся в этом паспорте</li>
        <li>В случае отсутствия хозяина тачку можно обыскать отдельно, осмотрев ее игровой паспорт</li>
        <li>Может использоваться как часть оборонительных сооружений, если будет надежно закреплена</li>
        <li>Не отчуждаемый предмет</li>
      </div>
    </>
}