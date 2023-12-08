import React from "react";

import { Item } from '../../rules-text/type';
import image from '../../assets/bands/axes.png';
import { ImagesAdaptive, ItemModal } from '../../components';

import img01 from '../../assets/bands/axes/01.png';
import img02 from '../../assets/bands/axes/02.png';
import img03 from '../../assets/bands/axes/03.png';

import s from '../war-bands.module.css';

const images = [img01, img02, img03];

const modal: Item = {
  label: 'Горные топоры',
  element: <>
      <div>
        <div>
          <div><b>Фракционный цвет:</b></div>
          <div>Костюм персонажа должен быть выполнен в цветах фракции и отряда, за который он выступает.</div>
          <div className={s.block}>
            <div className={s.colorBlock}><div className={s.circle} style={{backgroundColor: 'gray'}} />Серый</div>
            <div className={s.colorBlock}><div className={s.circle} style={{backgroundColor: 'brown'}} />Коричневый</div>
            <div className={s.colorBlock}><div className={s.circle} style={{backgroundColor: 'wheat'}} />Бежевый</div>
          </div>
        </div>

        <div>
          <div className={s.textBlock}>
            <div><b>Головной убор:</b></div>
            <div>Валяная  и вязаная шапка, 4х-клинная шапка, худ. Шлем норманка или Гьёрмундбю.</div>
          </div>

          <div className={s.textBlock}>
            <div><b>Тело:</b></div>
            <div>Рубаха льняная и шерстяная, плащ, кольчуга, ламелляр, чешуя.</div>
          </div>

          <div className={s.textBlock}>
            <div><b>Ноги:</b></div>
            <div>Стилизация на раннесредневековую обувь и штаны.</div>
          </div>

          <div className={s.textBlock}>
            <div><b>Детали:</b></div>
            <div>Доспех и аксессуары с символикой отряда в виде щитков, амулетов или росписей.</div>
          </div>
        </div>

        <div className={s.image}>
          <ImagesAdaptive images={images} />
        </div>
      </div>
    </>
}

function Axes(): JSX.Element {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  return (
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

            <button className={s.requirementButton} onClick={() => setIsOpen(true)}>Требования к антуражу</button>
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

      {isOpen && (
        <ItemModal
          setIsOpen={setIsOpen}
          item={modal}
        />
      )}
    </>
  )
}

export const axes: Item = {
  label: 'Горные топоры',
  element: <Axes />
    
}