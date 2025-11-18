import { RiCloseLine } from 'react-icons/ri';
import { AchivmentItem } from '../../../../../redux/app-data-slice';
import { NavButton } from '../../../../../components';
import bgDiamond from './../../../../../assets/achivments/large-icons/bg-diamond.svg';

import s from './achivment-modal.module.css';

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
            <img src={props.item?.img} className={s.image} />
            <img src={bgDiamond} className={s.diamond} />
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