import icon from '../../../assets/cards/icons/scull.png';

import { Item } from '../../type';

import s from '../items.module.css';

export const scull: Item = {
  label: 'Череп',
  icon: icon,
  element:
    <>
      <div className={s.icon}><img src={icon} alt='' /></div>
      <div>Эта карта нужна для обозначения количества возможных лечений чудовища в своем логове.</div>
      <div>Чудовище присваивает своему логову <b>"Череп"</b> если довел до лагеря пленного игрока-человека.</div>
      <div><b>"Череп"</b> используется, когда чудовище желает мгновенно восстановить 5 хитов в логове.</div>
      <div>Может сопровождаться различным видом антуража (согласуется с мастерами).</div>
    </>
}