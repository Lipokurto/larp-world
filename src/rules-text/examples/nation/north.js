import male from '../../../assets/rules/nation/north/male.png';
import female from '../../../assets/rules/nation/north/female.png';
import north01 from '../../../assets/rules/nation/north/01.jpg';
import north02 from '../../../assets/rules/nation/north/02.jpg';
import north03 from '../../../assets/rules/nation/north/03.jpg';
import north04 from '../../../assets/rules/nation/north/04.jpg';

import s from './nation.module.css';

export const northFasionNorm = {
  label: 'Повседневная мода',
  text: 
    <div className={s.container}>
      <div>Суровые северные земли, не богаты обильными урожаями, что толкнуло северян к осваиванию ремесла скотоводства, активным морским рейдами и наемничеству</div>
      <div>Одежда должна был удобной, темлой и защитной</div>
      <div>Обязательным явлением среди северян считается оружие, даже у женщин,</div>
      <div class={s.sub_container}>
        <img src={north01} alt='Fasion' />
        <img src={north02} alt='Fasion' />
      </div>
    </div>
}

export const northFasionHigh = {
  label: 'Высокая мода',
  text: 
    <div className={s.container}>
      <div>Чем больше у тебя трофеев и чем грознее твой вид - тем более ты опытный воин, а значит успешный северянин</div>
      <div>Красота постигается в воинском вооружении, без него богатство не сохранить, и тем более не приумножить</div>
      <div class={s.sub_container}>
        <img src={north03} alt='Fasion' />
        <img src={north04} alt='Fasion' />
      </div>
    </div>
}


export const north = {
  label: 'Северяне',
  text: 
    <>      
      <div>      
        <div class={s.container_first}>
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