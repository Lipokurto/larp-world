import { Item } from "../rules-text/type";
import pic from '../assets/orders/tigers.png'; 

import s from './orders.module.css';

export const tigersOrder: Item = {
  label: 'Рыцари Белого Тигра',
  element:
    <>
      <div className={s.info}>
        <div className={s.coat}>
          <img src={pic} alt='' />
        </div>

        <div className={s.text}>
          <div><i>Отличительные знаки: </i> Шлема стилизованные под морду тигра</div>
          <div><i>Девиз: </i> "Пусть рев услышат небеса!"</div>
          <div><i>Добродетель: </i> Дерзкая атака</div>
          <div><i>Предпочтительно оружие: </i> Щит и меч</div>
        </div>
      </div>

    <div className={s.block2}>
      <h3>Краткая история</h3>
      <div>Орден королевства Мидленд, заслужил свою известность за счет тактического применения своих сил</div>
      <div>Рыцари этого ордена хороши как в пешем строю, так и верхом, именно это свойств позволило молниеносно отбить несколько захваченных Тюдорами замков</div>
    </div>
  </>
}