import React from "react";

import clearMap from '../../../assets/map/clear-map.png';
import politicMap from '../../../assets/map/politic-map.png';
import religionMap from '../../../assets/map/religion-map.png';
import cultureMap from '../../../assets/map/culture-map.png';

import { Chapter } from "../../../components";

import s from './global-map.module.css';

type Map = 'Общая' | 'Политика' | 'Религия' | 'Культура';

export function GlobalMap(): JSX.Element {
  const [map, setMap] = React.useState<Map>('Общая');
  return (
    <div className={s.container}>
      <Chapter chapter='КАРТА МИРА' />

      <div className={s.buttons}>
        <button onClick={() => setMap('Общая')}>Общая карта</button>
        <button onClick={() => setMap('Политика')}>Политическая карта</button>
        <button onClick={() => setMap('Религия')}>Карта религий</button>
        <button onClick={() => setMap('Культура')}>Карта этносов</button>
      </div>
      
      {map === 'Общая' && <img src={clearMap} alt='' />}
      {map === 'Политика' && <img src={politicMap} alt='' />}
      {map === 'Религия' && <img src={religionMap} alt='' />}
      {map === 'Культура' && <img src={cultureMap} alt='' />}

    </div>
  )
}