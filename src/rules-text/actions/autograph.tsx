import { Item } from "../type";

import s from './actions.module.css';

export const autograph: Item = {
  label: 'Автограф',
  element:
    <>
      <div>Доступно только роли "Артист"</div>
      <div>Артист может подарить своему поклоннику автограф, снизив тем самым ему стресс</div>
      <div className={s.label}>Механика:</div>
      <div className={s.listContainer}>
        <li>Игрок просит артиста поставить ему автограф и даем ему свой ДК</li>
        <li>Если артист пожелает он убирает часть стресса игроку</li>
        <li>Артист возвращает ДК игроку</li>
      </div>

      <div className={s.label}>Дополнительно:</div>
      <div className={s.listContainer}>
        <li>Артист вправе сам решать кому автограф давать или нет</li>
      </div>
    </>
}