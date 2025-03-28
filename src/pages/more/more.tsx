import React from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

import { Chapter, ItemModal, Video, VideoContainer, useResize } from '../../components';
import { helpfulLinks } from '../../links/helpful-links';
import { downloadFiles } from '../../links/files/download-files';
import { Item, VideoItem } from '../../rules-text/type';
import { mainVideos } from '../../api/materials';

import s from './more.module.css';

type Link = {
  id: number,
  name: string,
  link: string,
  page: string,
}

export function More(): JSX.Element {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [item, setItem] = React.useState<Item | null>(null);
  const [videoObject, setVideoObject] = React.useState<Link[]>([]);
  const { width } = useResize();

  React.useEffect(() => {
    const fetchPlayerInfo = async () => {
      try {
        const response = await axios.get(mainVideos, { params: { page: 'main' } });
        const videoItems: Link[] = response.data.map((item: Link) => {
          if (item.page === 'main') {
            return ({
              id: item.id,
              link: item.link,
              name: item.name,
            });
          }
        });

        setVideoObject(videoItems);
      } catch (err) {
        toast.error('Ошибка при получении данных');
      }
    }

  fetchPlayerInfo();
}, []);

  const handleClick = React.useCallback((item: VideoItem) => {
    const getVideoItem = {
      label: item.name,
      element: (
        <div style={{ margin: 10 }}>
          <Video
            src={item.link}
            title={item.name}
            width={width < 720 ? 340 : undefined}
          />
        </div>
      ),
    };

    setItem(getVideoItem);
    setIsOpen(true);
  }, []);

  const renderHelpfulLinks = React.useMemo(() => {
    return helpfulLinks.map(p => {
      return (
        <div key={p.name}><a href={p.link} target='_blank' rel="noreferrer">{p.name}</a></div>
      )
    })
  }, []);

  const renderFiles = React.useMemo(() => {
    return downloadFiles.map(p => {
      return (
        <div><a href={p.link} download={p.fileName}>{p.name}</a></div>
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
  }, [handleClick, videoObject]);

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