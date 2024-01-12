import React from 'react';

import { DiffTime, playTime, standardDiff } from './timer';
import eclipseIcon from '../../../assets/icons/eclipse-icon.png';

import s from './timer.module.css';

type Props = {
  isActive: boolean,
}

export function GlobalTimer(props: Props): JSX.Element {
  const [currentTime, setCurrentTime] = React.useState(new Date());
  const [diffTime, setDiff] = React.useState<DiffTime>(standardDiff);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  React.useEffect(() => {
    const timeDifference = playTime.getTime() - currentTime.getTime();

    const remainingTime = {
      days: Math.floor(timeDifference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((timeDifference % (1000 * 60)) / 1000),
    };

    setDiff(remainingTime);
  }, [currentTime]);

  const formattedDate = new Intl.DateTimeFormat('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(currentTime);

  const formattedTime = new Intl.DateTimeFormat('ru-RU', {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  }).format(currentTime);

  const renderDate = React.useMemo(() => (
    <div className={s.upTimeLeft}>
      <div style={{color: 'wheat'}}>Сегодня</div>
      <div style={{fontSize: 20, fontWeight: 'bold'}}>{formattedDate}</div>
    </div>
  ), [formattedDate]);

  const renderTime = React.useMemo(() => (
    <div className={s.upTimeRight}>
      <div style={{color: 'wheat'}}>Время</div>
      <div style={{fontSize: 20, fontWeight: 'bold'}}>{formattedTime}</div>
    </div>
  ), [formattedTime]);

  const renderDiff = React.useMemo(() => (
    <div className={s.upTimeBottom}>
      <div style={{color: 'wheat'}}>До мероприятия осталось</div>
      <div style={{fontSize: 20, fontWeight: 'bold'}}>{`${diffTime.days}д. ${diffTime.hours}ч. ${diffTime.minutes}м. ${diffTime.seconds}с.`}</div>
    </div>
  ), [diffTime.days, diffTime.hours, diffTime.minutes, diffTime.seconds]);

  return (
    <div>
      <div className={s.timeContainer}>
        {props.isActive ? renderDate : null}

        <img src={eclipseIcon} width={100} className={props.isActive ? s.activeImg : s.passiveImg}alt='' />

        {props.isActive ? renderTime : null}
      </div>

      {props.isActive ? renderDiff : null}
    </div>
  )
}