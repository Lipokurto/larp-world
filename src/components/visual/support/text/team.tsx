import { NavLink } from "react-router-dom";
import { Item } from "../../../../rules-text/type";
import { AccordionBlock } from "../../../accordion/accordion-block";

import s from './text.module.css';

export const team: Item = {
  label: 'Команда',
  element:
    <>
      <div className={s.container}>
        <div>Каждая команда имеет свою внутреннюю организацию в которую хронисты не задействованы, но должно быть несколько общих вещей</div>
        <div>
          <NavLink replace to='/world/characters' onClick={() => document.body.style.overflowY = 'visible'} style={{color: 'goldenrod'}}>Подробнее с персонажами можно ознакомиться тут</NavLink>
        </div>
      </div>

      <AccordionBlock
        label="Ответственные"
        items={[
          {
            label: 'Капитан',
            element:
              <>
                <div>Отвечает за игровую часть команды, выступает в роли главнокомандующего отрядом</div>
              </>
          },
          {
            label: 'Интендант',
            element:
              <>
                <div>Отвечает за игровые возможности отряда является полу игровым персонажем, имеет доступ к сюжетной информации</div>
              </>
          },
          {
            label: 'Административно-хозяйственная часть',
            element:
              <>
                <div>Должен быть человек который сможет организовать разметку лагеря, грамотно установить туалет, пожизняк и так далее</div>
              </>
          },
        ]}
      />

      <AccordionBlock
        label="Аттрибуты команды"
        items={[
          {
            label: 'Командные цвета и стиль',
            element:
              <>
                <div>Цвета команды помогут быстро понять кто друг кто враг в пылу битвы, и в конечном счете это еще и красиво</div>
              </>
          },
          {
            label: 'Знамя',
            element:
              <>
                <div>Командное знамя и символика, с учетом командных цветов</div>
              </>
          },
          {
            label: 'Лагерь',
            element:
              <>
                <div>Место где можно отдохнуть, пережать мертвяк, получить новые заданий от капитана, пообщаться с членами отряда</div>
              </>
          },
        ]}
      />
    </>
}