import React from 'react';

import { Chapter, NavigationPlayer } from '../../components';

import intro from '../../assets/icons/registration/01_intro.png';
import arm from '../../assets/icons/registration/02_arm.png';
import done from '../../assets/icons/registration/05_done.png';

import s from './registry.module.css';

type Steps = {
  img: string,
  label: string,
  description: JSX.Element,
};

const registrationSteps: Steps[] = [
  {
    img: intro,
    label: 'Введение',
    description: (
      <div>
        <div>Ознакомьтесь с <a href='https://larpdarkage.ru/rules/general' target='_blank' rel="noreferrer" style={{ color: 'goldenrod' }}>правилами мероприятия</a></div>
        <div>Ознакомьтесь с <a href='https://larpdarkage.ru/rules/location' target='_blank' rel="noreferrer" style={{ color: 'goldenrod' }}>правилами локации</a></div>
      </div>
    ),
  },
  {
    img: arm,
    label: 'Бронь',
    description: (
      <div>
        <div>Заполните свою заявку согласно шаблону:</div>

        <div className={s.request}>
          <div><b>Тип локации: </b><i>Экономическая постройка, постройка для отдыха, коммерческая постройка</i></div>
          <div><b>Название локации: </b><i>Принимаются только русскоязычные названия</i></div>
          <div><b>Местоположение: </b><i>где локация будет расположена (город или определенный лагерь наемников)</i></div>
          <div><b>Вывеска: </b><i>Концепт вывески</i></div>
          <div><b>Хозяин: </b><i>Ссылка на хозяина в соц сетях. ФИО игрока. Игровое имя персонажа</i></div>
          <div><b>Инвентарь: </b><i>Что в общих чертах планируется в локации</i></div>
          <div><b>Работники: </b><i>Общее количество работников</i></div>
        </div>

        <div>Заявку надо отправить* в сообщения <a href='https://vk.com/larpdarkage' target='_blank' rel="noreferrer" style={{ color: 'goldenrod' }}>группы</a></div>

        <div>Обязательно дождитесь ответа что ваша заявка принята</div>
        <br />
        <div>
          <div>По всем вопросам допуска:</div>
          <div><a href='https://vk.com/k.le_fay' target='_blank' rel="noreferrer" style={{ color: 'goldenrod' }}>Мастер по мистике и игровым предметам</a></div>
        </div>

        <br />
        <div><i>* Отправляя форму регистрации, вы соглашаетесь придерживаться правил установленных данным мероприятием</i></div>
      </div>
    ),
  },
  {
    img: done,
    label: 'Готово',
    description: (
      <div>
        <div>Ваша локация является полностью подтвержденной если:</div>
        <li>Хозяин локации прошел фотодопуск и оплатил благотворительный взноса</li>
        <li>Есть фото готовой вывески</li>
      </div>
    ),
  },
]

export function LocationRegistry(): JSX.Element {
  const renderRegSteps = React.useMemo(() => {
    return registrationSteps.map(p => {
      return (
        <div className={s.item}>
          <div className={s.labelContainer}>
            <img src={p.img} alt='' width={100}/>
            <div className={s.itemLabel}>{p.label.toUpperCase()}</div>
          </div>

          <div className={s.descContainer}>{p.description}</div>
        </div>
      )
    })
  }, []);

  return (
    <div className={s.container}>
      <Chapter chapter='Регистрация локации'/>

      <NavigationPlayer selectedLink='/player/reglocation' />

      {renderRegSteps}

    </div>
  )
}