import React from 'react';

import { Chapter } from '../../components';
import { helpfulLinks } from '../../links/helpful-links';
import { downloadFiles } from '../../links/files/download-files';

import s from './more.module.css';

export function More(): JSX.Element {
  const renderHelpfulLinks = React.useMemo(() => {
    return helpfulLinks.map(p => {
      return (
        <div key={p.name}><a href={p.link} target='_blank' rel="noreferrer">{p.name}</a>{` ${p.description}`}</div> 
      )
    })
  }, []);

  const renderFiles = React.useMemo(() => {
    return downloadFiles.map(p => {
      return (
        <div><a href={p.link} download={p.fileName}>{p.name}</a>{` ${p.description}`}</div>
      )
    })
  }, []);

  return (
    <div className={s.container}>
      <Chapter chapter='Дополнительно' />
      <div>В этом разделе размещены полезные ссылки и материалы</div>
      
      <div className={s.label}>Материалы</div>
      <div className={s.listContainer}>
        {renderFiles}
      </div>

      <div className={s.label}>Полезные ссылки</div>
      <div className={s.listContainer}>
        {renderHelpfulLinks}
      </div>

      <div className={s.label}>Произведения для вдохновения</div>
      <div className={s.listContainer}>
        <div><b>Полнометражный мультфильм Berserk</b> три фильма полного метра которые могут познакомить вас с общими концепиями мироустройства</div>
        <div><b>Серия игр Dark souls</b> атмосфера и внешняя эстетика данных игр поможет вам лучше представить мир нашего мероприятия</div>
        <div><b>Дилогия Darkest dungeon</b> погружение в пучину безумия и собственных страхов вдохновляло нас при создании системы психозов</div>
      </div>
    </div>
  )
}