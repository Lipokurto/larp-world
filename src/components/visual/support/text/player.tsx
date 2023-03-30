import { NavLink } from "react-router-dom";
import { Item } from "../../../../rules-text/type";
import { AccordionBlock } from "../../../accordion/accordion-block";

import s from './text.module.css';

export const player: Item = {
  label: 'Игрок',
  element:
    <>
      <div className={s.container}>
        <div>Посещая это мерпориятие вы соглашаетесь соблюдать общие правила и требования организаторов</div>

        <div>
          <NavLink replace to='/rules/general' onClick={() => document.body.style.overflowY = 'visible'} style={{color: 'goldenrod'}}>Общие правила мероприятия</NavLink>
        </div>
      </div>

      <AccordionBlock
        label="Уважение трех принципов"
        items={[
          {
            label: 'Уважайте труд организаторов',
            element:
              <>
                <div>Организаторы искрене хотят провести хорошее мероприятие, и мы надеемся что вы нам будите помогать в этом</div>
              </>
          },
          {
            label: 'Уважение к игрокам',
            element:
              <>
                <div>У кадждого игрока разные возможностик ак у человека, но все мы приехали отдохнуть и напиаться яркими впечатлениями, это нас и объеденяет</div>
                <div>Постарайтесь чтоб о вашем присусвтии были только яркие впечатлениях, но не негативные</div>
              </>
          },
          {
            label: 'Уважение к себе',
            element:
              <>
                <div>Если вдруг у вас возникли проблемы, не стоит это терпеть обратитесь к организаторам или сокомандникам, постарайтесь решить эти проблемы так чтоб можно было продолжить играть без них</div>
              </>
          },
        ]}
      />

      <AccordionBlock
        label="Основное"
        items={[
          {
            label: 'Законность',
            element:
              <>
                <div>Ничего противозаконного</div>
              </>
          },
          {
            label: 'Адекватность',
            element:
              <>
                <div>Даже монстры на проекте могут быть человечнее многих людей, не путайте эти роли</div>
              </>
          },
          {
            label: 'Погружение',
            element:
              <>
                <div>Не портите атмосферу житейскими рассказами или видом</div>
              </>
          },
        ]}
      />
    </>
}