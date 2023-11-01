import React from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';

import { NavButton } from '../button/nav-button';
import { NavigationModal } from '../navigation-modal/navigation-modal';
import { useResize } from '../utils/use-resize';
import { help, player, rules, world } from './lists';
import { ListItem } from './lists/type';

import s from './navigation.module.css';

type NavigationButton ={
  title: string,
  list: ListItem[] | null,
  link: string, 
}

const buttons: NavigationButton[] = [
  { title: 'Главная', list: [], link: '/' },
  { title: 'Правила', list: rules, link: '/rules' },
  { title: 'Мир', list: world, link: '/world' },
  { title: 'Материалы', list: help, link: '/help' },
  { title: 'Игроку', list: player, link: '/player' },
];

export function Navigation(): JSX.Element {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [list, setList] = React.useState<ListItem[] | null>(null);
  const [title, setTitle] = React.useState<string>('');
  const [link, setLink] = React.useState<string>('/');

  const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false);

  const { width } = useResize();

  const navigate: NavigateFunction = useNavigate();

  const handleClick = React.useCallback((
      title: string,
      list: ListItem[] | null,
      link: string,
    ) => {

    if (title === 'Главная') {
      setIsMenuOpen(false);
      return navigate('/');
    }

    setTitle(title);
    setList(list);
    setLink(link);
    setIsOpen(true);
    setIsMenuOpen(false);
  }, [navigate]);

  const renderSmallMenu = React.useMemo(() => {
    return (
      <>      
        <div className={s.containerSmall}>
          <NavButton onclick={() => setIsMenuOpen(!isMenuOpen)} text='Меню' />
        </div>

        {isMenuOpen && (
          <div className={s.smallMenu}>
            {buttons.map((p) => <NavButton
              key={p.title}
              text={p.title} 
              onclick={() => handleClick(p.title, p.list, p.link)}
            /> )}
          </div>
 
        )}
      </>
    )
  }, [handleClick, isMenuOpen]);

  const renderNormMenu = React.useMemo(() => {
    return (
      <div className={s.container}>
        {buttons.map((p) => <NavButton
          key={p.title}
          text={p.title} 
          onclick={() => handleClick(p.title, p.list, p.link)}
          /> )}
      </div>
    )
  }, [handleClick]);
  
  return (
    <>

      {width > 850 ? renderNormMenu : renderSmallMenu}

      {isOpen && (
        <NavigationModal 
          setIsOpen={setIsOpen} 
          list={list} 
          title={title}
          link={link}
        />
      )}
    </>
  )
}