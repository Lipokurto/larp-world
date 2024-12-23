import React from 'react';

import mark from '../../assets/mark-clear.svg';

import s from './label.module.css';

type Props = {
  label: string,
}

export function Label(props: Props): JSX.Element {
  return (
    <div className={s.container}>
      <div className={s.logo}>
        <img src={props.label} className={s.label} alt='Battle'/>

        <img src={mark} className={s.mark} alt='Battle'/>
      </div>
    </div>
  )
}