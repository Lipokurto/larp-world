import React from 'react';

import { AccordionBlock, Chapter, Video, useResize } from '../../components';
import { helpfulLinks } from '../../links/helpful-links';
import { downloadFiles } from '../../links/files/download-files';
import { inspirationVideo } from '../../links/inspiration/inspiration-video';

import s from './more.module.css';

export function More(): JSX.Element {
  const { width } = useResize();

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

  const linkToItems = React.useMemo(() => {
    return inspirationVideo.map(p => {
      return {
        label: p.name,
        element: 
          <div style={{display: 'block'}}>
            <Video
              src={p.link}
              title={p.name}
              width={width < 720 ? 360 : undefined}
            />
          
            {p.description}
          </div>
      }
    })
  }, [width])

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

      <AccordionBlock
        label='Видео материалы для погружения в атмосферу мероприятия'
        items={linkToItems}
      />
    </div>
  )
}