import React from 'react';

import { Chapter, NavigationPlayer } from '../../components';

import intro from '../../assets/icons/registration/01_intro.png';
import arm from '../../assets/icons/registration/02_arm.png';
import done from '../../assets/icons/registration/05_done.png';
import { useAppSelector } from '../../redux/hooks';

import s from './registry.module.css';

type Steps = {
  img: string,
  label: string,
  description: JSX.Element,
};

function RegSteps(): JSX.Element {
  const { locations, buildings } = useAppSelector((state) => state.appData);

  const rolesTable = React.useMemo(() => {
    return (
      <>
        <a href='https://docs.google.com/spreadsheets/d/10qtHRKDqcJN79-8Ef9Kjys25EFVoEp_bvDABDTudrRA/edit?usp=sharing' target='_blank' rel="noreferrer" style={{ color: 'goldenrod' }}>
          Таблица лимитов локаций
        </a>
      </>
    )
  }, []);

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
            <div><b>Тип строения: </b><i>Экономическая постройка, постройка для отдыха, коммерческая постройка{}</i></div>
              <h3 style={{ display: 'flex' }}>Список всех доступных строений ({rolesTable})</h3>
              <div className={s.listTableContainer}>
                {buildings.map(p => <div key={p.id} className={s.tableElement}>{p.type}</div>)}
              </div>
            <div><b>Название строение: </b><i>Принимаются только русскоязычные названия</i></div>
            <div><b>Локация: </b><i>где строение будет расположена (квартал или определенный лагерь)</i></div>
              <h3 style={{ display: 'flex' }}>Список всех доступных локаций</h3>
              <div className={s.listTableContainer}>
                {locations.filter(p => p.type !== 'SECRET').map(p => <div key={p.id} className={s.tableElement}>{p.name}</div>)}
              </div>
            <div><b>Хозяин (ВК): </b><i>Ссылка на хозяина в соц сетях.</i></div>
            <div><b>Хозяин (ФИО): </b><i> ФИО игрока. Игровое имя персонажа</i></div>
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
          <div>Ваше строение полностью подтвержденным если:</div>
          <li>Хозяин строения прошел фотодопуск и оплатил благотворительный взноса</li>
          <li>Есть фото готовой вывески</li>
        </div>
      ),
    },
  ]

  return (
    <>
      {registrationSteps.map(p => {
        return (
          <div className={s.item} key={p.label}>
            <div className={s.labelContainer}>
              <img src={p.img} alt='' width={100}/>
              <div className={s.itemLabel}>{p.label.toUpperCase()}</div>
            </div>

            <div className={s.descContainer}>{p.description}</div>
          </div>
        )
      })}
    </>
  )
}

export function BuildingRegistry(): JSX.Element {
  return (
    <div className={s.container}>
      <Chapter chapter='Регистрация строения'/>

      <NavigationPlayer selectedLink='/player/regbuild' />

      <RegSteps />
    </div>
  )
}