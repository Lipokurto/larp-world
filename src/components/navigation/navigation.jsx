import React from 'react';
import { useNavigate } from 'react-router-dom';

import { NavButton } from '../button/nav-button';
import { Modal } from '../modal/modal';
import { players } from './lists/players';
import { rules } from './lists/rules';

import s from './navigation.module.css';

const buttons = [
  { title: 'Главная', list: [], link: '/' },
  { title: 'Правила', list: rules, link: '/rules' },
  { title: 'Игрокам', list: players, link: '/players' },
  { title: 'Капитанам', list: [], link: '/captain' },
  { title: 'Прочее', list: [], link: '/else' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [list, setList] = React.useState([]);
  const [title, setTitle] = React.useState('');
  const [link, setLink] = React.useState('/');

  const navigate = useNavigate();

  const handleClick = React.useCallback((title, list, link) => {
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
        <Modal 
          setIsOpen={setIsOpen} 
          list={list} 
          title={title}
          link={link}
        />
      )}
    </>
  )
}