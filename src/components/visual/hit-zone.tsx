import React from "react";

import s from './hit-zone.module.css';

type Props = {
  src: string,
}

export function HitZone({src}: Props): JSX.Element {
  return (
    <div>
      <b>Обязательные зоны защиты</b>
      <div>Минимально допустимая поверхность которая должна быть защищена</div>
      <br />
      <b>Не обязательные зоны защиты</b>
      <div>Зоны которые рекомендованы к защите с целью уменьшения травматичности</div>
      <div className={s.image}>
        <img src={src} alt='' width='300' />
      </div>
    </div>
  )
}