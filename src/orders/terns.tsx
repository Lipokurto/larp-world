import { Item } from "../rules-text/type";
import pic from '../assets/orders/terns.png'; 

import s from './orders.module.css';

export const ternsOrder: Item = {
  label: 'Рыцари Кровавых Терниев',
  element:
    <>
      <div className={s.info}>
        <div className={s.coat}>
          <img src={pic} alt='' />
        </div>

        <div className={s.text}>
          <div><i>Отличительные знаки: </i> доспехи усеянные шипами и лозой</div>
          <div><i>Девиз: </i> "Смерти нет!"</div>
          <div><i>Добродетель: </i> Охота на чудовищ вне церковных обычаев</div>
          <div><i>Предпочтительно оружие: </i> Щиты, мечи, топоры</div>
          <div><i>БОНУС: </i> Не могут быть сожраны чудовищем</div>
        </div>
      </div>

    <div className={s.block2}>
      <h3>Краткая история</h3>
      <div>Это орден охотников на чудовищ. Рыцари ставят перед собой цель убить как можно больше чудовищ за свою жизнь. Это их единственная цель и желание.
      Доспехи рыцарей этого ордена покрыты шипами. Это сделано для защиты охотника от чудовища.</div>
    </div>
  </>
}