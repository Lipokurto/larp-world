import React from "react";

import { Item } from '../../rules-text/type';
import { ImagesAdaptive, ItemModal } from '../../components';
import image from '../../assets/bands/kushan.png';

import imgMan01 from '../../assets/bands/kushan/man/01.png';
import imgMan02 from '../../assets/bands/kushan/man/02.png';
import imgMan03 from '../../assets/bands/kushan/man/03.png';

import imgMonster01 from '../../assets/bands/kushan/monsters/01.png';
import imgMonster02 from '../../assets/bands/kushan/monsters/02.png';
import imgMonster03 from '../../assets/bands/kushan/monsters/03.png';

import s from '../war-bands.module.css';

const men = [imgMan01, imgMan02, imgMan03];
const monsters = [imgMonster01, imgMonster02, imgMonster03];

function ModalPoor(): JSX.Element {
  const [isMan, setIsMan] = React.useState<boolean>(true);

  const renderItem = React.useMemo(() => {
    if (isMan) {
      return (
        <div>
          <div>
            <div className={s.label}>Люди</div>
            <div className={s.textBlock}>
              <div><b>Головной убор:</b></div>
              <div>Тюрбан, куфия и  прочие головные уборы в восточном стиле. Шлема: тюрбанного типа, мисюрка, шишак.</div>
            </div>

            <div className={s.textBlock}>
              <div><b>Тело:</b></div>
              <div>Легкие восточные одежды (туники, шаровары,платки) и доспехи (бахтерец и кольчужные, ламеллярные элементы). Минимум или полное отсутствие латных элементов.</div>
            </div>

            <div className={s.textBlock}>
              <div><b>Ноги:</b></div>
              <div>Стилизация на восточную или раннесредневековую обувь.</div>
            </div>

            <div className={s.textBlock}>
              <div><b>Детали:</b></div>
              <div>Доспех и аксессуары с символикой отряда в виде щитков, амулетов или росписей.</div>
            </div>
          </div>

          <div className={s.image}>
            <ImagesAdaptive images={men} />
          </div>
        </div>
      )
    }

    return (
      <div>
        <div>
          <div className={s.label}>Чудовища</div>
          <div className={s.textBlock}>
            <div><b>Костюм:</b></div>
            <div>Костюм должен быть согласован на фазе проектирования. Количество хитов монстра определяется качеством исполнения монстра.</div>
          </div>

          <div className={s.textBlock}>
            <div><b>Оружие:</b></div>
            <div>Все Пишачи обладают "Особым оружием" Оружие должно визуально быть большим и массивным. Обязательно согласование на фазе проектирования.</div>
          </div>
        </div>

        <div className={s.image}>
          <ImagesAdaptive images={monsters} />
        </div>
      </div>
    )
  }, [isMan]);

  return (
    <>
      <div>
        <div>
          <div><b>Фракционный цвет:</b></div>
          <div>Костюм персонажа должен быть выполнен в цветах фракции и отряда, за который он выступает.</div>
          <div className={s.block}>
            <div className={s.colorBlock}><div className={s.circle} style={{backgroundColor: 'yellow'}} />Желтый</div>
            <div className={s.colorBlock}><div className={s.circle} style={{backgroundColor: 'brown'}} />Коричневый</div>
            <div className={s.colorBlock}><div className={s.circle} style={{backgroundColor: '#151515'}} />Черный</div>
            <div className={s.colorBlock}><div className={s.circle} style={{backgroundColor: '#6900C6'}} />Фиолетовый</div>
          </div>
        </div>

        <div>
          <button className={!isMan ? s.requirementButton : s.requirementButtonOff} style={{ margin: 10 }}  onClick={() => setIsMan(true)}>Люди</button>
          <button className={isMan ? s.requirementButton : s.requirementButtonOff} style={{ margin: 10 }} onClick={() => setIsMan(false)}>Чудовища</button>
        </div>

        {renderItem}
      </div>
    </>
  )
}

const modal: Item = {
  label: 'Отряд иноземцев',
  element: <ModalPoor />
}

function Outlanders(): JSX.Element {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  return (
    <>
      <div className={s.info}>
        <div>
          <img src={image} alt='' width={300}/>
        </div>

        <div className={s.text}>
          <div><i>Символ отряда: </i> сжатый кулак на жёлтом фоне.</div>
          <div><i>Визуальная стилистика: </i> арабские воины позднего средневековья. Для <b>Громил</b> - костюмы, имитирующие гиперболизированную мускулатуру, отсутствие брони на торсе.</div>
          <br/>
          <div>
            <div><b>Иноземная магия</b></div> 
            <div>
              На службе у отряда есть Пишаки. Одержимые звероподобные (тигры,слоны,крокодилы) монстры на службе отряда.
            </div>

            <button className={s.requirementButton} onClick={() => setIsOpen(true)}>Требования к антуражу</button>
          </div>
        </div>
      </div>

      <div className={s.block2}>
        <h3>Описание</h3>
        <div>
          Лагерь наемных кушан, ищущие богатство и славу в бою. Мастера разведки и шпионажа, представляющие серьезную угрозу как на поле боя, так и вне его. 
          При помощи жёстких тренировок и пугающих экспериментов над людьми создают Громил - сверхсильных и крепких воинов, превосходящих обычных людей в размерах и силе.
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

export const outlanders: Item = {
  label: 'Отряд иноземцев',
  element: <Outlanders />
}