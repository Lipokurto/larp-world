import React from "react";
import { AccordionItem } from "react-sanfona";

import arrowDown from '../../assets/icons/icon-arrow-down.svg';
import arrowUp from '../../assets/icons/icon-arrow-up.svg';

import s from './accordion-item-style.module.css';

function makeArrow(isLeft, isOpen) {
  if (isOpen) {
    return (
      <div className={isLeft ? s.arrow_left_up : s.arrow_right_up}>
        <img src={arrowUp} alt='Icons' />
      </div>
    )
  }

  return (
    <div className={isLeft ? s.arrow_left_down : s.arrow_right_down}>
      <img src={arrowDown} alt='Icons' />
    </div>
  )
}

export function AccordionItemStyle(item) {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleExpand = React.useCallback(() => {
    console.log('expand', isOpen)
    return setIsOpen(true);
  }, [isOpen]);
  
  const handleClose = React.useCallback(() => {
    if (isOpen) return setIsOpen(false);
  }, [isOpen]);

  const formedLabel = React.useMemo(() => {
    return (
      <div className={isOpen ? s.label_open : s.label}>
        {makeArrow(true, isOpen)}

        <h3>
          {item.label}
        </h3>

        {makeArrow(false, isOpen)}
      </div>
    )
  }, [isOpen, item]);

  return (
    <AccordionItem
      title={formedLabel}
      onExpand={() => handleExpand()}
      onClose={() => handleClose()}
    >
      <div className={isOpen ? s.item : undefined}>
        {item.text}
      </div>
    </AccordionItem>
  )
}