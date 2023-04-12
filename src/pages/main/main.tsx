import { NavLink } from "react-router-dom";

import { Logo } from "../../components/logo";
import { Band } from "./band";
import { bands } from "./bands";

import s from './main.module.css';

export function Main(): JSX.Element {

  return (
    <div className={s.container}>
      <div className={s.buttons}>
          <NavLink className={s.mainButton} replace to='/player/registration'>Регистрация на игру</NavLink>

          <NavLink className={s.secondButton} replace to='/about'>О мероприятии</NavLink>

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
  )
}