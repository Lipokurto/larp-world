import { Item } from "../type";

import s from './actions.module.css';

export const quality: Item = {
  label: 'Контроль качества',
  element:
    <>
      <div>Хозяин увеселительного заведения проверяет наличие расходных материалов у работников, качество предоставляемых услуг, составляет список необходимых закупок и обеспечивает свое заведение всем необходимым, после чего проводит демонстрацию своего заведения местному представителю гильдии торговцев.</div>
      <div className={s.label}><i>Механика</i></div>
      <ol className={s.listContainer}>
        <li>Хозяин заведения приходит к мастерскому торговцу.</li>
        <li>Мастерский торговец осматривает увеселительное заведение.</li>
        <li>Мастерский торговец изменяет или оставляет не тронутым уровень заведения.</li>
        <li>Согласно уровню заведения, устанавливается цена карту <b>"Отдых"</b>.</li>
        <li>Хозяин покупает карты <b>"Отдых"</b> для своей колоды заведения.</li>
      </ol>

      <div className={s.label}><i>Дополнительно</i></div>
      <ol className={s.listContainer}>
        <li>Карты из колоды заведения нельзя передавать другим заведениям.</li>
        <li>Чем выше уровень заведения – тем дешевле будут стоить карты <b>"Отдых"</b>.</li>
      </ol>
    </>
}