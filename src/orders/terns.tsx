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
          <div><i>Отличительные знаки: </i> доспехи усеяны шипами и лозами</div>
          <div><i>Девиз: </i> "Смерти нет!"</div>
          <div><i>Добродетель: </i> Охота чудовищ вне церковных обычаев</div>
          <div><i>Предпочтительно оружие: </i> Щиты, мечи, топоры</div>
          <div><i>БОНУС: </i> Не могут быть сожраны чудовищем</div>
        </div>
      </div>

    <div className={s.block2}>
      <h3>Краткая история</h3>
      <div>Это орден охотников за чудовищами, рыцари ставят перед собой цель убить как можно больше чудовищ за свою жизнь, это их единственная цель и желание</div>
      <div>Доспехи рыцарей этого ордена покрыты шипами это сделано с целью чтоб чудовище не смогло тут же расправится с охотником</div>
    </div>
  </>
}