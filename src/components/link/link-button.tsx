import React from 'react';

import s from './link-button.module.css';

type Props = {
  text: string,
  onclick: () => void,
}

export function LinkButton({ text, onclick }: Props) {
  return (
    <a 
      onClick={onclick}
      className={s.link}
    >
      {text}
    </a>
  )
} 