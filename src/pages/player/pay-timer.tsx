import React from 'react';

import {
  DiffTime, PayLimits, payLimits,
  standardDiff,
} from '../../components/chapter/timer/timer';

import s from './registry.module.css';

export function PayTimer(): JSX.Element {
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

  const renderPrice = React.useMemo(() => {
    const currentIndex = payLimits.findIndex(p => currentTimeInterval?.price === p.price);

    return (
      <div className={s.prices}>
        <div className={currentIndex === 0 ? s.priceActive : s.price}>До 01 мая 2026 г. - {payLimits[0].price} р.</div>
        <div className={currentIndex === 1 ? s.priceActive : s.price}>До 01 августа 2026 г. - {payLimits[1].price} р.</div>
        <div className={currentIndex === 2 ? s.priceActive : s.price}>До 01 октября 2026 г. - {payLimits[2].price} р.</div>
        <div className={currentIndex === 3 ? s.priceActive : s.price}>"на полигоне" - {payLimits[3].price} р.</div>
      </div>
    )
    // return (
    //   <div>ОЖИДАЙТЕ ОБНОВЛЕНИЯ</div>
    // )
  }, [currentTimeInterval?.price]);

  return (
    <div>
      <div style={{ padding: 10 }}>
        <div style={{ color: 'wheat' }}>Текущий взнос действителен еще:</div>
        <div style={{ fontSize: 20, fontWeight: 'bold' }}> {`${diffTime.days} д. ${diffTime.hours} ч. ${diffTime.minutes} м.`}</div>
      </div>

    {renderPrice}

    <div style={{ paddingTop: 10 }}>
      <div>Игротехи сдают 50% взноса.</div>
      <div>Переносить взносы разрешается до 13 сентября 2026 г.</div>
    </div>
  </div>
  )
}