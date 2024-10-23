import React from "react";

import battleEyes from '../../../assets/battle-eyes.svg';
import battleEffect from '../../../assets/battle-monster-clear.svg';

import './battle.css';

export function Battle02(): JSX.Element {
  return (
    <>
      <div className='battle__effect'>
        <img src={battleEyes} className='eyes' alt='Eyes' />
        <img src={battleEffect} className='monster' alt='Battle' />
      </div>
    </>
  )
}