import { Item } from "../../rules-text/type";

import image from '../../assets/bands/chains.png';

import s from '../war-bands.module.css';

export const chainsOrder: Item = {
  label: 'Рыцари Святой Железной Цепи',
  element:
    <>
      <div className={s.info}>
        <div>
          <img src={image} alt='' width={300}/>
        </div>

        <div className={s.text}>
          <div><i>Отличительные знаки: </i> рыцари с религиозной атрибутикой.</div>
          <div><i>Визуальная стилистика: </i> украшенные доспехи с религиозной символиков.</div>
          <br/>
          <div>
            <div><b>Церковное снабжение</b></div> 
            <div>
              Gри выходе из мертвятника получают подёмные деньги.
            </div>
          </div>
          <br/>
          <div>
            <div><b>Строгая доктрина</b></div> 
            <div>
              Должны следовать кодексу ордена (согласуется с капитаном команды).
            </div>
          </div>
        </div>
      </div>

      <div className={s.block2}>
        <h3>Описание</h3>
        <div>
          Орден, подчиненный Святому Престолу. Как слуги церкви, рыцари Святой Железной Цепи стоят вне национальных войн и принимают в орден воинов из разных наций.
          Только очень богатые дворяне могут отправить своих отпрысков в этот орден.
        </div>
      </div>
    </>
}