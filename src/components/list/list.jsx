import React from 'react';
import { Link } from 'react-router-dom';

import s from './list.module.css';

export function List(props) {
  return (
    <div className={s.container}>
      {props.list.map((p) => {
        return (
          <Link 
            to={`${props.link}${p.link}`} 
            key={p.label} 
            className={s.item} 
            onClick={() => props.setIsOpen(false)}
          >
            <span className={s.label}>{p.label}</span>
            <br />
          </Link>
        )
      })}
    </div>
  )
}