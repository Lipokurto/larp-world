import symbol from '../../../assets/rules/religion/midens.png';

import { Item } from '../../type';

import s from './religion.module.css';

export const throne: Item = {
  label: 'Святой престол',
  element: (
    <>
      <div>
        <div className={s.container_first}>
          <img src={symbol} alt='Religion' />
        </div>
      </div>

      <h3>Описание</h3>
      <div><b>Глава:</b> Святого Престола является Понтифик</div>
      <div><b>Символика:</b> Летящий в небесах сокол</div>
      <div><b>Цвета:</b> Белый, красный, золотой</div>
      <div><b>Отношение к меткам:</b> Признак того что человек греховен и его может искупить только святое пламя инквизиции</div>
      <div><b>Затмение:</b> Страшный суд в котором грешные души должны страдать</div>
      <div><b>Действия во время затмения:</b> Все грешники должны быть покараны, если не докажут что способны искупить свою вину</div>
      <div><b>Распространение:</b> Королевство Мидленд, Тюдорская империя</div>
    </>
  ),
}