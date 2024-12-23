import React from 'react';

import s from './item-container.module.css';

type Props = {
  item: string,
  weight?: number,
  icon?: string,
}

export function ItemContainer({ item, weight, icon }: Props): JSX.Element {
  return (
    <div className={s.container}>
      <div className={s.label}>{item}</div>
      {icon ? <img src={icon} alt='' width={75} height={75}/> : null}
      <div>{weight === 1 ? 'Весит 1' : 'Не имеет веса' }</div>
    </div>
  )
}