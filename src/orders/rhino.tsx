import { Item } from "../rules-text/type";
import pic from '../assets/orders/rino.png'; 

import s from './orders.module.css';

export const rhinoOrder: Item = {
  label: 'Рыцари Священного Пурпурного Носорога',
  element:
    <>
      <div className={s.info}>
        <div className={s.coat}>
          <img src={pic} alt='' />
        </div>

        <div className={s.text}>
          <div><i>Отличительные знаки: </i> Пурпурные плащи, шлема украшены рогами носорога</div>
          <div><i>Девиз: </i> "Нас не остановить!"</div>
          <div><i>Добродетель: </i> Не покидать строй</div>
          <div><i>Предпочтительно оружие: </i> Алебарды</div>
        </div>
      </div>

    <div className={s.block2}>
      <h3>Краткая история</h3>
      <div>Авангард армии Тюдор, который быстрым штурмом захватил ключевую крепость, и несколько месяцев ее удерживал в одиночку до прибытия подкрепления</div>
      <div>Считается самым элитным подразделением армии Тюдор</div>
      <div>В этот орден берут только лучших представителей дворянства</div>
    </div>
  </>
}