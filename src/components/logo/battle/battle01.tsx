import React from "react";

import battleClear from '../../../assets/battle_clear.svg';

import './battle.css';

export function Battle01(): JSX.Element {
  return (
    <div className='battle__clear'>
      <img src={battleClear} alt='Battle' />
    </div>
  )
}