import { Item } from "../rules-text/type";

import midlendCoat from '../assets/coats/midlend.png'; 

import s from './history.module.css';

export const midlendHistory: Item = {
  label: 'Королевство Мидленд',
  element:
    <>
      <div className={s.info}>
        <div className={s.coat}>
          <img src={midlendCoat} alt='' />
        </div>

        <div className={s.text}>
          <div><i>Правитель: </i>король Ричманд</div>
          <div><i>Столица: </i>город Виндем</div>
          <div><i>Герб: </i>Золотой орел - символ династии королей, белая башня - символ столицы</div>
          <div><i>Цвета: </i>Красный и белый - для подданных. Королевские цвета - синий с золотом</div>
        </div>
      </div>

    <div className={s.block2}>
      <h3>Краткая история</h3>
      <div>Столица была основная императором Гейзерихом. Считается что королевский род имеет прямую связь с ним</div>
      <div>Поэтому Мидленд исконно считается королевством претендующим на все земли бывшей империи</div>
      <br/>
      <div>Общеизвестна легедна о черном солнце что поднялось над Виндем перед тем как империя Гейзериха перестала существовать, вместе с населением города</div>
    </div>
  </>
}