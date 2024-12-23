import React from 'react';

import './nav-button.css';

type Props = {
  text: string,
  onclick: () => void,
}

export function NavButton({ text, onclick }: Props): JSX.Element {
  return (
    <button className='btn effect' onClick={onclick}><span>{text}</span></button>
  )
}