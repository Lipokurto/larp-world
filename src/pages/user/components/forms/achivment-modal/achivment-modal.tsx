import React from 'react';
import { RiCloseLine } from 'react-icons/ri';
import { AchivmentItem } from '../../../../../redux/app-data-slice';

import s from './achivment-modal.module.css';
import { NavButton } from '../../../../../components';

type Props = {
  item: AchivmentItem | null,
  setIsOpen: (arg0: boolean) => void,
}

export function AchivmentModal(props: Props): JSX.Element {
  return (
    <>
      <div className={s.darkBG} onClick={() => props.setIsOpen(false)} />

      <div className={s.modal}>
        <div className={s.modalHeader}>
          <h5 className={s.heading}>{props.item?.label}</h5>
        </div>

        <div className={s.modalContent}>
          <div style={{ marginBottom: '10px' }}>
            <img src={props.item?.img} style={{ height: '80px' }} />
          </div>
          <div>{props.item?.about}</div>
        </div>

        <button className={s.closeBtn} onClick={() => props.setIsOpen(false)}>
          <RiCloseLine style={{ marginBottom: '-3px' }} />
        </button>

        <div className={s.actionsContainer}>
          <NavButton text='Закрыть' onclick={() => props.setIsOpen(false)} />
        </div>
      </div>
    </>
  )
}