import { Item } from "../../../../rules-text/type";
import { AccordionBlock } from "../../../accordion/accordion-block";

import s from './text.module.css';

export const route: Item = {
  label: 'Маршрут',
  element:
    <>
      <div className={s.container}>
        <div>Надо уметь доставить себя полигон</div>
      </div>

      <AccordionBlock
        label="Логистика"
        items={[
          {
            label: 'Самолет',
            element:
              <>
                <div>Не затягивайте с покупкой билетов, чем ближе дата вылета тем дороже</div>
              </>
          },
          {
            label: 'Координаты полигона',
            element:
              <>
                <div>Узнайте у организаторов как добраться до полигона с ближайшего города</div>
                <div>Какие ориентиры и куда смотреть</div>
              </>
          },
          {
            label: 'Кооперируйтесь',
            element:
              <>
                <div>Выезда нескольких людей куда надежнее чем выезд одному</div>
              </>
          },
        ]}
      />
    </>
}