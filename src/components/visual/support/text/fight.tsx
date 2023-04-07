import { NavLink } from "react-router-dom";
import { Item } from "../../../../rules-text/type";
import { AccordionBlock } from "../../../accordion/accordion-block";

import s from './text.module.css';

export const fight: Item = {
  label: 'Боевка',
  element:
    <>
      <div className={s.container}>
        <div>Не зависимо от того кем вы едите знание боевки является обязательным элементом</div>
      </div>

      <AccordionBlock
        label="Здоровье"
        items={[
          {
            label: 'Хиты',
            element:
              <>
                <div>Каждый персонаж обладает запасом хитов, которые имитируют его броню</div>
                <div>
                  <NavLink replace to='/help/char-calc' onClick={() => document.body.style.overflowY = 'visible'} style={{color: 'goldenrod'}}>Модель для расчета своих хитов</NavLink>
                </div>
              </>
          },
          {
            label: 'Запрещенные зоны для ударов',
            element:
              <>
                <div>На игре запрещено нанесение акцентированных ударов в определенные зоны тела, сделано это с целью уменьшения травматичности</div>
                <div>Уважайте здоровье себя и других игроков</div>
              </>
          },
        ]}
      />

      <AccordionBlock
        label="Хитосьем"
        items={[
          {
            label: 'Оружие',
            element:
              <>
                <div>Все оружие максимально скомпоновано таким образом чтоб игроки не терялись в подсчете хитов</div>
                <div>особое оружие есть только у персонажей чей внешний вид будет являться доказательством что их оружие особое</div>
                <NavLink replace to='/help/heal-calc' onClick={() => document.body.style.overflowY = 'visible'} style={{color: 'goldenrod'}}>Модель для проверки хитов ударов и лечения</NavLink>
              </>
          },
          {
            label: 'Сдаться',
            element:
              <>
                <div>Всегда можно сдаться еще до начала боестолкновения, иногда это порождает более яркие впечатления чем агрессивная боевка</div>
              </>
          },
          {
            label: 'Смерть',
            element:
              <>
                <div>В случае гибели персонажа, вы отсиживаете мертвяк и выходите новым персонажем, но метка жертвы если получена то остается с вами, брать больше одной метки жертвы нельзя</div>
              </>
          },
        ]}
      />
    </>
}