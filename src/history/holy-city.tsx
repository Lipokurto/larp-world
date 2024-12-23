import { Item } from '../rules-text/type';

import holyCoat from '../assets/coats/holy.png';

import s from './history.module.css';

export const holyHistory: Item = {
  label: 'Святой Город',
  element: (
    <>
      <div className={s.info}>
        <div className={s.coat}>
          <img src={holyCoat} alt='' />
        </div>

        <div className={s.text}>
          <div><i>Правитель: </i>Пантифик</div>
          <div><i>Столица: </i>город Святой город</div>
          <div><i>Герб: </i>серебряный и золотой ключ на алом фоне</div>
          <div><i>Цвета: </i>белый и красный для верховных служителей, черный и серый для низших чинов</div>
        </div>
      </div>

      <div className={s.block2}>
        <h3>Краткая история</h3>
        <div>Теократический город-государство, который ведет борьбу за распространение престольной веры</div>
        <div>Активно противостоит политеизму Кушан</div>
        <div>Обладает минимальным количеством войск, живет за счет церковной десятины, которую собирает почти со всей территории континента</div>
        <div>Политические придерживается нейтралитета</div>
      </div>
    </>
  ),
}