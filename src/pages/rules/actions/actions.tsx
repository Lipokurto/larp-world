import React from "react";

import { AccordionBlock, Chapter } from "../../../components";

import { 
  tithe, assault, search,
  prison, ransom, pray,
  fire, globalPray, eat,
  ham,
} from "../../../rules-text/actions";

import s from './actions.module.css';

export function Actions(): JSX.Element {
  return (
    <>
      <div className={s.container}>
        <Chapter chapter='ИГРОВЫЕ ДЕЙСТВИЯ' />

        <AccordionBlock 
          label='Боевые действия' 
          items={[prison, ransom, assault, search]} 
          />

        <AccordionBlock 
          label='Религиозные действия' 
          items={[pray, fire, tithe, globalPray]} 
          />

        <AccordionBlock 
          label='Чудовищные действия' 
          items={[eat, ham]} 
          />
      </div>
    </>
  )
}