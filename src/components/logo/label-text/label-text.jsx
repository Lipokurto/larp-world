import React from "react";

import blood from '../../../assets/blood.svg';

import s from './label-text.module.css';

export function LabelText() {
  return (
    <div>
      <img className={s.blood} src={blood} alt="Blood" />

      <span className={s.labelText}>Темные<br />века</span>

      <span className={s.labelSubtext}>полевая ролевая игра</span>
    </div>
  )
}