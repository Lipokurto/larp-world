import { Item } from "../type";

import s from './actions.module.css';

export const createObsessed: Item = {
  label: 'Создать одержимого',
  element:
    <>
      <div>Чудовище может заразить труп своей плотью, которая сможет подчинить волю усопшего.</div>
      <div className={s.label}><i>Механика</i></div>
      <ol className={s.listContainer}>
        <li>Чудовище касается мертвого одержимого.</li>
        <li>Чудовище теряет 5 живых хита.</li>
        <li>Одержимый воскрешается с полным набором живых хитов.</li>
      </ol>
    </>
}