import React from 'react';

import { Chapter, ItemModal, Video, VideoContainer, useResize } from '../../components';
import { helpfulLinks } from '../../links/helpful-links';
import { downloadFiles } from '../../links/files/download-files';
import { videoObject } from '../../links/main-video/video-objects';
import { Item, VideoItem } from '../../rules-text/type';

import s from './more.module.css';

export function More(): JSX.Element {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [item, setItem] = React.useState<Item | null>(null);
  const { width } = useResize();

  const handleClick = React.useCallback((item: VideoItem) => {
    const getVideoItem = {
      label: item.name,
      element:
      <div style={{ margin: 10 }}>
        <Video
          src={item.link}
          title={item.name}
          width={width < 720 ? 340 : undefined}
        /> 
      </div> 
    };

    setItem(getVideoItem);
    setIsOpen(true);
  }, []);

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

  const videoList = React.useMemo(() => {
    return (
      <div className={s.resContainer}>
        {videoObject.map((p) => {
          return (
            <div className={s.videoItemDeck} onClick={() => handleClick(p)}>
              <VideoContainer
                name={p.name} 
                link={p.link} 
              />
            </div>
          )
        })}
      </div>
    )
  }, [handleClick]);

  return (
    <>
      <div className={s.container}>
        <Chapter chapter='Дополнительно' />
        <div>В этом разделе размещены полезные ссылки и материалы</div>
        
        <div className={s.label}>Материалы для скачивания</div>
        <div className={s.listContainer}>
          {renderFiles}
        </div>

        <div className={s.label}>Полезные ссылки</div>
        <div className={s.listContainer}>
          {renderHelpfulLinks}
        </div>

        {videoList}
      </div>

      {isOpen && (
        <ItemModal
          setIsOpen={setIsOpen}
          item={item}
        />
      )}
    </>
  )
}