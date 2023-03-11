import React from "react";

import battleEffect from '../../../assets/battle-effect.svg';

import './battle.css';

export function Battle02(): JSX.Element {
  return (
    <>
      <div className='battle__effect'>
        <img src={battleEffect} alt='Battle' />
      </div>
    </>
  )
}