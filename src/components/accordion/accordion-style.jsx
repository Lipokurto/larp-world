import React from "react";
import { Accordion } from "react-sanfona";

import { AccordionItemStyle } from "./accordion-item-style";

export function AccordionStyle({ items }) {
  return (
    <Accordion>
      {items.map(p => AccordionItemStyle(p))}
    </Accordion>
  )
}