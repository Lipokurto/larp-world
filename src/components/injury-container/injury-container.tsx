import React from "react";

import s from './injury-container.module.css';

type Props = {
  label: string,
  text: JSX.Element,
  icon?: string,
}

export function InjuryContainer({ label, icon, text }: Props) {
  return (
    <div className={s.container}>
      <div className={s.label}>{label}</div>
      <img src={icon} alt='' width={75} height={75}/>
      <div>{text}</div>
    </div>
  )
}