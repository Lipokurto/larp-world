import React from "react";

import battleClear from '../../../assets/battle-clear.svg';
import fog from '../../../assets/fog.svg';

import './battle.css';

export function Battle01() {
  return (
    <>
      <div className='battle__clear'>
        <img src={battleClear} alt='Battle' />
      </div>

      <div className='fog__clear'>
        <img src={fog} alt='Fog'/>
      </div>
    </>
  )
}