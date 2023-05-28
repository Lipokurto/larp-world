import { AccordionBlock, Chapter } from "../../../components";

import { 
  tithe, assault, search,
  prison, ransom, pray,
  fire, globalPray, eat,
  ham, loot, theft,
  confession, rest, ground,
  craft, autograph, performance,
} from "../../../rules-text/actions";

import s from './actions.module.css';

export function Actions(): JSX.Element {
  return (
    <>
      <div className={s.container}>
        <Chapter chapter='ИГРОВЫЕ ДЕЙСТВИЯ' />

        <AccordionBlock 
          label='Общие действия' 
          items={[prison, ransom, loot, theft, rest, ground, craft, autograph, performance]} 
          />

        <AccordionBlock 
          label='Боевые действия' 
          items={[assault, search]} 
          />

        <AccordionBlock 
          label='Религиозные действия' 
          items={[pray, fire, tithe, globalPray, confession]} 
          />

        <AccordionBlock 
          label='Чудовищные действия' 
          items={[eat, ham]} 
          />

        <AccordionBlock
            label="Контракты"
            items={[
              {
                label: 'Прямые указания короны',
                element:
                  <>
                    <div>Каждому отряду наемников будет выслано королевское задание, которое нужно выполнить</div>
                    <div>В случае отказа или провала отряд ждут штрафы игрового порядка</div>
                  </>
              },
              {
                label: 'Финальная битва',
                element:
                  <>
                    <div>Все карты будут раскрыты на финальном противостоянии</div>
                  </>
              },
            ]}
          />
      </div>
    </>
  )
}