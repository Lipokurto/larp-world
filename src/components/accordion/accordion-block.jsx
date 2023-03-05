import React from "react";
import { Accordion } from "react-sanfona";

import { AccordionItemStyle } from "./accordion-item-style";

import s from './accordion-block.module.css';

export function AccordionBlock({ label, items }) {
  return (
    <div className={s.blockContainer}>
      <h2 className={s.label}>{label}</h2>

      <Accordion>
        {items.map(p => AccordionItemStyle(p))}
      </Accordion>
    </div>
  )
}