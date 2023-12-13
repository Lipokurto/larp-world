import React from "react";

import { Item } from '../../rules-text/type';
import { ImagesAdaptive, ItemModal } from '../../components';
import image from '../../assets/bands/knights.png';

import img01 from '../../assets/bands/feather/01.png'
import img02 from '../../assets/bands/feather/02.png'
import img03 from '../../assets/bands/feather/03.png'

import s from '../war-bands.module.css';

const images = [img01, img02, img03];

const modal: Item = {
  label: 'Рыцари пера',
  element: <>
      <div>
        <div>
          <div><b>Фракционный цвет:</b></div>
          <div>Костюм персонажа должен быть выполнен в цветах фракции и отряда, за который он выступает.</div>
          <div className={s.block}>
            <div className={s.colorBlock}><div className={s.circle} style={{backgroundColor: 'green'}} />Зеленый</div>
            <div className={s.colorBlock}><div className={s.circle} style={{backgroundColor: 'gray'}} />Серый</div>
          </div>
        </div>

        <div>
          <div className={s.textBlock}>
            <div><b>Головной убор:</b></div>
            <div>Каль, берет, шаперон, худ, койф и т.д. Шлем - стилизация на шлемы позднего средневековья. Без богатой отделки с ярко выраженной изношенностью.</div>
          </div>

          <div className={s.textBlock}>
            <div><b>Тело:</b></div>
            <div>Стилизация на комплект высокого и позднего средневековья. Камиза,шоссы, дублет, вамс, котарди и т.д. Доспехи аналогично без богатых украшений и с ярко выраженной изношенностью.</div>
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

function Knights(): JSX.Element {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  return (
    <>
      <div className={s.info}>
        <div>
          <img src={image} alt='' width={300}/>
        </div>

        <div className={s.text}>
          <div><i>Символ отряда: </i> белое перо на зелёном фоне.</div>
          <div><i>Визуальная стилистика: </i> благородные воины позднего средневековья и их свита.</div>
          <br/>
          <div>
            <div><b>Прощение Понтифика</b></div> 
            <div>
              На старте получают грамоту, прощающую уплату церковной десятины навсегда.
            </div>

            <button className={s.requirementButton} onClick={() => setIsOpen(true)}>Требования к антуражу</button>
          </div>
        </div>
      </div>

      <div className={s.block2}>
        <h3>Описание</h3>
        <div>
          Светский рыцарский орден, состоящий из бедных дворян, что лишены земель или наследства, а также их оруженосцев и свиты. 
          Используют войну в качестве возможности поправить своё материальное состояние. 
          Глава отряда много лет назад спас жизнь Понтифику, за что тот выдал отряду бессрочную грамоту на освобождение от церковной десятины.
        </div>
      </div>

      {isOpen && (
        <ItemModal
          setIsOpen={setIsOpen}
          item={modal}
        />
      )}
    </>
  );
}

export const knights: Item = {
  label: 'Рыцари Пера',
  element: <Knights />

}