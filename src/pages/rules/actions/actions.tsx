import { AccordionBlock, Chapter } from "../../../components";

import { 
  tithe, assault, search,
  prison, ransom, pray,
  execution, eat,
  ham, loot, theft,
  rest, workPlan,
  craft, quality, performance,
  exile, idol, removeAltar,
  addAltar, heal, repair,
  ropery, supply, salary,
  changeForm, healObsessed, createObsessed,
} from "../../../rules-text/actions";

import s from './actions.module.css';

export function Actions(): JSX.Element {
  return (
    <>
      <div className={s.container}>
        <Chapter chapter='ИГРОВЫЕ ДЕЙСТВИЯ' />

        <AccordionBlock 
          label='Общие действия' 
          items={[heal, repair, loot, theft, prison, ransom, ropery, rest, performance, workPlan, craft, quality ]} 
          />

        <AccordionBlock 
          label='Действия отрядов' 
          items={[assault, search, supply, salary]} 
          />

        <AccordionBlock 
          label='Мистические действия' 
          items={[pray, execution, tithe, exile, addAltar, eat, changeForm, ham, idol, removeAltar, healObsessed, createObsessed]} 
          />
      </div>
    </>
  )
}