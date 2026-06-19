import React from 'react';

import s from './activities-container.module.css';

type Props = {
  label: JSX.Element,
  icon: string,
  description: string,
  mechanic: JSX.Element,
  loot: string,
  risk: string,
}

export function ActivitiesContainer({ icon, label, description, mechanic, loot, risk }: Props): JSX.Element {

  return (
    <div className={s.container}>
      <div className={s.label}>{label}</div>
      <img src={icon} alt='' width={300}/>
      <div className={s.description}>{description}</div>
      <div><i>Механика:</i></div>
      <div className={s.mechanic}>{mechanic}</div>
      <div><i>Возможная добыча:&ensp;</i>{loot}</div>
      <div><i>Риск:&ensp;</i>{risk}</div>
    </div>
  )
}