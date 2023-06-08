import { Chapter } from '../../components';

import s from './tech.module.css';

export function Tech(): JSX.Element {
  return (
    <div className={s.container}>
      <Chapter chapter='Технические долги' />
        <div>Это технический раздел подготовки игры, если вы попали случайно, то не на что тут смотреть</div>
      <div className={s.label}>Для игрока</div>
      <div className={s.listContainer}>
        <div>Документ игрока</div>
        <div>Повязка "Мертв"</div>
        <div>Повязка "Лечение"</div>
        <div>Повязка "Ремонт"</div>
      </div>

      <div className={s.label}>Для интендантов</div>
      <div className={s.listContainer}>
        <div>Повязка "Интендант"</div>
        <div>Распечатанные правила</div>
        <div>Распечатка обязанностей интенданта</div>
        <div>Распечатка таблицы снабжения</div>
        <div>Распечатка списка контактов</div>
        <div>Распечатка карты местности</div>
        <div>Тряпки для вышивания в госпиталь</div>
        <div>Доски с гвоздями и проволкой в кузницу</div>
        <div>рация</div>
        <div>Часы</div>
        <div>Ручка блокнот (идеально если с лого проекта, но как получится)</div>
        <div>Распечатка заявленных игроков</div>
      </div>

      <div className={s.label}>Типография</div>
      <div className={s.listContainer}>
        <div>Документ игрока</div>
        <div>Карты статуса</div>
        <div>Карты навыков</div>
        <div>Карты ресурсов</div>
        <div>наклейки рейтингов строений</div>
      </div>

      <div className={s.label}>Электроника</div>
      <div className={s.listContainer}>
        <div>Рации</div>
        <div>Автоматические кармушки</div>
        <div>Ноутбук</div>
      </div>

      <div className={s.label}>Строяк</div>
      <div className={s.listContainer}>
        <div>Антураж шахт</div>
        <div>Столбики для разметки пути на полигон</div>
        <div>Столбы для лагерей с указанием сбора людей на штурм</div>
      </div>

      <div className={s.label}>Пиротехника</div>
      <div className={s.listContainer}>
        <div>Карсные дымы</div>
        <div>Зеленые дымы</div>
        <div>еще какой-нить цвет дымы</div>
      </div>
    </div>
  )
}