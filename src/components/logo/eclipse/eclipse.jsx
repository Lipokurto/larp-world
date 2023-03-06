import React from 'react';

import { Mark } from './mark';
import { Circle } from './circle';

import blackCircle from '../../../assets/black-circle.png';

import './eclipse.css';

export function Eclipse() {
  return (
    <>
      <div className='mark__container'>
        <Mark />
      
        <div className='black-circle'>
          <img 
            src={blackCircle} 
            alt='Mark' 
            width={475}
              />
        </div>

        <div className='circle'>
          <Circle />
        </div>
      </div>

    </>
  )
}