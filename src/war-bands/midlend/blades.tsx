import React from "react";

import { Item } from '../../rules-text/type';
import image from '../../assets/bands/blades.png';
import { ImagesAdaptive, ItemModal } from '../../components';

import img01 from '../../assets/bands/blades/01.png';
import img02 from '../../assets/bands/blades/02.png';
import img03 from '../../assets/bands/blades/03.png';

import s from '../war-bands.module.css';

const images = [img01, img02, img03];

const modal: Item = {
  label: 'Клинки Виндема',
  element: <>
      <div>
        <div>
          <div><b>Фракционный цвет:</b></div>
          <div>Костюм персонажа должен быть выполнен в цветах фракции и отряда, за который он выступает.</div>
          <div className={s.block}>
            <div className={s.colorBlock}><div className={s.circle} style={{backgroundColor: 'blue'}} />Синий</div>
            <div className={s.colorBlock}><div className={s.circle} style={{backgroundColor: 'wheat'}} />Бежевый</div>
            <div className={s.colorBlock}><div className={s.circle} style={{backgroundColor: 'gray'}} />Серый</div>
          </div>
        </div>

        <div>
          <div className={s.textBlock}>
            <div><b>Головной убор:</b></div>
            <div>Каль, берет, валяная шляпа, кожанная широкополая шляпа, шаперон, худ и т.д.</div>
          </div>

          <div className={s.textBlock}>
            <div><b>Тело:</b></div>
            <div>Камиза, вамс, котарди, разрезанные рукава, перчатки, кожанный жилет, доспехи, перчатки.</div>
          </div>

          <div className={s.textBlock}>
            <div><b>Ноги:</b></div>
            <div>Шоссы, броня, кожаные сапоги или качественно выполненные накладки на современную обувь.</div>
          </div>

          <div className={s.textBlock}>
            <div><b>Детали:</b></div>
            <div>Доспех с символикой отряда в виде щитков, амулетов или росписей.</div>
          </div>
        </div>

        <div className={s.image}>
          <ImagesAdaptive images={images} />
        </div>
      </div>
    </>
}

function Blades(): JSX.Element {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  
  return (
    <>
      <div className={s.info}>
        <div>
          <img src={image} alt='' width={300}/>
        </div>

        <div className={s.text}>
          <div><i>Символ отряда: </i> два скрещенных меча на синем фоне.</div>
          <div><i>Визуальная стилистика: </i> пехота позднего средневековья.</div>
          <br/>
          <div>
            <div><b>Кузнецы-многостаночники</b></div> 
            <div>
               Кузнецы Клинков Виндема, находясь в своем лагере, могут ремонтировать по два комплекта доспехов на одном верстаке одновременно.
            </div>
            
            <button className={s.requirementButton} onClick={() => setIsOpen(true)}>Требования к антуражу</button>
          </div>
        </div>
      </div>

      <div className={s.block2}>
        <h3>Описание</h3>
        <div>
          Знаменитый и крупный наёмничий отряд из столичного региона Мидленда.
          Существует уже более века и принимал участие во многих войнах.
          Несмотря на своё происхождение и приверженность Мидлендской короне,
          в мирное для королевства время принимали участие в войнах других государств.
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

export const blades: Item = {
  label: 'Клинки Виндема',
  element: <Blades />
}