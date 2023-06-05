import { Item } from "../rules-text/type";
import pic from '../assets/orders/heat.png'; 

import s from './orders.module.css';

export const heatOrder: Item = {
  label: 'Рыцари Святого Пламени',
  element:
    <>
      <div className={s.info}>
        <div className={s.coat}>
          <img src={pic} alt='' />
        </div>

        <div className={s.text}>
          <div><i>Отличительные знаки: </i> Лица спрятаны бинтами, масками на головах корона из гвоздей</div>
          <div><i>Девиз: </i> "Пламя несет свет!"</div>
          <div><i>Добродетель: </i> Поиск и уничтожение еретиков</div>
          <div><i>Предпочтительно оружие: </i> Двуручное клинковое</div>
          <div><i>БОНУС: </i> Первым психозом берет "Фанатизм"</div>
        </div>
      </div>

    <div className={s.block2}>
      <h3>Краткая история</h3>
      <div>Состав ордена это рыцари настолько приисполненные верой что смогли пройти крещение пламенем, пройдя 12 шагов чистоты в пылающем коридоре</div>
      <div>Их лица обезображены, многие ослепли, но из-за этого они научились чуять грехи и страхи людей на новом уровне</div>
    </div>
  </>
}