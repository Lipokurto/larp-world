import React from "react";

import dividerLeft from '../../assets/icons/divider-left.svg';
import dividerRight from '../../assets/icons/divider-right.svg';

import s from './chapter.module.css';

export function Chapter(props) {
  return (
    <div className={s.chapter_container}>
      <div className={s.divider}>
        <img src={dividerLeft} alt='Divider' width='150'/>
      </div>

      <h1 className={s.chapter}>{props.chapter}</h1>

      <div className={s.divider}>
        <img src={dividerRight} alt='Divider' width='150'/>
      </div>
    </div>
  )
}