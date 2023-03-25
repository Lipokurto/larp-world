import { Chapter, Registration } from "../../../components";

import s from './player-registry.module.css';

export function PlayerRegistry(): JSX.Element {
  return (
    <div className={s.container}>
      <Chapter chapter='Регистрация игроков'/>
      <div>Регистрация является ОБЯЗАТЕЛЬНЫМ условием участия на мероприятии</div>
      <Registration />
    </div>
  )
}