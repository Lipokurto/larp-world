import { Item } from "../type";

import s from './actions.module.css';

export const loot: Item = {
  label: 'Обыск',
  element:
    <>
      <div className={s.label}>Быстрый обыск</div>
      <ol className={s.listContainer}>
        <li>Игрок-сыщик заявляет обыск.</li>
        <li>Обысканный игрок должен немедленно выдать все предметы из своего паспорта игрока.</li>
      </ol>

      <div className={s.label}>Полный обыск</div>
      <ol className={s.listContainer}>
        <li>Игрок-сыщик заявляет обыск.</li>
        <li>Игрок-сыщик отыгрывает обыск игрока в течении 5 минут.</li>
        <li>Обысканный игрок должен немедленно выдать ВСЕ игровые предметы и деньги, которые находятся у него в данный момент.</li>
      </ol>
    </>
}