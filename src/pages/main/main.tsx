// eslint-disable jsx-a11y/anchor-is-valid
import React from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

import { SubMenu } from './sub-menu';
import { Logo } from '../../components/logo';
import { NavigationModal, useResize } from '../../components';
import { rules } from '../../components/navigation/lists';

import staticLogo from '../../assets/LOGO_2025.png';
import { getVideos } from '../../api/materials';
import { SidePanel } from './side-panel';

import s from './main.module.scss';

type Link = {
  id: number,
  name: string,
  link: string,
  page: string,
}

export function Main(): JSX.Element {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [videoObject, setVideoObject] = React.useState<Link[]>([]);
  const [isVideoLoading, setIsVideoLoading] = React.useState<boolean>(false);

  const { width } = useResize();

    React.useEffect(() => {
      const fetchPlayerInfo = async () => {
        setIsVideoLoading(true);
        try {
          const response = await axios.get(getVideos, { params: { page: 'main' } });
          const videoItems: Link[] = response.data.map((item: Link) => {
            if (item.page === 'main') {
              return ({
                id: item.id,
                link: item.link,
              });
            }
          });

          setVideoObject(videoItems);
        } catch (err) {
          toast.error('Ошибка при получении данных');
        }
        setIsVideoLoading(false);
      }

    fetchPlayerInfo();
  }, []);

  const handleClick = React.useCallback(() => {
    setIsOpen(true);
  }, []);

  const renderLogo = React.useMemo(() => {
    return width < 800 ? <img src={staticLogo} alt='' width={200} style={{ marginLeft:'-100px' }}/> : <Logo />
  }, [width]);

  const renderVideos = React.useMemo(() => {
    if (isVideoLoading) {
      return null;
    }

    return (
      <div className={s.subMenuContainer}>
        {videoObject.map((e) => {
          return (
            <div key={e.id}>
              <SubMenu
                obj={e}
              />
            </div>
          )
        })}
      </div>
    )
  }, [videoObject, isVideoLoading]);

  return (
    <>
      <div className={s.container}>
        <div className={s.buttons}>
            <NavLink className={s.mainButton} to='/player/registration'>Регистрация на игру</NavLink>

            <NavLink className={s.secondButton} to='/about'>О мероприятии</NavLink>

            <a className={s.secondButton} onClick={() => handleClick()}>Правила</a>

            <NavLink className={s.secondButton} to='/more'>Дополнительно</NavLink>

            <NavLink style={{ alignSelf: 'end' }} to='/vk-policy'>Политика конфиденциальности</NavLink>
        </div>

        <div className={s.logo}>
          <div className={s.social}>
            <SidePanel />
          </div>

          {renderLogo}
        </div>

        {renderVideos}
      </div>

      {isOpen && (
        <NavigationModal
          setIsOpen={setIsOpen}
          list={rules}
          title='Правила'
          link='/rules'
        />
      )}

      <Toaster
        position="bottom-left"
        reverseOrder={false}
      />
    </>
  )
}