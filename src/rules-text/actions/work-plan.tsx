import { Item } from "../type";

import s from './actions.module.css';

export const workPlan: Item = {
  label: 'План работ',
  element:
    <>
      <div>Бригадир закладывает определенное количество финансов для предстоящих работ. Исходя из заложенных финансов и качества локации, локация получает ресурсы.</div>
      <div className={s.label}><i>Механика</i></div>
      <ol className={s.listContainer}>
        <li>У ресурсной локации должен быть определен уровень качества (1-5).</li>
        <li>Бригадир берет определенное количество денег.</li>
        <li>Исходя из качества локации и количества принесенных денег, определяется количество ресурсов.</li>
        <li>Через 2 часа бригадиру выдается это количество ресурсов.</li>
      </ol>

      <div className={s.label}><i>Условия срыва</i></div>
      <div className={s.listContainer}>
        <li>Бригадир перешел в состояние <b>"Мертв"</b>.</li>
        <li>Бригадир покинул город.</li>
        <li>В какой-то момент на локации не находилось никого из игроков.</li>
        <li>Бригадир лично не явился забирать ресурсы (или опоздал на получение ресурсов более чем на <b>30 минут</b>).</li>
      </div>

      <div className={s.label}><i>Дополнительно</i></div>
      <div className={s.listContainer}>
        <li>Уровень качества локации может меняться из-за ее состояния, на текущий момент.</li>
      </div>
    </>
}