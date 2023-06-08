import { Item } from "../type";

import s from './actions.module.css';

export const ransom: Item = {
  label: 'Выкуп пленника',
  element:
    <>
      <div className={s.label}>Условия проведения:</div>
      <div className={s.listContainer}>
        <li>В лагере находится интендант</li>
        <li>В лагере находится пленник</li>
      </div>

      <div className={s.label}>Механика:</div>
      <div className={s.listContainer}>
        <li>Интендант и пленник выясняют максимальную сумму хитов у персонажа</li>
        <li>Интендант передает указанное количество средств</li>
        <li>Пленник должен с повязкой "Мертв" добраться до своего родного лагеря и вернуться в игру тем же персонажем</li>
      </div>

      <div className={s.label}>Возвращение пленника в лагерь:</div>
      <div className={s.listContainer}>
        <li>Пленник возвращается в свой родной лагерь кратчайшим путем с повязкой "Мертв"</li>
        <li>Прийдя в свой родной лагерь пленник переходит в состояние "Тяжело ранен"</li>
      </div>
    </>
}