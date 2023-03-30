import { NavLink } from "react-router-dom";
import { Item } from "../../../../rules-text/type";
import { AccordionBlock } from "../../../accordion/accordion-block";

import s from './text.module.css';

export const build: Item = {
  label: 'Постройка',
  element:
    <>
      <div className={s.container}>
        <div>Постройки - могут быть как экономическими так и нет, как минимум это еще один повод проникнуться атмосферой мероприятия</div>
        <div>
          <NavLink replace to='/help/build-calc' onClick={() => document.body.style.overflowY = 'visible'} style={{color: 'goldenrod'}}>Рассчет эффективности постройки</NavLink>
        </div>
      </div>

      <AccordionBlock
        label="Виды построек"
        items={[
          {
            label: 'Мастерские',
            element:
              <>
                <div>Мастерские преобразуют игровые ресурсы в конечный товар</div>
              </>
          },
          {
            label: 'Производство',
            element:
              <>
                <div>Производственные постройки создают игровые ресурсы отигрыышем и временем</div>
              </>
          },
          {
            label: 'Услуги',
            element:
              <>
                <div>Услуги игрового характера предоставляются за игровые и не могут давать никаких игровых приимуществ, кроме как развлечения</div>
              </>
          },
        ]}
      />

      <AccordionBlock
        label="Ограничения"
        items={[
          {
            label: 'Кабаки',
            element:
              <>
                <div>Кабаки НЕ торгуют за игровую валюту</div>
                <div>Кабак легко может ввести абонименты</div>
                <div>Свою кабацкую монету (при этом интенданты и торговцы принимать ее не будут)</div>
                <div>Запрещен обмен реальными деньгами</div>
              </>
          },
          {
            label: 'Лавки',
            element:
              <>
                <div>Еслив ы торгуете реальным товаром, то учитывайте что на игре обмен реальными деньгами и продажа запрещены</div>
                <div>Вы так же можете ввести абонемент или списки должников, которые рассчитаются после игры</div>
              </>
          },
        ]}
      />
    </>
}