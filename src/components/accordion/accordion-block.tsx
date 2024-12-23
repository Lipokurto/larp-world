import React from 'react';
import { Accordion } from 'react-sanfona';

import { AccordionItemStyle } from './accordion-item-style';
import { Item } from '../../rules-text/type';

import s from './accordion-block.module.css';

type Props = {
  items: Item[],
  label?: string,
}

export function AccordionBlock(props: Props): JSX.Element {
  return (
    <div className={s.blockContainer}>
      <h2 className={s.label}>{props.label}</h2>

      <Accordion>
        {props.items.map(p => AccordionItemStyle(p))}
      </Accordion>
    </div>
  )
}