/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import { NavLink } from "react-router-dom";

import { Logo } from "../../components/logo";
import { Band } from "./band";
import { bands } from "./bands";
import { NavigationModal } from "../../components";
import { rules } from "../../components/navigation/lists";

import s from './main.module.css';

export function Main(): JSX.Element {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const handleClick = React.useCallback(() => {
    setIsOpen(true);
  }, []);

  return (
    <>    
      <div className={s.container}>
        <div className={s.buttons}>
            <NavLink className={s.mainButton} replace to='/player/registration'>Регистрация на игру</NavLink>

            <NavLink className={s.secondButton} replace to='/about'>О мероприятии</NavLink>

            <a className={s.secondButton} onClick={() => handleClick()}>Правила</a>

            <NavLink className={s.secondButton} replace to='/player/map-support'>Как подготовить себя</NavLink>
        </div>

        <div className={s.logo}>
          <Logo />
        </div>

        <div className={s.bandsContainer}>
          {bands.map((e) => {
            return (
              <div key={e.description}>
                <Band band={e} />
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