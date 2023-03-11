import React from 'react';

import s from './link-button.module.css';

type Props = {
  text: string,
  onclick: () => void,
}

export function LinkButton({ text, onclick }: Props) {
  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a 
      onClick={onclick}
      className={s.link}
    >
      {text}
    </a>
  )
} 