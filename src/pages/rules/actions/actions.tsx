import { AccordionBlock, Chapter } from "../../../components";

import { 
  assault, search, ancestor,
  prison, ransom, pray,
  execution, eat,
  ham, loot, theft,
  rest, workPlan,
  craft, quality, performance,
  heal, repair,
  ropery, supply, salary,
  changeForm, healObsessed, createObsessed,
  darkDeal, astralTouch, killPerson,
  gateRepair, gateDamage, gateResearch,
  cannonFire,
} from "../../../rules-text/actions";

import s from './actions.module.css';

export function Actions(): JSX.Element {
  return (
    <>
      <div className={s.container}>
        <Chapter chapter='ИГРОВЫЕ ДЕЙСТВИЯ' />

        <AccordionBlock 
          label='Общие действия' 
          items={[heal, repair, loot, theft, prison, ransom, ropery, rest, killPerson, cannonFire]} 
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
          items={[darkDeal, pray, ancestor, execution, eat, changeForm, ham, healObsessed, createObsessed]} 
          />
      </div>
    </>
  )
}