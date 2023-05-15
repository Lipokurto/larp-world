import bag01 from '../../../assets/cargo/bag/bag-01.png';
import bag02 from '../../../assets/cargo/bag/bag-02.png';
import bag03 from '../../../assets/cargo/bag/bag-03.png';

import { ImagesAdaptive } from "../../../components";
import { Item } from "../../type";

import s from './cargo.module.css';

const bags = [bag01, bag02, bag03];

export const bag: Item = {
  label: 'Сумка',
  element: 
    <>
      <ImagesAdaptive images={bags} />
      <div className={s.label}>Описание</div>
      <div>Заплечная сумка для одиночного ношения</div>
      <div className={s.label}>Эффект</div>
      <div>Добавляет 2 слота под предметы</div>
      <div className={s.label}>Требования</div>
      <div className={s.listContainer}>
        <li>Не должна казаться пустой</li>
        <li>Перенос сумки не занимает рук</li>
        <li>Предмет должен иметь исторические аналоги средневековья</li>
      </div>
      <div className={s.label}>Дополнительно</div>
      <div className={s.listContainer}>
        <li>Количество предметов, помещающихся в сумку может быть увеличено или уменьшено в зависимость от общего объема или антуража сумки</li>
        <li>Поясные сумки не считаются местом для хранения игровых ресурсов</li>
        <li>Сумка через плече может быть рассмотрена как предмет для переноса игровых ресурсов, исходя из ее объемов и антуражности</li>
        <li>При обыске хозяина сумки, если она находится недалеко от него, это действие распространяется и на сумку</li>
        <li>На каждую сумку выдается специальный паспорт количеством предметов которые она может переносить. Предметы хранятся в этом паспорте</li>
        <li>Не отчуждаемый предмет</li>
      </div>
    </>
}