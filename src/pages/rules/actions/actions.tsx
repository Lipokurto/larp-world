import { AccordionBlock, Chapter } from "../../../components";

import { 
  assault, search,
  prison, ransom,
  loot, theft,
  rest, workPlan,
  craft, quality, performance,
  heal, repair,
  supply, salary, killPerson,
  gateRepair, gateDamage, gateResearch,
  cannonPrepare, experiment, knock,
} from "../../../rules-text/actions";

import s from './actions.module.css';

export function Actions(): JSX.Element {
  return (
    <>
      <div className={s.container}>
        <Chapter chapter='ИГРОВЫЕ ДЕЙСТВИЯ' />

        <AccordionBlock 
          label='Общие действия' 
          items={[heal, repair, knock, loot, theft, prison, ransom, rest, killPerson, cannonPrepare]} 
          />

        <AccordionBlock 
          label='Специальные действия' 
          items={[performance, workPlan, craft, quality, gateRepair, gateDamage, gateResearch, experiment]} 
          />

        <AccordionBlock 
          label='Действия отрядов' 
          items={[assault, search, supply, salary]} 
          />
      </div>
    </>
  )
}