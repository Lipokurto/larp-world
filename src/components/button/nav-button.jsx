import React from 'react';

import './nav-button.css';

export function NavButton({ text, onclick }) {
  return (
    <button className='btn effect' onClick={onclick}><span>{text}</span></button>
  )
} 