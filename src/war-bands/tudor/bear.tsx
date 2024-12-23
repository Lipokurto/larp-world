import React from 'react';

import { Item } from '../../rules-text/type';
import { ImagesAdaptive, ItemModal } from '../../components';
import image from '../../assets/bands/bears.png';

import img01 from '../../assets/bands/bears/01.png'
import img02 from '../../assets/bands/bears/02.png'
import img03 from '../../assets/bands/bears/03.png'

import s from '../war-bands.module.css';

const images = [img01, img02, img03];

const modal: Item = {
  label: 'Отряд Рыжего медведя',
  element: (
    <>
      <div>
        <div>
          <div><b>Фракционный цвет:</b></div>
          <div>Костюм персонажа должен быть выполнен в цветах фракции и отряда, за который он выступает.</div>
          <div className={s.block}>
            <div className={s.colorBlock}><div className={s.circle} style={{ backgroundColor: 'Red' }} />Красный</div>
            <div className={s.colorBlock}><div className={s.circle} style={{ backgroundColor: 'gold' }} />Желтый</div>
            <div className={s.colorBlock}><div className={s.circle} style={{ backgroundColor: '#202020' }} />Черный</div>
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
  ),
}

function Bear(): JSX.Element {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  return (
    <>
      <div className={s.info}>
        <div>
          <img src={image} alt='' width={300}/>
        </div>

        <div className={s.text}>
          <div><i>Символ отряда: </i> рыжий медведь на черном фоне.</div>
          <div><i>Визуальная стилистика: </i> пехота позднего средневековья.</div>
          <br/>
          <div>
            <div><b>Налаженное производство</b></div>
            <div>
              Кузницы Медведей производят вдвое больше ремкомплектов за стандартные время и стоимость.
            </div>

            <button className={s.requirementButton} onClick={() => setIsOpen(true)}>Требования к антуражу</button>
          </div>
        </div>
      </div>

      <div className={s.block2}>
        <h3>Описание</h3>
        <div>
          Отряд из южного региона Империи, что завоевал себе славу во многочисленных сражениях в ходе войны с Королевством Балден.
          По легенде основатель отряда голыми руками одолел медведя, разорвав ему пасть.
          Глава отряда владеет большим кузнечным производством по всей территории империи Тюдор
          и в мирное время вкладывает большие деньги на содержание и обучение наёмников из своего отряда.
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

export const bear: Item = {
  label: 'Отряд Рыжего медведя',
  element: <Bear />,
}