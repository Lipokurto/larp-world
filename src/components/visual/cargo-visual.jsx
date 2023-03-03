import React from 'react';

import man from '../../assets/rules/cargo/man.jpg';

import s from './cargo-visual.module.css';

export function CargoVisual() {
  return  (
    <div className={s.container}>
      <img src={man} alt='' />
    </div>
  )
}