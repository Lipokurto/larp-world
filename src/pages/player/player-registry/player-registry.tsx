import { Chapter } from "../../../components";

import s from './player-registry.module.css';

export function PlayerRegistry(): JSX.Element {
  return (
    <div className={s.container}>
      <Chapter chapter='Регистрация игроков'/>
      
      <div>Регистрация является ОБЯЗАТЕЛЬНЫМ условием участия на мероприятии</div>
      
      <div className={s.label}>Регистрация</div>
      <div className={s.listContainer}>
        <div>1. Сдлайте несколько фотографий своего костюма полной или почти полной готовности</div>
        <div>2. Заполняете форму заявки ХХХХХХ</div>
        <div>
          3. Переходите в группу&nbsp;
            <a href='https://vk.com/larpdarkage' target='_blank' rel="noreferrer" style={{color: 'goldenrod'}}>
              <b>LARP Темные века</b>
            </a>
            &nbsp;в ВК
        </div>
        <div>4. Отправляете данную форму в сообщения группы</div>
        <div>5. Дождитесь что вашу заявку одобрили</div>
      </div>

      {/* <Registration /> */}
    </div>
  )
}