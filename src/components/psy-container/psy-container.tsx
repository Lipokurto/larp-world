import React from 'react';

import icon from '../../assets/rules/psy/psy.png'

import s from './psy-container.module.css';

type Props = {
  label: string,
  psyLevel?: number,
  desc: JSX.Element,
}

export function PsyContainer({ label, psyLevel, desc }: Props): JSX.Element {
  return (
    <div className={s.container}>
      <div className={s.subContainer}>
        <img src={icon} alt='' width={150}/>
        <div className={s.label}>{label}</div>
        <div>Уровень {psyLevel}</div>
      </div>
      <div className={s.desc}>{desc}</div>
    </div>
  )
}