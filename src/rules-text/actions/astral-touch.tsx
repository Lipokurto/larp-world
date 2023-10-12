import { Item } from "../type";

import s from './actions.module.css';

export const astralTouch: Item = {
  label: 'Влияние астрала',
  element:
    <>
      <div>Подземелье изменяется из-за глубинного влияния астрала.</div>
      <div className={s.label}><i>Механика</i></div>
      <ol className={s.listContainer}>
        <li>Хозяин останавливает работу подземелья.</li>
        <li>Подземелье изменяетс вою конфигурацию или логику повествования.</li>
        <li>Хозяин подземелья приглашает мастера на смотр новой конфигурации.</li>
        <li>Мастер оценивает и выдает некоторое количество карт в колоду.</li>
      </ol>
    </>
}