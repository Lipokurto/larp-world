import React from "react";
import { Accordion, AccordionItem } from 'react-sanfona';

import { tithe, assault, search, prison, ransom, pray, fire, globalPray, eat, ham } from "../../../rules-text/actions";

import s from './actions.module.css';

function AItem(item) {
  return (
    <AccordionItem 
      title={item.label}
      titleClassName={s.title}
    >
      <div className={s.details}>
        {item.text}
      </div>
    </AccordionItem>
  )
}

export function Actions() {
  return (
    <>
      <div className={s.container}>
        <h1>Игровые действия</h1>

        <Accordion>
          {AItem(tithe)}
          {AItem(assault)}
          {AItem(search)}
          {AItem(prison)}
          {AItem(ransom)}
          {AItem(pray)}
          {AItem(globalPray)}
          {AItem(fire)}
          {AItem(eat)}
          {AItem(ham)}

        </Accordion>
      </div>
    </>
  )
}