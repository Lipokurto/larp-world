import React from 'react';

import { Chapter } from '../../../components';

import bes from '../../../assets/monsters/bes_01.png';
import bone from '../../../assets/monsters/bone_01.png';
import chimer from '../../../assets/monsters/chimer_01.png';
import cursed from '../../../assets/monsters/cursed.png';
import notDead from '../../../assets/monsters/not_dead_01.png';
import knight from '../../../assets/monsters/knight_01.png';

import { MonsterContainer } from '../../../components/monster-container/monster-container';

import s from './monsters.module.css';

const monstersList = [
  {
    label: 'Бес',
    icon: bes,
    text: 'Дикое существо, которое нападает на одиноких и не только путников. Поговаривают, что его можно отпугнуть криками большой толпы или попробовать договориться с ним, но это не всегда работает.',
    damage: 'Особое оружие',
    hits: 'Высокая',
  },
  {
    label: 'Клан кости',
    icon: bone,
    text: 'Скрытный клан дикарей-одиночек. Кто они и в чём их цель — никто не знает, но одно известно наверняка: если вы встретили такого воина, лучше бежать. Вряд ли у вас получится откупиться без потери конечностей.',
    damage: 'Обычное оружие',
    hits: 'Средняя',
  },
  {
    label: 'Химера',
    icon: chimer,
    text: 'Существо словно собрано из частей других животных. Некоторые путники говорят, что иногда в вое существа можно разобрать человеческую речь, но, вероятно, это были крики тех, кто отстал во время бегства…',
    damage: 'Обычное оружие',
    hits: 'Высокая',
  },
  {
    label: 'Проклятый',
    icon: cursed,
    text: 'Сильное проклятие может исказить не только душу, но и плоть… Это существо ненавидит всех за свою судьбу, оно крайне опасно и агрессивно.',
    damage: 'Обычное оружие',
    hits: 'Высокая',
    special: 'Во время ночной боевки тип атаки становится ОСОБЫМ',
  },
  {
    label: 'Неупокоенная',
    icon: notDead,
    text: 'Души умерших насильственной смертью могут встретиться на дорогах. Иногда они мстят выжившим, иногда пытаются указать на того, кто их убил… Но редко кто пытается прислушаться к их вою.',
    damage: 'Особое оружие',
    hits: 'Средняя',
    special: 'Во время ночной боевки живучесть становится ВЫСОКОЙ',
  },
  {
    label: 'Запретный рыцарь',
    icon: knight,
    text: 'Воин, давший обет молчания и ведущий странствующий образ жизни. В чём его цель — никто не знает, и в чём его вина — тоже. Но все побаиваются находиться рядом с ним — ведь любое слово может оказаться причиной его гнева…',
    damage: 'Обычное оружие',
    hits: 'Высокая',
  },
];

export function Monsters(): JSX.Element {
  const renderText = (text: string): JSX.Element => {
    return <div className={s.text}>{text}</div>
  };

  const renderMonstersList = React.useMemo(() => {
    return (
      <div>
        {monstersList.map((monster, index) => (
          <MonsterContainer
            key={index}
            icon={monster.icon}
            text={renderText(monster.text)}
            damage={monster.damage}
            hits={monster.hits}
            special={monster.special}
          />
        ))}
      </div>
    );
  }, [renderText]);

  return (
    <div className={s.container}>
      <Chapter chapter='БЕСТИАРИЙ' />
      <div className={s.listContainer}>
        <div>ВАЖНО: Указаны только монстры о которых хоть что-то известно</div>
        <br />
        {renderMonstersList}
      </div>
    </div>
  );
}