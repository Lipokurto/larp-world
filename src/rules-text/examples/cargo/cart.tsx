import cart01 from '../../../assets/cargo/cart/cart-01.png';
import cart02 from '../../../assets/cargo/cart/cart-02.png';

import { Item } from '../../type';
import { ImagesAdaptive } from '../../../components';

import s from './cargo.module.css';

const cartImg = [cart01, cart02];

export const cart: Item = {
  label: 'Телега',
  element: (
    <>
      <ImagesAdaptive images={cartImg} />
      <h3>Описание</h3>
      <div>Тележка с двумя и более колесами</div>
      <div className={s.label}>Эффект</div>
      <div>Добавляет 6+ слота под предметы</div>
      <div className={s.label}>Требования</div>
      <div className={s.listContainer}>
        <li>Не должна казаться пустой</li>
        <li>Предмет должен иметь исторические аналоги средневековья</li>
      </div>
      <div className={s.label}>Дополнительно</div>
      <div className={s.listContainer}>
        <li>Количество предметов, помещающихся в телегу может быть увеличено или уменьшено в зависимость от общего объема или антуража</li>
        <li>При обыске хозяина телеги, если она находится недалеко от него, это действие распространяется и на тачку</li>
        <li>В случае отсутствия хозяина телегу можно обыскать отдельно, осмотрев ее игровой паспорт</li>
        <li>Может использоваться как часть оборонительных сооружений, если будет надежно закреплена</li>
        <li>На каждую тачку выдается специальный паспорт с количеством предметов которые она может переносить. Предметы хранятся в этом паспорте</li>
        <li>Не отчуждаемый предмет</li>
      </div>
    </>
  ),
}