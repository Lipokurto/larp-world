import male from '../../../assets/rules/nation/north/male.png';
import female from '../../../assets/rules/nation/north/female.png';
import north01 from '../../../assets/rules/nation/north/01.jpg';
import north02 from '../../../assets/rules/nation/north/02.jpg';
import north03 from '../../../assets/rules/nation/north/03.jpg';
import north04 from '../../../assets/rules/nation/north/04.jpg';

import { ImagesAdaptive } from '../../../components';
import { Item } from '../../type';

import s from './nation.module.css';

const casual = [north01, north02];
const high = [north03, north04];

export const northFasionNorm: Item = {
  label: 'Повседневная мода',
  element:
    <div className={s.container}>
      <div>Суровые северные земли, не богаты обильными урожаями, что толкнуло северян к осваиванию ремесла скотоводства, активным морским рейдами и наемничеству</div>
      <div>Одежда должна быть удобной, теплой и крепкой</div>
      <div>Обязательным явлением среди северян считается оружие, даже у женщин,</div>
      <ImagesAdaptive images={casual} />
    </div>
}

export const northFasionHigh: Item = {
  label: 'Высокая мода',
  element:
    <div className={s.container}>
      <div>Чем больше у тебя трофеев и чем грознее твой вид - тем более ты опытный воин, а значит успешный северянин</div>
      <div>Красота постигается в воинском вооружении, без него богатство не сохранить, и тем более не приумножить</div>
      <ImagesAdaptive images={high} />
    </div>
}


export const north: Item = {
  label: 'Северяне',
  element:
    <>      
      <div>      
        <div className={s.container_first}>
          <img src={male} alt='Fasion' />
          <img src={female} alt='Fasion' />
        </div>
      </div>

      <h3>Описание</h3>
      <div><b>Внешность:</b>  Русые или светло темные волосы, светлая кожа, длинные волосы, пышные бороды</div>
      <div><b>Снаряжение:</b> Кожанки, кольчуги, топоры, копья и круглые щиты</div>
      <div><b>Распространение:</b> Северные земли</div>
      <div><b>Религия:</b>  Культ предков</div>
      <div><b>Речь:</b>  Грубый германский акцент</div>
    </>
}