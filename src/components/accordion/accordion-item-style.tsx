import React from "react";
import { AccordionItem } from "react-sanfona";

import arrowDown from '../../assets/icons/icon-arrow-down.svg';
import arrowUp from '../../assets/icons/icon-arrow-up.svg';
import { Item } from "../../rules-text/type";

import s from './accordion-item-style.module.css';

function makeArrow(isLeft: boolean, isOpen: boolean): JSX.Element {
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

export function AccordionItemStyle(item: Item): JSX.Element {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const handleExpand = React.useCallback(() => {
    return setIsOpen(true);
  }, []);
  
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
      key={item.label}
      title={formedLabel}
      onExpand={() => handleExpand()}
      onClose={() => handleClose()}
    >
      <div className={isOpen ? s.item : undefined}>
        {item.element}
      </div>
    </AccordionItem>
  )
}