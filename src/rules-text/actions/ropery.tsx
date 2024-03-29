import { Item } from "../type";

import s from './actions.module.css';

export const ropery: Item = {
  label: 'Разграбить сокровищницу',
  element:
    <>
      <div>Игрок проникает в сокровищницу апостола и ворует оттуда все имеющиеся ресурсы.</div>
      <div className={s.label}><i>Механика</i></div>
      <ol className={s.listContainer}>
        <li>Игрок добирается до сокровищницы чудовища.</li>
        <li>Игрока использует <b>"Ремкомплект"</b> И карту <b>"Воровства"</b>.</li>
        <li>Внутри сокровищницы будет находится головоломка, которую необходимо решить грабителям.</li>
        <li>После вскрытия, игрок забирает все находящиеся ресурсы в сокровищнице.</li>
        <li>Кладет на их место использованные карты <b>"Ремкомплекта"</b>, <b>"Воровства"</b> и решенную головоломку.</li>
        <li>Покидает сокровищницу.</li>
      </ol>

      <div className={s.label}><i>Дополнительно</i></div>
      <ol className={s.listContainer}>
        <li>При разграблении особое внимание следует уделить весу предметов и возможности их переносить.</li>
        <li>Если игрок не смог решить головоломку (грабителя атаковали, или он покинул территорию логова), то процесс вскрытия считается сорванным, придется тратить ресурсы повторно.</li>
        <li>Забирать с собой головоломку запрещено.</li>
      </ol>
    </>
}