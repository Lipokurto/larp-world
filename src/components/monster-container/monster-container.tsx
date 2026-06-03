import React from 'react';

import { useResize } from '../utils/use-resize';

import s from './monster-container.module.css';

type Props = {
  text: JSX.Element,
  icon: string,
  damage: string,
  hits: string,
  special?: string,
}

export function MonsterContainer({ icon, text, damage, hits, special }: Props): JSX.Element {
  const { width } = useResize();

  return (
    <div className={s.container}>
      <img src={icon} alt='' width={width < 1024 ? 350 : 500}/>
      <div><i>Тип атаки:&ensp;</i><span style={{ color: damage === 'Особое оружие' ? 'red' : 'white' }}>{damage}</span></div>
      <div><i>Живучесть:&ensp;</i><span style={{ color: hits === 'Высокая' ? 'red' : 'white' }}>{hits}</span></div>

      {special && (
        <div><i>Особенность:&ensp;</i><span style={{ color: 'orange' }}>{special}</span></div>
      )}

      <br />
      <div>{text}</div>
    </div>
  )
}