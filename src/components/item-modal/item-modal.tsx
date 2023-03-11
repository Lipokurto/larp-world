import React from "react";
import { RiCloseLine } from "react-icons/ri";
import { Item } from "../../rules-text/type";

import { NavButton } from "../button/nav-button";

import s from './item-modal.module.css';

type Props = {
  item: Item | null,
  setIsOpen: (arg0: boolean) => void,
  title?: string,
}

export function ItemModal({ title, item, setIsOpen }: Props) {
  React.useEffect(() => {
    document.body.style.overflowY = 'hidden';
  }, []);

  const handleClose = React.useCallback(() => {
    document.body.style.overflowY = 'visible';

    setIsOpen(false);
  }, [setIsOpen]);

  const content = React.useMemo(() => {
    if (item) {
      return (
        <div className={s.modalContent} >
          <b style={{ fontSize: '20px' }}>{item.label}</b>
          {item.element}
        </div>
      )
    }

    return (
      <h1>А нету контента</h1>
    )
  }, []);

  return (
    <>
      <div className={s.darkBG} onClick={handleClose} />
      
      <div className={s.modal} >
        <div className={s.modalHeader}>
          {/* TODO: Выпилить нахрен title */}
          <h5 className={s.heading}>{title}</h5> 
        </div>
        
        <button className={s.closeBtn} onClick={handleClose}>
          <RiCloseLine style={{ marginBottom: "-3px" }} />
        </button>

        {content}
        
        <div className={s.actionsContainer}>
          <NavButton text='Закрыть' onclick={handleClose} />
        </div>
      </div>
    </>
  )
}