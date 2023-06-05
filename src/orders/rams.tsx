import { Item } from "../rules-text/type";
import pic from '../assets/orders/rams.png'; 

import s from './orders.module.css';

export const ramOrder: Item = {
  label: 'Рыцари Стального Барана',
  element:
    <>
      <div className={s.info}>
        <div className={s.coat}>
          <img src={pic} alt='' />
        </div>

        <div className={s.text}>
          <div><i>Отличительные знаки: </i> Шлема увенчаны рогами</div>
          <div><i>Девиз: </i> "Жизнь за удар!"</div>
          <div><i>Добродетель: </i> Никогда не отступают</div>
          <div><i>Предпочтительно оружие: </i> Копья или пики</div>
        </div>
      </div>

    <div className={s.block2}>
      <h3>Краткая история</h3>
      <div>Один из рыцарских орденов империи Тюдор, знамениты своим фланговым ударом кавалерии. Предпочитают средни и тяжелые доспехи</div>
      <div>К этому ордену примыкают дворянские бастарды или безземельная знать, способная позволить себе тяжелый доспех</div>
    </div>
  </>
}