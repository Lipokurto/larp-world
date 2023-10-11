import icon from '../../../assets/cards/icons/psyh.png';

import { Item } from '../../type';

import s from '../items.module.css';

export const psyh: Item = {
  label: 'Психоз',
  icon: icon,
  element:
    <>
      <div className={s.icon}><img src={icon} alt='' /></div>
      <div>Эти карты выдаются игрокам при посещении мертвяка по механике бросания кубиков (см. раздел <b>"Психозы"</b>).</div>
      <div>На карте коротко описано действие психоза.</div>
      <div>При получении нескольких психозов отыгрывается только тот у кого самый высший уровень.</div>
    </>
}