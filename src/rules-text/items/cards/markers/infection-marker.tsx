import icon from '../../../../assets/cards/icons/markers/infection.png';

import { Item } from '../../../type';

import s from '../../items.module.css';

export const infectionMarker: Item = {
  label: 'Маркер "Заражен"',
  icon: icon,
  element:
    <>
      <div className={s.icon}><img src={icon} alt='' /></div>
      <div>Маркер, обозначающий что персонаж заражен чумой. После присвоения игрок случайным образом выбирает для себя травму из 6 доступных, кроме тех, которые у него уже есть. При снятии заражения эта травмы так же пропадет.</div>
      <div className={s.label}><i>Общее</i></div>
      <ol className={s.listContainer}>
        <li>Если игрок попадает в мертвяк с этим маркером, то мертвяк увеличивается на 1 час.</li>
        <li>Данный маркер исцеляется действием <b>"Лечение болезни"</b>.</li>
        <li>Травма появившееся вместе с заражением так же исцеляется.</li>
        <li>Никак не меняет живые хиты персонажа.</li>
      </ol>
    </>
}