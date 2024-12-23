import icon from '../../../assets/cards/icons/thief.png';

import { Item } from '../../type';

import s from '../items.module.css';

export const thief: Item = {
  label: 'Воровство',
  icon: icon,
  element: (
    <>
      <div className={s.icon}><img src={icon} alt='' /></div>
      <div>Эти карты выдаются игрокам на старте игры, по требованию, с определенным лимитом на день.</div>
      <div>Служат маркерами кражи.</div>
      <div>Демонстрация этой карты в открытую считается признанием в воровстве.</div>
      <div>В случае обнаружения этой карты в своих вещах, вы вправе ее тихо уничтожить без последствия для себя.</div>
      <div>Можно приобрести в мастерского торговца.</div>
    </>
  ),
}