import { Item } from '../type';

import s from './battle.module.css';

export const battle: Item = {
  label: 'Битва',
  marker: 'Красный дым и звуковой сигнал',
  element:
    <div className={s.listContainer}>В течении этой фазы происходит боестолкновение между отрядами наемников до тех пор пока не будет выполнено условие для победы одной из сторон.</div>
}