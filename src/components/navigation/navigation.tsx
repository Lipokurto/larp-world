import React from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';

import { NavButton } from '../button/nav-button';
import { NavigationModal } from '../navigation-modal/navigation-modal';
import { help, rules, world } from './lists';
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
  { title: 'Помощь', list: help, link: '/help' },
];

export function Navigation(): JSX.Element {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [list, setList] = React.useState<ListItem[] | null>(null);
  const [title, setTitle] = React.useState<string>('');
  const [link, setLink] = React.useState<string>('/');

  const navigate: NavigateFunction = useNavigate();

  const handleClick = React.useCallback((
      title: string,
      list: ListItem[] | null,
      link: string,
    ) => {

    if (title === 'Главная') {
      return navigate('/');
    }

    setTitle(title);
    setList(list);
    setLink(link);
    setIsOpen(true);
  }, [navigate]);
  
  return (
    <>
      <div className={s.container}>
        {buttons.map((p) => <NavButton
          key={p.title}
          text={p.title} 
          onclick={() => handleClick(p.title, p.list, p.link)}
          /> )}
      </div>

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