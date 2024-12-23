import React from 'react';

import { Chapter, NavigationPlayer } from '../../components';
import { PayTimer } from './pay-timer';

import time from '../../assets/icons/registration/0201_time.png';
import coin from '../../assets/icons/registration/0202_coin.png';
import message from '../../assets/icons/registration/0203_message.png';
import check from '../../assets/icons/registration/0204_checkList.png';

import s from './registry.module.css';

type Steps = {
  img: string,
  label: string,
  description: JSX.Element,
};

const registrationSteps: Steps[] = [
  {
    img: time,
    label: 'Периоды',
    description: <PayTimer />,
  },
  {
    img: coin,
    label: 'Оплата',
    description: (
      <div>
        <div>Оплата благотворительного взноса осуществляется по номеру телефона</div>

        <div className={s.request}>
          <div style={{ fontSize: 20, color: 'wheat' }}>+79787917870</div>
          <div>Синицкий Александр Анатольевич</div>
          <div>РНКБ / СберБАНК</div>
        </div>

        <div>Взносы не возвращаются</div>
        <div>Взносы можно передавать лично <a href='https://vk.com/id245595011' target='_blank' rel="noreferrer" style={{ color: 'goldenrod' }}>координатору</a></div>
      </div>
    ),
  },
  {
    img: message,
    label: 'Данные',
    description: (
      <div>
        <div>В личном сообщении написать <a href='https://vk.com/id245595011' target='_blank' rel="noreferrer" style={{ color: 'goldenrod' }}>координатору</a></div>

        <div>В сообщении указать:</div>
        <div className={s.request}>
          <div>ФИО отправителя платежа</div>
          <div>Сумма</div>
          <div>Город и ФИО игроков, за которых оплачен взнос</div>
          <div>Скрин платежа</div>
        </div>
      </div>
    ),
  },
  {
    img: check,
    label: 'Списки',
    description: (
      <div>
        <div><a href='https://vk.com/topic-221551368_49748461' target='_blank' rel="noreferrer" style={{ color: 'goldenrod' }}>Список всех сдавших</a></div>
        <i>Списки обновляются не моментально</i>
      </div>
    ),
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