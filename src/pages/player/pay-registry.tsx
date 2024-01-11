import React from 'react';

import { Chapter } from "../../components";
import { NavigationPlayer } from './navigation-player';

import intro from '../../assets/icons/registration/01_intro.png'; 
import arm from '../../assets/icons/registration/02_arm.png';
import done from '../../assets/icons/registration/05_done.png';

import s from './registry.module.css';

type Steps = {
  img: string,
  label: string,
  description: JSX.Element,
};

type PayLimits = {
  timeLimit: Date,
  name: string,
  price: number,
  text: string,
};

type DiffTime = {
    days: number,
    hours: number,
    minutes: number,
    seconds: number,
};

const payLimits: PayLimits[] = [
  { timeLimit: new Date('2024-04-01T23:59:59'), name: 'Благородный', price: 3500, text: 'Взносы формирующие базис бюджета, очень важны для мастеров' },
  { timeLimit: new Date('2024-07-01T23:59:59'), name: 'Обычный', price: 4000, text: 'Взносы которые покрывают расходы бюджета' },
  { timeLimit: new Date('2024-09-11T23:59:59'), name: 'Ускоренный', price: 4500, text: 'Взносы которые позволят покрыть превышенный лимит бюджета' },
  { timeLimit: new Date('2024-10-05T23:59:59'), name: 'Горящий',price: 5000, text: 'Хочешь узнать что такое безумие?' },
];

const standardDiff = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
}

function DateConstructor(): JSX.Element {
  const [currentTime, setCurrentTime] = React.useState(new Date());
  const [diffTime, setDiff] = React.useState<DiffTime>(standardDiff);
  const [currentTimeInterval, setCurrentTimeInterval] = React.useState<PayLimits | undefined>(payLimits[0])

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    const timeItemId = setInterval(() => {
      setCurrentTimeInterval(currentTimeInterval);
    }, 1000);

    return () => { 
      clearInterval(intervalId);
      clearInterval(timeItemId);
     };
  }, [currentTimeInterval]);

  React.useEffect(() => {
    const currentInterval = payLimits.find(item => {
      const timeDifference = item.timeLimit.getTime() - currentTime.getTime();
  
      const remainingTime = {
        days: Math.floor(timeDifference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((timeDifference % (1000 * 60)) / 1000),
      };

      if (remainingTime.days >= 0 && remainingTime.hours >= 0 && remainingTime.minutes >= 0 && remainingTime.seconds >= 0) {
        setDiff(remainingTime);
        return remainingTime;
      }
    })

    setCurrentTimeInterval(currentInterval);
  }, [currentTime, currentTimeInterval]);

  const formattedDate = new Intl.DateTimeFormat('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(currentTime);

  const formattedTime = new Intl.DateTimeFormat('ru-RU', {
    hour: 'numeric',
    minute: 'numeric',
  }).format(currentTime);

  return (
    <div>
      <div>
        <div>{formattedDate}</div>
        <div>{formattedTime}</div>
      </div>
      <div>
        <div>Текущий взнос действителен еще:</div>
        <div> {`${diffTime.days} д. ${diffTime.hours} ч. ${diffTime.minutes} м.`}</div>
        {/* <div> {`${diffTime.days} д. ${diffTime.hours} ч. ${diffTime.minutes} м.`}</div> */}
      </div>

      <div>
        <div>До 01 апреля 2024 г. включительно - {payLimits[0].price} р.</div>
        <div>До 01 июля 2024 г. включительно - {payLimits[1].price} р.</div>
        <div>До 01 сентября 2024 г. включительно - {payLimits[2].price} р.</div>
        <div>С сентября и "на полигоне" - {payLimits[3].price} р.</div>
      </div>
  </div>
  )
}

const registrationSteps: Steps[] = [
  {
    img: intro,
    label: 'Ознакомление',
    description: <DateConstructor />,
  },
  {
    img: arm,
    label: 'Бронь',
    description: 
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

        <div>Заявку надо отправить* в сообщения <a href='https://vk.com/larpdarkage' target='_blank' rel="noreferrer" style={{color: 'goldenrod'}}>группы</a></div>
        
        <div>Обязательно дождитесь ответа что ваша заявка принята</div>
        <br />
        <div>
          <div>По всем вопросам допуска:</div>
          <div><a href='https://vk.com/k.le_fay' target='_blank' rel="noreferrer" style={{color: 'goldenrod'}}>Мастер по мистике и игровым предметам</a></div>
        </div>

        <br />
        <div><i>* Отправляя форму регистрации, вы соглашаетесь придерживаться правил установленных данным мероприятием</i></div>
      </div>
  },
  {
    img: done,
    label: 'Готово',
    description: 
      <div>
        <div>Ваша локация является полностью подтвержденной если:</div>
        <li>Хозяин локации прошел фотодопуск и оплатил благотворительный взноса</li>
        <li>Есть фото готовой вывески</li>
      </div>
  },
]

export function PayRegistry(): JSX.Element {
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
      <Chapter chapter='Регистрация взноса'/>

      <NavigationPlayer selectedLink='/player/regpay' />

      {renderRegSteps}
      
    </div>
  )
}