import React from 'react';
import { NavLink } from "react-router-dom";

import { useResize } from '../utils/use-resize';

import s from './navigation-player.module.css';

type Links = {
  disabled: boolean,
  to: string,
  text: string,
};

type Props = {
  selectedLink: string,
}

const links: Links[] = [
  {
    disabled: false,
    to: '/player/registration',
    text: 'Регистрация игрока'
  },
  {
    disabled: false,
    to: '/player/regband',
    text: 'Регистрация команды'
  },
  {
    disabled: false,
    to: '/player/reglocation',
    text: 'Регистрация локации'
  },
  {
    disabled: false,
    to: '/player/regpay',
    text: 'Регистрация взноса'
  },
];


export function NavigationPlayer(props: Props): JSX.Element {
  const [items, setItems] = React.useState<Links[]>(links);
  const { width } = useResize();

  React.useEffect(() => {
    const newItems = items.map(p => (
      {
        ...p,
        disabled: p.to === props.selectedLink,
      }
    ));

    setItems(newItems);
  }, [items, props.selectedLink]);

  const renderItems = React.useMemo(() => (
      items.map(p => (
        <NavLink
          className={p.disabled ? s.linkOff : s.link}
          replace
          to={p.to}
          aria-disabled={p.disabled}
          onClick={() => document.body.style.overflowY = 'visible'}
          style={{color: 'goldenrod', opacity: p.disabled ? 0.5 : 1}}>
            {p.text}
        </NavLink>
      ))
  ), [items]);

  return (
    <div className={width >= 550 ? s.buttonsContainer : s.buttonsAdaptive}>
      {renderItems}
    </div>
  )
}