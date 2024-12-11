import React from "react";

import { Item } from "../../rules-text/type";
import { ImagesAdaptive, ItemModal } from '../../components';
import image from '../../assets/bands/dogs.png';

import img01 from '../../assets/bands/dogs/01.png';
import img02 from '../../assets/bands/dogs/02.png';
import img03 from '../../assets/bands/dogs/03.png';

import s from '../war-bands.module.css';

const images = [img01, img02, img03];

const modal: Item = {
  label: 'Рыцари Черного пса',
  element: <>
      <div>
        <div>
          <div><b>Фракционный цвет:</b></div>
          <div>Костюм персонажа должен быть выполнен в цветах фракции и отряда, за который он выступает.</div>
          <div className={s.block}>
            <div className={s.colorBlock}><div className={s.circle} style={{backgroundColor: 'black'}} />Черный</div>
            <div className={s.colorBlock}><div className={s.circle} style={{backgroundColor: 'red'}} />Красный</div>
            <div className={s.colorBlock}><div className={s.circle} style={{backgroundColor: 'gray'}} />Серый</div>
          </div>
        </div>

        <div>
          <div className={s.textBlock}>
            <div><b>Головной убор:</b></div>
            <div>Шаперон, худ, койф и т.д. Шлем - стилизация на шлемы раннего и позднего средневековья с отделкой мехом, шкурами, черепами и пр.элементами в стилистике фракции.</div>
          </div>

          <div className={s.textBlock}>
            <div><b>Тело:</b></div>
            <div>Рубаха, поддоспешник, плащ и т.д. Стилизация на доспехи раннего средневековья с отдельными латными элементами.</div>
          </div>

          <div className={s.textBlock}>
            <div><b>Ноги:</b></div>
            <div>Шоссы, юбки, латные элементы, ботфорты и другая кожаная обувь по эпохе.</div>
          </div>

          <div className={s.textBlock}>
            <div><b>Детали:</b></div>
            <div>Обязательно ношение шкур, костей, черепов и прочих элементов в соответствии с фракционным стилем. Аксессуары с символикой отряда в виде щитков, амулетов или росписей.</div>
          </div>
        </div>

        <div className={s.image}>
          <ImagesAdaptive images={images} />
        </div>
      </div>
    </>
}

function Dogs(): JSX.Element {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  return (
    <>
      <div className={s.info}>
        <div>
          <img src={image} alt='' width={300}/>
        </div>

        <div className={s.text}>
          <div><i>Отличительные знаки: </i> броня чёрного цвета, элементы звериной атрибутики в костюмах (звериные головы вместо шлемов и т.д.).</div>
          <div><i>Предпочтительное оружие: </i> Пики, алебарды, двуручные мечи</div>
          <br/>
          <div>
            <div><b>Жажда крови</b></div> 
            <div>
              Если игрок имеет ..., следующая смерть для него сокращается на 1 час.
            </div>
          </div>

          <button className={s.requirementButton} onClick={() => setIsOpen(true)}>Требования к антуражу</button>
        </div>
      </div>

      <div className={s.block2}>
        <h3>Описание</h3>
        <div>
          Отряд, сформированный из убийц, разбойников и прочего сброда, выпущенного из тюрем, специально для войны. 
          Также данный отряд не имеет постоянного командира, у них действует правило, что командует сильнейший. 
          Любой желающий может бросить вызов вожаку и занять его место при победе.
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

export const dogs: Item = {
  label: 'Рыцари Черного пса',
  element: <Dogs />
    
}