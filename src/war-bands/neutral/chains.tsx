import React from "react";

import { Item } from "../../rules-text/type";
import { ImagesAdaptive, ItemModal } from '../../components';
import image from '../../assets/bands/chains.png';

import img01 from '../../assets/bands/chains/01.png';
import img02 from '../../assets/bands/chains/02.png';
import img03 from '../../assets/bands/chains/03.png';

import s from '../war-bands.module.css';

const images = [img01, img02, img03];

const modal: Item = {
  label: 'Рыцари Святой Железной Цепи',
  element: <>
      <div>
        <div>
          <div><b>Фракционный цвет:</b></div>
          <div>Костюм персонажа должен быть выполнен в цветах фракции и отряда, за который он выступает.</div>
          <div className={s.block}>
            <div className={s.colorBlock}><div className={s.circle} style={{backgroundColor: '#00bfff'}} />Голубой</div>
            <div className={s.colorBlock}><div className={s.circle} style={{backgroundColor: 'gray'}} />Серый</div>
            <div className={s.colorBlock}><div className={s.circle} style={{backgroundColor: '#ffffff'}} />Белый</div>
          </div>
        </div>

        <div>
          <div className={s.textBlock}>
            <div><b>Головной убор:</b></div>
            <div>Каль, шаперон, худ, койф и т.д. Шлем - стилизация на шлемы позднего средневековья. Богатая отделка, плюмажи и инкрустация обязательны.</div>
          </div>

          <div className={s.textBlock}>
            <div><b>Тело:</b></div>
            <div>Камиза,шоссы, дублет, котарди и т.д. Стилизация на доспехи позднего средневековья (белый, готический).</div>
          </div>

          <div className={s.textBlock}>
            <div><b>Ноги:</b></div>
            <div>Шоссы, полные латные ноги, сабатоны, ботфорты и другая кожаная обувь по эпохе.</div>
          </div>

          <div className={s.textBlock}>
            <div><b>Детали:</b></div>
            <div>Обязательно ношение котты\налатника или росписи доспеха в соответствии с фракционным символом. Аксессуары с символикой отряда в виде щитков, амулетов или росписей.</div>
          </div>
        </div>

        <div className={s.image}>
          <ImagesAdaptive images={images} />
        </div>
      </div>
    </>
}

function Chains(): JSX.Element {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  return (
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

          <button className={s.requirementButton} onClick={() => setIsOpen(true)}>Требования к антуражу</button>
        </div>
      </div>

      <div className={s.block2}>
        <h3>Описание</h3>
        <div>
          Орден, подчиненный Святому Престолу. Как слуги церкви, рыцари Святой Железной Цепи стоят вне национальных войн и принимают в орден воинов из разных наций.
          Только очень богатые дворяне могут отправить своих отпрысков в этот орден.
        </div>
      </div>

      {isOpen && (
        <ItemModal
          setIsOpen={setIsOpen}
          item={modal}
        />
      )}
    </>
  )
}

export const chainsOrder: Item = {
  label: 'Рыцари Святой Железной Цепи',
  element: <Chains />
   
}