import { Item } from "../rules-text/type";
// import chains from '../assets/orders/chains.png'; 

import s from './orders.module.css';

export const templarsOrder: Item = {
  label: 'Храмовники',
  element:
    <>
      <div className={s.info}>
        <div className={s.coat}>
          {/* <img src={chains} alt='' /> */}
        </div>

        <div className={s.text}>
          <div><i>Ждем текст от Баси по этому ордену </i> Ждем текст от Баси по этому ордену</div>
          <div><i>Девиз: </i> "текст"</div>
          <div><i>Добродетель: </i> текст</div>
          <div><i>Предпочтительно оружие: </i> текст</div>
        </div>
      </div>

    <div className={s.block2}>
      <h3>Краткая история</h3>
      <div>Орден, подчиненный Святому Престолу. Как слуги церкви, рыцари Святой Железной Цепи стоят вне национальных войн и принимают к себе воинов из разных наций</div>
      <div>Только очень богатые дворяне могут отправить своих отпрысков в этот орден</div>
    </div>
  </>
}