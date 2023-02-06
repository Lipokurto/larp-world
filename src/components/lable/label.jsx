import React from "react";

import mark from '../../assets/mark-clear.svg';

import s from './label.module.css';

export function Label({ label, left, right }) {
  return (
    <div className={s.container}>
      <div className={s.logo}>
        <img src={label} className={s.label} alt='Battle'/>

        <img src={mark} className={s.mark} alt='Battle'/>
      </div>
    </div>
  )
}