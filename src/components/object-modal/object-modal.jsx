import React from "react";
import { RiCloseLine } from "react-icons/ri";
import { NavButton } from "../button/nav-button";

import s from './object-modal.module.css';

export function ObjectModal({title, object, setIsOpen }) {
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
          {object}
        </div>

        <div className={s.actionsContainer}>
          <NavButton text='Закрыть' onclick={() => setIsOpen(false)} />
        </div>
      </div>
    </div>
  </>
  )
}