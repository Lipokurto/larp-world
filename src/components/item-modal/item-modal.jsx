import React from "react";
import { RiCloseLine } from "react-icons/ri";

import { NavButton } from "../button/nav-button";

import s from './item-modal.module.css';

export function ItemModal({ title, text, setIsOpen }) {
  return (
    <>
      <div className={s.darkBG} onClick={() => setIsOpen(false)} />
      <div className={s.centered}>
        <div className={s.modal}>
          <div className={s.modalHeader}>
            <h5 className={s.heading}>{title}</h5>
          </div>
          
          <button className={s.closeBtn} onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>

          <div className={s.modalContent}>
            <h1>{text.label}</h1>
            <img src='' alt='Icon' />
            {text.text}
          </div>

          <div className={s.actionsContainer}>
            <NavButton text='Закрыть' onclick={() => setIsOpen(false)} />
          </div>
        </div>
      </div>
    </>
  )
}