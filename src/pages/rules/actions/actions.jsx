import React from "react";
import { Accordion, AccordionItem } from 'react-sanfona';

import arrowDown from '../../../assets/icons/icon-arrow-down.svg';
import arrowUp from '../../../assets/icons/icon-arrow-up.svg';
import { Chapter } from "../../../components/chapter/chapter";
import { tithe, assault, search, prison, ransom, pray, fire, globalPray, eat, ham } from "../../../rules-text/actions";

import s from './actions.module.css';

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

function ActionItem(item) {
  const [isOpen, setIsOpen] = React.useState(false);

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
  }, [isOpen, item.label]);

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

export function Actions() {
  return (
    <>
      <div className={s.container}>
        <Chapter chapter='ИГРОВЫЕ ДЕЙСТВИЯ' />

        <div className={s.block}>
          <h2>Боевые действия</h2>
          <Accordion>
            {ActionItem(prison)}
            {ActionItem(ransom)}
            {ActionItem(assault)}
            {ActionItem(search)}
          </Accordion>
        </div>

        <div className={s.block}>
          <h2>Религиозные действия</h2>
            <Accordion>
              {ActionItem(pray)}
              {ActionItem(fire)}
              {ActionItem(tithe)}
              {ActionItem(globalPray)}
            </Accordion>
        </div>

        <div className={s.block}>
          <h2>Чудовищные действия</h2>
            <Accordion>
              {ActionItem(eat)}
              {ActionItem(ham)}
            </Accordion>
        </div>
      </div>
    </>
  )
}