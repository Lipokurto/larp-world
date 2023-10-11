import { Item } from "../type";

import s from './actions.module.css';

export const healObsessed: Item = {
  label: 'Излечить одержимого',
  element:
    <>
      <div>Чудовище имеет возможность вылечить одержимого, подарив ему еще больше своей плоти.</div>
      <div className={s.label}><i>Механика</i></div>
      <ol className={s.listContainer}>
        <li>Чудовище касается раненого одержимого.</li>
        <li>Чудовище теряет 2 живых хита.</li>
        <li>Одержимый полностью восстанавливает свои хиты.</li>
      </ol>
      <div><i>Дополнительно</i>: лечение происходит мгновенно.</div>
    </>
}