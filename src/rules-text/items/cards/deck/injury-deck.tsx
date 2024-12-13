import icon from '../../../../assets/cards/icons/deck/injury.png';

import { Item } from '../../../type';

import s from '../../items.module.css';

export const injuryDeck: Item = {
  label: 'Колода Травм',
  icon: icon,
  element:
    <>
      <div className={s.icon}><img src={icon} alt='' /></div>
      <div>Есть у каждого игрока на старте игры.</div>
      <div className={s.label}><i>Общее</i></div>
      <ol className={s.listContainer}>
        <li>Данная колода служит лишь подсказкой игрокам в отигрыше тех или иных травм.</li>
        <li>Данная колода никак не пополняется и не уменьшается.</li>
        <li>В колоде 6 карт на каждому травму.</li>
        <li>Колода храниться вверх рубашкой, все примененные травмы переворачиваются и носятся в колоде до их излечения.</li>
      </ol>
    </>
}