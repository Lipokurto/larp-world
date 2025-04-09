// eslint-disable jsx-a11y/anchor-is-valid
import React from 'react';
import { NavigateFunction, NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import Tooltip from 'react-tooltip-lite';

import { SubMenu } from './sub-menu';
import { Logo } from '../../components/logo';
import { NavigationModal, useResize } from '../../components';
import { rules } from '../../components/navigation/lists';

import vkImage from '../../assets/icons/social/vk.png';
import staticLogo from '../../assets/LOGO_2025.png';
import { getVideos } from '../../api/materials';
import { SidePanel } from './side-panel';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import VK from './vk';
import { loginFailure, loginStart, loginSuccess } from '../../redux/user-slice';
import { testResponse } from './test';
import { Link, VKResponse } from './type';

import s from './main.module.scss';

export function Main(): JSX.Element {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [videoObject, setVideoObject] = React.useState<Link[]>([]);
  const [isVideoLoading, setIsVideoLoading] = React.useState<boolean>(false);
  const [isAuthOpen, setIsAuthOpen] = React.useState<boolean>(false);
  const { isAuthenticated } = useAppSelector((state) => state.user);
  const navigate: NavigateFunction = useNavigate();
  const dispatch = useAppDispatch();
  const tooltipRef = React.useRef<HTMLDivElement>(null);
  const imgRef = React.useRef<HTMLImageElement>(null);

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

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        tooltipRef.current &&
        event.target instanceof Node &&
        !tooltipRef.current.contains(event.target) &&
        !imgRef.current?.contains(event.target)
      ) {
        setIsAuthOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleClick = React.useCallback(() => {
    setIsOpen(true);
  }, []);

  const handleUserCheck = React.useCallback(() => {
    if (isAuthenticated) {
      return navigate('/user');
    }

    if (!isAuthOpen) {
      return setIsAuthOpen(true);
    }

    return setIsAuthOpen(false);
  }, []);

  const handleLogin = React.useCallback(async (e: React.MouseEvent) => {
    e.nativeEvent.stopImmediatePropagation();

    let userData = undefined;
    if (process.env.REACT_APP_NEW === 'prod') {
      VK.Auth.login(async (response: VKResponse) => {
        const { user } = response.session;
        if (user.id) {
          console.log('User authorized:', user.href);
          dispatch(loginStart());
          userData = user;
        }
      }, VK.access.PHOTOS);
    } else {
      const { user } = testResponse.session;
      userData = user;
    }

    dispatch(userData ? loginSuccess(userData) : loginFailure('Ошибка авторизации'));
    navigate('/user');
  }, [dispatch, navigate]);

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

  const renderAuthButton = React.useMemo(() => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ fontSize: '15px' }}>Авторизация</div>
        <div style={{ marginBottom: 10, fontSize: '15px' }}>через ВК</div>
        <img ref={imgRef} src={vkImage} width={50} onClick={handleLogin} />
      </div>
    )
  }, [imgRef]);

  return (
    <>
      <div className={s.container} style={{ opacity: isAuthOpen ? 0.8 : 1 }}>
        <div className={s.buttons}>
            <NavLink className={s.mainButton} to='/player/registration'>Регистрация на игру</NavLink>

            <div ref={tooltipRef} className={s.secondButton}>
              <Tooltip
                content={renderAuthButton}
                background='wheat'
                direction="left"
                isOpen={isAuthOpen}
                useHover={false}
                tipContentHover={false}
                className={s.tooltip}
              >
                <div onClick={handleUserCheck}>Личный кабинет</div>
              </Tooltip>
            </div>

            <a className={s.secondButton} onClick={() => handleClick()}>Правила</a>

            <NavLink className={s.secondButton} to='/about'>О мероприятии</NavLink>

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
