import React from 'react';

import { Chapter, InjuryContainer } from '../../../components';

import {
  bleed, dyspnea, exhaustion,
  foot, hand, migraine,
} from '../../../rules-text/items';

import s from './injury.module.css';

const injuries = [bleed, dyspnea, exhaustion, foot, hand, migraine];

export function Injury(): JSX.Element {
  const cardsList = React.useMemo(() => {
    return (
      <div className={s.resContainer}>
        {injuries.map((p) => {
          return (
            <div className={s.resItem}>
              <InjuryContainer
                label={p.label}
                icon={p.icon}
                text={p.element}
              />
            </div>
          )
        })}
      </div>
    )
  }, []);

  return (
    <>
      <div className={s.container}>
        <Chapter chapter='Травмы и поломки' />
        <div>В ходе игры ваш персонаж может получить травму или поломать свое снаряжение.</div>
        <div className={s.label}>Общее</div>
        <ol className={s.listContainer}>
          <li>Травмы и поломки никак не маркируются.</li>
          <li>Можно применять только перечисленные в этом разделе травмы и поломки.</li>
          <li>Травмы и поломки никак не изменяют количество живых или броневых хитов.</li>
          <li>Травмы или поломки применяются ТОЛЬКО после отыгрыша их нанесения.</li>
          <li>Отыгрыш нанесения травмы должен соответствовать общим понятиям безопасности.</li>
          <li>Травмы действуют до тех пор, пока не будут вылечены <b>«Медкомплектом»</b> или врачом.</li>
          <li>Поломки действуют до тех пор, пока не будут исправлены <b>«Ремкомплектом»</b> или кузнецом.</li>
          <li>Травмы и поломки не сохраняются после мертвяка.</li>
          <li>Внешнее отображение травмы или поломки остается на откуп игроков и не является обязательным.</li>
          <li>Отыгрыш следствия травмы или поломки – обязателен.</li>
          <li>Травмы могут накапливаться, при этом каждая из них лечиться отдельными <b>«Медкомплектом»</b>, а время пребывания в госпитале суммируется 15 минут на каждую травму.</li>
          <li>Все травмы или поломки могут наноситься только вне боевой ситуации.</li>
        </ol>
        <br/>
        <div className={s.label}>Список доступных травм</div>
        <div>{cardsList}</div>
        <br/>

        <div className={s.label}>Поломки</div>
        <div>
          Поломки могут быть применены только по отношению к оружию игрока или щитам. Вредитель должен встречено указать на оружие, которое желает поломать и отыграть его вывод из строя, не портя реальный антураж. Игрокжертва после этого забирает свое оружие и не имеет права применять его в бою.
        </div>

        <div>
          <i>Примечание:</i> Следует заметить, что для убедительного отыгрыша поломки оружия вредитель должен обладать соответствующим инвентарем, т.е. поломать двуручный молот «об колено» вряд ли будет убедительным поводом к поломке. Чтоб поломать щит понадобиться костер и какое-то время.
        </div>
        <div>
        Пушки не подвергаются поломке в поле.
        </div>
      </div>
    </>
  )
}