import { Item } from '../rules-text/type';

import paneriaCoat from '../assets/coats/paneria.png';

import s from './history.module.css';

export const paneriaHistory: Item = {
  label: 'Альянс Панерия',
  element: (
    <>
      <div className={s.info}>
        <div className={s.coat}>
          <img src={paneriaCoat} alt='' />
        </div>

        <div className={s.text}>
          <div><i>Правитель: </i>совет независимых городов</div>
          <div><i>Столица: </i>не имеет</div>
          <div><i>Герб: </i>Золотой лев с серебряными ключами на синем фоне</div>
          <div><i>Цвета: </i>Золотой, белый, синий</div>
        </div>
      </div>

      <div className={s.block2}>
        <h3>Краткая история</h3>
        <div>Четыре города: Вританнис, Фарис, Нис, Лана, которые благословил Святой Престол на независимость</div>
        <div>Неофициально все правители и дипломаты понимаю что настоящей столицей альянса считается Святой Город</div>
        <div>Фактически сейчас альянс сдерживает кушанскую культурную экспансию, которую и военную экспансию королевства Балден</div>
        <div>Все города славятся своими судостроительными верфями и мануфактурами</div>
      </div>
    </>
  ),
}