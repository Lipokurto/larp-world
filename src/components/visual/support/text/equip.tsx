import { Item } from "../../../../rules-text/type";
import { AccordionBlock } from "../../../accordion/accordion-block";

import s from './text.module.css';

export const equip: Item = {
  label: 'Снаряжение',
  element:
    <>
      <div className={s.container}>
        <div>Снаряжение игроков сугубо индивидуальное, но следует заметить несколько фактов</div>
      </div>

      <AccordionBlock
        label="Внешний вид"
        items={[
          {
            label: 'Правило 1 метра',
            element:
              <>
                <div>На расстоянии 1 метра ваш образ должен быть неотличим от образа сеттинга</div>
              </>
          },
          {
            label: 'Удобство',
            element:
              <>
                <div>Не ленитесь подгонять снаряжение опд себя, то что "можно потерпеть 1 час" будет натирать до крови спустя пол дня игровой активности</div>
              </>
          },
          {
            label: 'Силы',
            element:
              <>
                <div>Рассчитывайте свои силы, не стоит гнаться за хитами если вы физически не готовы носить полный доспех, тренируйтесь для того чтоб быть в форме на мероприятии</div>
              </>
          },
        ]}
      />

      <AccordionBlock
        label="Рекомендации"
        items={[
          {
            label: 'Вода',
            element:
              <>
                <div>Всегда носите с собой флягу с водой, этого очень часто не хватает</div>
              </>
          },
          {
            label: 'Сумки',
            element:
              <>
                <div>Сумки не должны мешать в боевке и в передвижении</div>
              </>
          },
          {
            label: 'Обувь',
            element:
              <>
                <div>Походную обувь можно качественно заантуражить, если в этом есть необходимость, но для полного погружения лучше стремиться к исторической обуви</div>
              </>
          },
        ]}
      />
    </>
}