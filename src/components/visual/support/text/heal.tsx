import { NavLink } from "react-router-dom";
import { Item } from "../../../../rules-text/type";
import { AccordionBlock } from "../../../accordion/accordion-block";

import s from './text.module.css';

export const heal: Item = {
  label: "Лечение",
  element:
    <>
      <div className={s.container}>
        <div>Лечение персонажа - это база экономической модели</div>
      </div>

      <AccordionBlock
        label="Хиты"
        items={[
          {
            label: 'Живые хиты',
            element:
              <>
                <div>У каждого человека на старте 1 живой хит, потеряв который игрок переходит в состояние "тяжело ранен"</div>
                <div>Чтоб восстановить живой хит надо исползовать "аптечку" или "целебную мазь"</div>
                <div>
                  <NavLink replace to='/rules/battle' onClick={() => document.body.style.overflowY = 'visible'} style={{color: 'goldenrod'}}>Подробнее о лечении и хитосьеме</NavLink>
                </div>
                <div>
                  <NavLink replace to='/help/heal-calc' onClick={() => document.body.style.overflowY = 'visible'} style={{color: 'goldenrod'}}>Модель снятия и восстановления хитов</NavLink>
                </div>
              </>
          },
          {
            label: 'Броневые хиты',
            element:
              <>
                <div>Исходя из бронированости вашего персонажа, свех живого хита вам начисляются бронированные хиты</div>
                <div>Восстановить бронированные хиты можно при помощи "Ремкомплекта"</div>
                <div>
                  <NavLink replace to='/help/char-calc' onClick={() => document.body.style.overflowY = 'visible'} style={{color: 'goldenrod'}}>Рассчитать сколько у вас хитов можно тут</NavLink>
                </div>
              </>
          },
          {
            label: 'Монстры',
            element:
              <>
                <div>Монстры не обладают броневыми хитами и лечатся по особым правилам, отличным от людских</div>
                <div>
                  <NavLink replace to='/help/monster-calc' onClick={() => document.body.style.overflowY = 'visible'} style={{color: 'goldenrod'}}>Рассчитать сколько у вас хитов можно тут</NavLink>
                </div>
              </>
          },
        ]}
      />

      <AccordionBlock
        label="Рекомендации"
        items={[
          {
            label: 'Мастерские и госпитали',
            element:
              <>
                <div>мастерские и госпитали будут центрами экономической модели, поэтому не стоит портить с ними отношения, как минимум на старте</div>
              </>
          },
          {
            label: 'Предметы',
            element:
              <>
                <div>Все игровые предметы и деньги являются лутаемыми, поэтому аккуратно рассчитывайте что брать с собой</div>
              </>
          },
          {
            label: 'Зелья',
            element:
              <>
                <div>Зелья обладают р ядом приимуществ перед комплектами, но вероятнее всего будут стоить дороже</div>
              </>
          },
        ]}
      />
    </>
}