import React from 'react';

import { Chapter, NavigationPlayer } from '../../components';

import intro from '../../assets/icons/registration/01_intro.png';
import arm from '../../assets/icons/registration/02_arm.png';
import concept from '../../assets/icons/registration/03_concept.png';
import photo from '../../assets/icons/registration/04_photo.png';
import script from '../../assets/icons/registration/04_script.png';
import donation from '../../assets/icons/registration/05_donation.png';

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
        <div>Ознакомьтесь с <a href='https://docs.google.com/spreadsheets/d/1l5G5-vJ56_ibip1hng414RTNg3HXjJtS7RmQ0ACPdvE/edit?usp=sharing' target='_blank' rel="noreferrer" style={{ color: 'goldenrod' }}>таблицей ролей</a></div>
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
          <div><b>ФИО: </b><i>Свое реальное ФИО</i></div>
          <div><b>Имя персонажа: </b><i>Имя своего игрового персонажа</i></div>
          <div><b>Профиль в соц сетях: </b><i>Ссылка на ваш профиль в соц сетях для обратной связи</i></div>
          <div><b>Роль: </b><i>Роль вашего персонажа</i></div>
          <div><b>Локация: </b><i>Название отряда наемников или название локации в городе</i></div>
        </div>

        <div>Некоторые роли могут быть заняты, поэтому не затягивайте с подачей заявки</div>
        <div>Заявку надо отправить* в сообщения <a href='https://vk.com/larpdarkage' target='_blank' rel="noreferrer" style={{ color: 'goldenrod' }}>группы</a></div>

        <div>Обязательно дождитесь ответа что ваша заявка принята</div>
        <br />
        <div><i>* Отправляя форму регистрации, вы соглашаетесь придерживаться правил установленных данным мероприятием</i></div>
      </div>
    ),
  },
  {
    img: concept,
    label: 'Концепт',
    description: (
      <div>
        <div>Обсудите внешний вид своего персонажа с <a href='https://vk.com/id245595011' target='_blank' rel="noreferrer" style={{ color: 'goldenrod' }}>мастером по допуску антуража</a></div>
        <div></div>
      </div>
    ),
  },
  {
    img: script,
    label: 'Сюжет',
    description: (
      <div>
        <div>Исходя из вашей роли вас можно будет вписать в общий сюжет (это необязательный пункт)</div>
        <div><a href='https://vk.com/ho3gp9i' target='_blank' rel="noreferrer" style={{ color: 'goldenrod' }}>Мастер по сюжету</a></div>
      </div>
    ),
  },
  {
    img: photo,
    label: 'Фотодопуск',
    description: (
      <div>
        <div>Для окончательного подтверждения вашей заявки вам требуется пройти обязательный фотодопуск</div>
        <div>Отправьте фото своего полного костюма в "Сообщения группы" с указанием своего ФИО</div>
        <div>Дождитесь подтверждения или комментария о возможных доработках</div>
      </div>
    ),
  },
  {
    img: donation,
    label: 'Взнос',
    description: (
      <div>
        <div>Для участия в мероприятии необходимо внести благотворительный взнос</div>
        <div><a href='https://larpdarkage.ru/player/regpay' target='_blank' rel="noreferrer" style={{ color: 'goldenrod' }}>Как сделать взнос</a></div>
      </div>
    ),
  },
]

export function PlayerRegistry(): JSX.Element {
  const renderRegSteps = React.useMemo(() => {
    return registrationSteps.map(p => {
      return (
        <div className={s.item} key={p.label}>
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
      <Chapter chapter='Регистрация игрока'/>

      <NavigationPlayer selectedLink='/player/registration' />

      <div>Регистрация является ОБЯЗАТЕЛЬНЫМ условием участия на мероприятии</div>

      {renderRegSteps}

    </div>
  )
}