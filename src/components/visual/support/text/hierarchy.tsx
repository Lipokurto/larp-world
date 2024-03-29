import { Item } from "../../../../rules-text/type";
import { AccordionBlock } from "../../../accordion/accordion-block";

import s from './text.module.css';

export const hierarchy: Item = {
  label: 'Иерархия',
  element:
    <>
      <div className={s.container}>
        <div>Иерархия достаточно проста и прямолинейна чтоб игроки долго не думали к кому обратиться</div>
      </div>

      <AccordionBlock
        label="Глобальная"
        items={[
          {
            label: 'Организаторы',
            element:
              <>
                <div>Организаторы обеспечивают проведение мероприятия, правила полигон и первичные нужды игроков на уровне похода</div>
              </>
          },
          {
            label: 'Интенданты',
            element:
              <>
                <div>Интенданты выбираются из состава команды и являются глазами и ушами организаторов на территории лагеря</div>
              </>
          },
          {
            label: 'Капитаны',
            element:
              <>
                <div>Капитаны ответственны за состав команды и их действия во время мероприятия</div>
              </>
          },
        ]}
      />

      <AccordionBlock
        label="Локальная"
        items={[
          {
            label: 'Бой',
            element:
              <>
                <div>Сторона обороны считает свои хиты и поэтому именно за ней будет последнее слово в противостоянии</div>
              </>
          },
          {
            label: 'Игровые действия',
            element:
              <>
                <div>Слово того кто инициировал действие всегда выше, ответчик, если имеет возможность ответить, не должен вступать в спор а должен отыгрывать противодействие, если у него была возможность но он этого не сделал - то на него распространяется заявленное игровое действие</div>
              </>
          },
        ]}
      />
    </>
}