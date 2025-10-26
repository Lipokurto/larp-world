import React from 'react';

import tri from '../../../assets/triangle.svg';
import knight from '../../../assets/knight_02.png';

import s from './eclipse.module.css';

export function Eclipse(): JSX.Element {
  return (
    <div className={s.mark__container}>
      <div className={s.circle}>
        <div className={s.knight}>
          <img src={knight} alt='Knight' height={500}/>
        </div>
        <img src={tri} alt='Triangle'/>
      </div>
    </div>
  )
}