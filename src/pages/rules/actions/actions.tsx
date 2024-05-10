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
  darkDeal, astralTouch, killPerson,
  gateRepair, gateDamage, gateResearch,
} from "../../../rules-text/actions";

import s from './actions.module.css';

export function Actions(): JSX.Element {
  return (
    <>
      <div className={s.container}>
        <Chapter chapter='ИГРОВЫЕ ДЕЙСТВИЯ' />

        <AccordionBlock 
          label='Общие действия' 
          items={[heal, repair, loot, theft, prison, ransom, ropery, rest, killPerson]} 
          />

        <AccordionBlock 
          label='Специальные действия' 
          items={[performance, workPlan, craft, quality, astralTouch, gateRepair, gateDamage, gateResearch]} 
          />

        <AccordionBlock 
          label='Действия отрядов' 
          items={[assault, search, supply, salary]} 
          />

        <AccordionBlock 
          label='Мистические действия' 
          items={[darkDeal, pray, execution, tithe, exile, addAltar, eat, changeForm, ham, idol, removeAltar, healObsessed, createObsessed]} 
          />
      </div>
    </>
  )
}