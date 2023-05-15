import { NavLink } from "react-router-dom";
import { Item } from "../../../../rules-text/type";
import { AccordionBlock } from "../../../accordion/accordion-block";

import s from './text.module.css';

export const politic: Item = {
  label: 'Политика',
  element:
    <>
      <div className={s.container}>
        <div>Вы отряд наемников, которые зарабатывают контрактами, а лучшими нанимателями всегда остаются - королевские особы</div>
        <div>
          <NavLink replace to='/world/politic' onClick={() => document.body.style.overflowY = 'visible'} style={{color: 'goldenrod'}}>Подробнее с политикой можно ознакомиться тут</NavLink>
        </div>
      </div>

      <AccordionBlock
        label="Враждующие стороны"
        items={[
          {
            label: 'Королевства',
            element:
              <>
                <div>На текущем проекте присутствуют две стороны конфликта: Мидендандское королевство и Тюдорская империя,</div>
              </>
          },
          {
            label: 'Геополитика',
            element:
              <>
                <div>От итогов мероприятия глобальная политическая карта будет изменена и сюжет двинется к следующему мероприятию по данной вселенной</div>
              </>
          },
          {
            label: 'Нейтральные стороны',
            element:
              <>
                <div>Далеко не все фракции задействованы в противостоянии, так что не спешите делать из них себе врагов</div>
              </>
          },
        ]}
      />
    </>
}