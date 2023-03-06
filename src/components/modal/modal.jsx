import React from "react";
import { RiCloseLine } from "react-icons/ri";

import { NavButton } from "../button/nav-button";
import { List } from "../list/list";

import s from './modal.module.css';

export function Modal({ title, list, setIsOpen, link }) {
  React.useEffect(() => {
    document.body.style.overflowY = 'hidden';
  }, []);

  const handleClose = React.useCallback(() => {
    document.body.style.overflowY = 'visible';

    setIsOpen(false);
  }, [setIsOpen]);

  return (
    <>
      <div className={s.darkBG} onClick={handleClose} />
      <div className={s.centered}>
        <div className={s.modal}>
          <div className={s.modalHeader}>
            <h5 className={s.heading}>{title}</h5>
          </div>
          
          <button className={s.closeBtn} onClick={handleClose}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>

          <div className={s.modalContent}>
            <List
              setIsOpen={setIsOpen} 
              list={list}
              link={link} 
            />
          </div>

          <div className={s.actionsContainer}>
            <NavButton text='Закрыть' onclick={handleClose} />
          </div>
        </div>
      </div>
    </>
  )
}