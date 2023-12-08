import React from "react";

import { Item } from '../../rules-text/type';
import image from '../../assets/bands/wings.png';
import { ImagesAdaptive, ItemModal } from '../../components';

import imgPoor01 from '../../assets/bands/holy-poor/poor/01.png';
import imgPoor02 from '../../assets/bands/holy-poor/poor/02.png';
import imgPoor03 from '../../assets/bands/holy-poor/poor/03.png';

import imgKnight01 from '../../assets/bands/holy-poor/knights/01.png';
import imgKnight02 from '../../assets/bands/holy-poor/knights/02.png';
import imgKnight03 from '../../assets/bands/holy-poor/knights/03.png';

import s from '../war-bands.module.css';

const poors = [imgPoor01, imgPoor02, imgPoor03];
const knights = [imgKnight01, imgKnight02, imgKnight03];

function ModalPoor(): JSX.Element {
  const [isPoor, setIsPoor] = React.useState<boolean>(true);

  const renderItem = React.useMemo(() => {
    if (isPoor) {
      return (
        <div>
          <div>
            <div className={s.label}>Простолюдины</div>
            <div className={s.textBlock}>
              <div><b>Костюм:</b></div>
              <div>Стилизация на средневековый комплект низшего сословия или крестьянской одежды (брэ, камиза, каль, балахон) с характерными визуальными элементами (блеклые цвета, дыры, повреждения и т.п).</div>
            </div>

            <div className={s.textBlock}>
              <div><b>Доспехи:</b></div>
              <div>Визуально состаренные, ржавые аналоги защитных элементов средневекового доспеха. Обязательно ношение множественных аксессуаров религиозного и фракционного характера (цепи,вериги, символика и т.п).</div>
            </div>
          </div>

          <div className={s.image}>
            <ImagesAdaptive images={poors} />
          </div>
        </div>
      )
    }

    return (
      <div>
        <div>
          <div className={s.label}>Рыцари</div>
          <div className={s.textBlock}>
            <div><b>Костюм:</b></div>
            <div>Cтилизация европейского костюма 14-15 в. Шоссы, камизы, туники, пурпуэны и элементы с религозным стилистическим уклоном (рясы, мантии и т.п).</div>
          </div>

          <div className={s.textBlock}>
            <div><b>Доспехи:</b></div>
            <div>Стилизация на позднесредневековые европейские доспехи. От нескольких элементов до полного латного комплекта с обязательным ярко выраженным религиозно-гротескным подтекстом. Изобилие декоративных элементов типа шипов, цепей, заклепок и т.п. Обзательное наличие отличительных символов фракции. Шлема с личинами и характерным оформлением.</div>
          </div>
        </div>

        <div className={s.image}>
          <ImagesAdaptive images={knights} />
        </div>
      </div>
    )
  }, [isPoor]);

  return (
    <>
      <div>
        <div>
          <div><b>Фракционный цвет:</b></div>
          <div>Костюм персонажа должен быть выполнен в цветах фракции и отряда, за который он выступает.</div>
          <div className={s.block}>
            <div className={s.colorBlock}><div className={s.circle} style={{backgroundColor: 'red'}} />Красный</div>
            <div className={s.colorBlock}><div className={s.circle} style={{backgroundColor: 'brown'}} />Коричневый</div>
            <div className={s.colorBlock}><div className={s.circle} style={{backgroundColor: 'wheat'}} />Бежевый</div>
            <div className={s.colorBlock}><div className={s.circle} style={{backgroundColor: 'gray'}} />Серый</div>
          </div>
        </div>

        <div>
          <button className={!isPoor ? s.requirementButton : s.requirementButtonOff} style={{ margin: 10 }}  onClick={() => setIsPoor(true)}>Простолюдины</button>
          <button className={isPoor ? s.requirementButton : s.requirementButtonOff} style={{ margin: 10 }} onClick={() => setIsPoor(false)}>Рыцари</button>
        </div>

        {renderItem}
      </div>
    </>
  )
}

const modal: Item = {
  label: 'Очищенные кровью',
  element: <ModalPoor />
}

function HolyPoor(): JSX.Element {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  return (
    <>
      <div className={s.info}>
        <div>
          <img src={image} alt='' width={300}/>
        </div>
        
        <div className={s.text}>
          <div><i>Символ отряда: </i> белые крылья на красном фоне.</div>
          <div><i>Визуальная стилистика: </i> <b>для рыцарей</b> - доспехи и религиозная атрибутика. <b>Для бедняков</b> - рваньё, ржавые оружие и доспехи, сельхоз инструмент в качестве оружия.</div>
          <br/>
          <div>
            <div><b>Слепая вера</b></div> 
            <div>
              В начале игры, а также после выхода из мертвяка получают психоз <b>"Фанатик"</b> и теряют все другие психозы.
            </div>

            <button className={s.requirementButton} onClick={() => setIsOpen(true)}>Требования к антуражу</button>
          </div>
        </div>
      </div>

      <div className={s.block2}>
        <h3>Описание</h3>
        <div>
          Отряд фанатично настроенных наёмников, состоящий по большей части из бедняков и маргиналов, что решили очистить свою душу, воюя с именем Всевышнего на устах.
          Непреклонно верят в то, что император Гейзерих был Божьим избранником, а императорская династия Мидленда - его наследники, что несут кровь Всевышнего в своих венах. 
          Цель любого из них - умереть в бою, защищая земли наследников Гейзериха, ибо тогда после смерти их души станут ангелами-хранителями.
          Верхушка отряда состоит из крайне набожных рыцарей, что собрали обездоленных простолюдинов под своими знаменами и повели в бой.
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

export const holyPoor: Item = {
  label: 'Очищенные кровью',
  element: <HolyPoor />
   
}