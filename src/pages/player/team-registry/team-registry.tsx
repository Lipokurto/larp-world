import React from 'react';

import { Chapter } from "../../../components";

import intro from '../../../assets/icons/registration/01_intro.png'; 
import arm from '../../../assets/icons/registration/02_arm.png';
import camp from '../../../assets/icons/registration/05_camp.png';
import done from '../../../assets/icons/registration/05_done.png';

import bannerPattern from '../../../assets/pattern/banner.png';

import s from './team-registry.module.css';

type Steps = {
  img: string,
  label: string,
  description: JSX.Element,
};

const registrationSteps: Steps[] = [
  {
    img: intro,
    label: 'Введение',
    description: 
      <div>
        <div>Ознакомьтесь с <a href='https://larpdarkage.ru/rules/general' target='_blank' rel="noreferrer" style={{color: 'goldenrod'}}>правилами мероприятия</a></div>
        <div>Ознакомьтесь с <a href='https://larpdarkage.ru/rules/location' target='_blank' rel="noreferrer" style={{color: 'goldenrod'}}>правилами локации</a></div>
      </div>,
  },
  {
    img: arm,
    label: 'Бронь',
    description: 
      <div>
        <div>Заполните свою заявку согласно шаблону:</div>
        
        <div className={s.request}>
          <div><b>Название команды: </b><i>Принимаются только русскоязычные названия</i></div>
          <div><b>Символика банды: </b><i>Картинка 440*500 пикселей*</i></div>
          <div><b>Группа в соц сетях: </b><i>Ссылка на командную группу в соц сетях</i></div>
          <div><b>Капитан: </b><i>Ссылка на капитана в соц сетях. ФИО игрока. Игровое имя персонажа</i></div>
          <div><b>Интендант: </b><i>Ссылка на интенданта в соц сетях. ФИО игрока. Игровое имя персонажа</i></div>
        </div>

        <div>Заявку надо отправить** в сообщения <a href='https://vk.com/larpdarkage' target='_blank' rel="noreferrer" style={{color: 'goldenrod'}}>группы</a></div>
        
        <div>Обязательно дождитесь ответа что ваша заявка принята</div>
        <br />
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
          <i>* Шаблон для символики</i>
          <img src={bannerPattern} alt='' width={200}/>
        </div>

        <div><i>** Отправляя форму регистрации, вы соглашаетесь придерживаться правил установленных данным мероприятием</i></div>
      </div>
  },
  {
    img: camp,
    label: 'Лагерь',
    description: 
      <div>
        <div>Для команды наемников наличие своего лагеря ОБЯЗАТЕЛЬНОЕ требование:</div>
        <div>Предоставьте все возможные данные о планируемых строениях и средствах обороны единым файлом в сообщения <a href='https://vk.com/larpdarkage' target='_blank' rel="noreferrer" style={{color: 'goldenrod'}}>группы</a>:</div>

        <div className={s.request}>
          <h4>Сведенья по всему лагерю:</h4>
          <div><b>Название: </b><i>Если ваш лагерь как-то именуется</i></div>
          <div><b>Количество людей: </b><i>Сколько человек планируется в лагере на старте (и боевые и не боевые - все)</i></div>
          <div><b>Генератор: </b><i>Наличие или отсутствие генератора</i></div>
          <div><b>Ответственный за АХЧ: </b><i>Ссылка в соц сетях и ФИО (должен присутствовать на мероприятии)</i></div>
          
          <div>
            <b>Штурмовая зона: </b>
            <li>Внутренняя - лагерь спроектирован на оборону внутри лагеря</li>
            <li>Внешняя - при штурме все силы обороны воюют за территорией лагеря</li>
          </div>

          <h4>Отдельно по каждому строению:</h4>
          <div><b>Название: </b><i>Можно использовать порядковые номера чтобы не путаться</i></div>
          <div><b>Изображение: </b><i>Изображение планируемого строения или его фото в готовом виде</i></div>
          <div><b>Габариты: </b><i>Длина, ширина, высота в метрах</i></div>
          <div><b>Назначение: </b><i>Кузница, госпиталь, жилой шатер, капитанский шатер, тюрьма, арсенал и т.д.</i></div>
        </div>
        <br />
        <div>
          <div>По всем вопросам допуска:</div>
          <div><a href='https://vk.com/zomb13' target='_blank' rel="noreferrer" style={{color: 'goldenrod'}}>Мастер по общему допуску антуража</a></div>
          <div><a href='https://vk.com/id5847033' target='_blank' rel="noreferrer" style={{color: 'goldenrod'}}>Мастер по допуску антуража для наемников</a></div>
        </div>
      </div>
  },
  {
    img: done,
    label: 'Готово',
    description: 
      <div>
        <div>Ваша команда является полностью подтвержденной если:</div>
        <li>Капитан и интендант прошли фотодопуск</li>
        <li>Минимум 5 человек команды прошли фотдопуск и сдали благотворительный взнос</li>
        <li>Есть фото вашего готового знамение</li>
      </div>
  },
]

export function TeamRegistry(): JSX.Element {
  const renderRegSteps = React.useMemo(() => {
    return registrationSteps.map(p => {
      return (
        <div className={s.item}>
          <div className={s.labelContainer}>
            <img src={p.img} alt='' width={100}/>
            <div className={s.itemLabel}>{p.label.toUpperCase()}</div>
          </div>

          <div className={s.descContainer}>{p.description}</div>
        </div>
      )
    })
  }, []);

  return (
    <div className={s.container}>
      <Chapter chapter='Регистрация команды'/>

      {renderRegSteps}
      
    </div>
  )
}