// eslint-disable jsx-a11y/anchor-is-valid
import React from 'react';
import { NavLink } from 'react-router-dom';
import Tooltip from 'react-tooltip-lite';

import { SubMenu } from './sub-menu';
import { Logo } from '../../components/logo';
import { NavigationModal, useResize } from '../../components';
import { rules } from '../../components/navigation/lists';
import { videoObject } from '../../links/main-video/video-objects';

import staticLogo from '../../assets/LOGO_2025.png';
import vkImage from './../../assets/icons/social/vk.png';
import ruStore from './../../assets/icons/social/ruStore.png';
import pdfIcon from './../../assets/icons/social/pdfIcon.png';
// import excelIcon from './../../assets/icons/social/excel.png';
import pdfRules from '../../rules-text/Pravila_Temnye_veka_v_2_2_1.pdf';

import s from './main.module.scss';

export function Main(): JSX.Element {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const { width } = useResize();

  const handleClick = React.useCallback(() => {
    setIsOpen(true);
  }, []);

  const renderLogo = React.useMemo(() => {
    return width < 800 ? <img src={staticLogo} alt='' width={200} style={{ marginLeft:'-100px' }}/> : <Logo />
  }, [width]);

  const renderLinks = React.useMemo(() => {
    return (
      <>
        <Tooltip
          content='Группа в Вконтакте'
          background='wheat'
          direction="left"
        >
          <a href='https://vk.com/larpdarkage' target='_blank' rel="noreferrer" style={{ color: 'goldenrod' }}>
            <img src={vkImage} alt="" width={30} />
          </a>
        </Tooltip>

        <Tooltip
          content='Наше приложение в RuStore'
          background='wheat'
          direction="left"
        >
          <a href='https://apps.rustore.ru/app/com.darkapk03' target='_blank' rel="noreferrer" style={{ color: 'goldenrod' }}>
            <img src={ruStore} alt="" width={30} />
          </a>
        </Tooltip>

        <Tooltip
          content='Все правила одним файлом PDF (v2-2-1)'
          background='wheat'
          direction="left"
        >
          <a href={pdfRules} target='_blank' rel="noreferrer" style={{ color: 'goldenrod' }} download={'Темные_века_правила_v2-2-1'}>
            <img src={pdfIcon} alt="" width={30} />
          </a>
        </Tooltip>

        {/* <Tooltip
          content='Таблица всех ролей'
          background='wheat'
          direction="left"
        >
          <a href='https://docs.google.com/spreadsheets/d/1st6MW3fwOllrLfTsgnVavd_yNYjyXZuOTnXKUI5cfn8/edit?usp=sharing' target='_blank' rel="noreferrer" style={{color: 'goldenrod'}}>
            <img src={excelIcon} alt="" width={30} />
          </a>
        </Tooltip> */}
      </>
    )
  }, []);

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
            {renderLinks}
          </div>

          {renderLogo}
        </div>

        <div className={s.subMenuContainer}>
          {videoObject.map((e) => {
            return (
              <div key={e.link}>
                <SubMenu obj={e} />
              </div>
            )
          })}
        </div>
      </div>

      {isOpen && (
        <NavigationModal
          setIsOpen={setIsOpen}
          list={rules}
          title='Правила'
          link='/rules'
        />
      )}
    </>
  )
}