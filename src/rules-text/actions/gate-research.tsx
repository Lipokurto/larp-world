import { Item } from "../type";

import s from './actions.module.css';

export const gateResearch: Item = {
  label: 'Архитектурное исследование',
  element:
    <>
      <div>На воротах не будет маркера текущего состояния очков прочности, и при изменении прочности мастер так же будет оглашать их.</div>
      <div>Единственным гарантированным способом узнать текущее состояние прочности ворот – провести исследование.</div>
      
      <div className={s.label}>Механика</div>
      <ol className={s.listContainer}>
        <li>Исследователи заявляют мастеру что хотят провести исследование.</li>
        <li>Игроки в течении короткого или не очень (минимум 15 минут) активно отыгрывают исследование ворот, составление чертежей, изучение и так далее.</li>
        <li>По истечению времени мастеру предоставляются схематические зарисовки ворот.</li>
        <li>Мастер оценивает три составляющие: время отыгрыша, качество отыгрыша, качество чертежей, количество участвующих.</li>
        <li>Мастер выдает сведенья о состоянии ворот подписывая чертежи диапазоном, точность которого зависит от выше перечисленных факторов, чем лучше было проведено исследование – тем точнее будут данные.</li>
        <li>Если диапазон не устраивает исследователей они могут либо провести повторное исследование, либо «докупить точность» игровой валютой, считается что вы использовали более качественные материалы.</li>
      </ol>
    </>
}