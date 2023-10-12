import React from "react";

import s from './role-container.module.css';

type Props = {
  item: string,
  desc?: string,
  player?: string,
}

export function RoleContainer({ item, desc, player }: Props) {
  return (
    <div className={s.container}>
      <div className={s.subContainer}>
        <div className={s.label}>{item}</div>
        <div style={{opacity: 0.75}}>{player}</div>
      </div>
      <div><i>{desc}</i></div>
    </div>
  )
}