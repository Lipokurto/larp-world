import { Item } from '../../rules-text/type';

import image from '../../assets/bands/axes.png';

import s from '../war-bands.module.css';

export const axes: Item = {
  label: 'Горные топоры',
  element:
    <>
      <div className={s.info}>
        <div>
          <img src={image} alt='' width={300}/>
        </div>

        <div className={s.text}>
          <div><i>Символ отряда: </i> боевой топор на белом фоне.</div>
          <div><i>Визуальная стилистика: </i> норманы.</div>
          <br/>
          <div>
            <div><b>Местные</b></div> 
            <div>
              Имеют возможность установить ресурсную постройку в лагере.
            </div>
          </div>
        </div>
      </div>

      <div className={s.block2}>
        <h3>Описание</h3>
        <div>
          Наёмники родом из горных поселений близ Солема.
          Обычно промышляют рейдами на земли Альянса Панерия и Герцогства Валлатория,
          но с момента начала войны Мидленда с Империей Тюдор подписали контракт с Мидлендской Короной.
          Близ Солема имеют обустроенный аванпост рядом с одной из шахт, которая принадлежит их главарю.
        </div>
      </div>
    </>
}