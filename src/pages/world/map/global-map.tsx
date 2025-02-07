import React from 'react';

import clearMap from '../../../assets/map/clear-map.png';
import politicMap from '../../../assets/map/politic-map.png';
import religionMap from '../../../assets/map/religion-map.png';

import { Chapter } from '../../../components';

import s from './global-map.module.css';

type Map = 'География' | 'Политика' | 'Религия';

export function GlobalMap(): JSX.Element {
  const [map, setMap] = React.useState<Map>('География');

  const renderText = React.useMemo(() => {
    if (map === 'География') {
      return (
        <div>
          <br />
          <b>{map}</b>
          <div>Основные события будут происходить на следующей карте, этот участок суши называет просто - Континент</div>
          <div>Эпоха открытий еще не наступила, поэтому большая часть территорий еще не известна ученым</div>
        </div>
      )
    }

    if (map === 'Политика') {
      return (
        <div>
          <br />
          <b>{map}</b>
          <div>Политическая карта войны, союзов и нейтралитета будет обновлена ближе к игре, исходя из вводной</div>
          <div>Основные герои манги еще не родились</div>
        </div>
      )
    }

    if (map === 'Религия') {
      return (
        <div>
          <br />
          <b>{map}</b>
          <div>На текущий момент основными религиями континента считаются: Святой Престол и Политеизм</div>
          <div>Культ предков на текущий момент активно замещается верой Святого Престола</div>
        </div>
      )
    }
  }, [map]);

  return (
    <div className={s.container}>
      <Chapter chapter='КАРТА МИРА' />

      <div>Текущее время можно обозначить как "Начало столетней войны", задолго до рождения главных героев</div>
      <br />
      <b>ВНИМАНИЕ!</b>
      <div>Первоисточник не богат на географические данные, гербы и общую политику государств, поэтому мы заполнили недостающие участки важной информации так чтоб реализовать задуманный сюжет</div>

      {renderText}

      <div className={s.buttonsContainer}>
        <button onClick={() => setMap('География')}>Общая карта</button>
        <button onClick={() => setMap('Политика')}>Политическая карта</button>
        <button onClick={() => setMap('Религия')}>Карта религий</button>
      </div>

      {map === 'География' && <img src={clearMap} alt='' />}
      {map === 'Политика' && <img src={politicMap} alt='' />}
      {map === 'Религия' && <img src={religionMap} alt='' />}
    </div>
  )
}