import { NavLink } from "react-router-dom";
import { Item } from "../type";

import s from './actions.module.css';

export const cannonFire: Item = {
  label: 'Выстрел пушки',
  element:
    <>
      <div>Каждый выстрел пушки расходует 1 ресурс <b>«Железной руды»</b>.</div>
      <div className={s.label}><i>Механика</i></div>
      <ol className={s.listContainer}>
        <li>Орудие снаряжается для выстрела.</li>
        <li>Перед выстрелом рвется карта <b>«Железная руда»</b>.</li>
        <li>Орудие стреляет.</li>
      </ol>

      <div className={s.label}><i>Дополнительно</i></div>
      <ol className={s.listContainer}>
        <li>Каждая использованная карта ресурса должна находиться непосредственно возле орудия.</li>
        <li>Если возле пушки нет ресурса <b>«Железная руда»</b> пушка не имеет права стрелять.</li>
        <li>Обратите внимание что ресурс <b>«Железная руда»</b> весит 1 единицу груза (см. <NavLink replace to='/rules/resources'>Ресурсы и карты</NavLink>).</li>
      </ol>
    </>
}