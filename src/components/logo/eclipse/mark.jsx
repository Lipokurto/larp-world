import React from 'react';

import markEffect from '../../../assets/mark-effect.svg';
import markClear from '../../../assets/mark-clear.svg';

import './mark.css';

export function Mark() {
  return (
    <div className='mark'>
      <div className='mark__clear'>
        <img src={markClear} alt='Mark' />
      </div>

      <div className='mark__effect'>
        <img src={markEffect} alt='Mark' />
      </div>
  </div>
  )
}