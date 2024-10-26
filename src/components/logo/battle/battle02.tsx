import React from "react";

import battleEffect from '../../../assets/battle_clear_back.svg';

import './battle.css';

export function Battle02(): JSX.Element {
  return (
    <div className='battle__effect'>
      <img src={battleEffect} className='monster' alt='Battle' />
    </div>
  )
}