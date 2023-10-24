import React from 'react';

import { Chapter, AccordionBlock } from '../../../components';

import heart from '../../../assets/icons/health/heart.png';

import ab01 from '../../../assets/rules/monsters/monsters/heavy/ab-01.png';
import ab02 from '../../../assets/rules/monsters/monsters/heavy/ab-02.png';
import ab03 from '../../../assets/rules/monsters/monsters/heavy/ab-03.png';

import mid01 from '../../../assets/rules/monsters/monsters/mid/mid-01.png';
import mid02 from '../../../assets/rules/monsters/monsters/mid/mid-02.png';
import mid03 from '../../../assets/rules/monsters/monsters/mid/mid-03.png';

import li01 from '../../../assets/rules/monsters/monsters/light/light-01.png';
import li02 from '../../../assets/rules/monsters/monsters/light/light-02.png';
import li03 from '../../../assets/rules/monsters/monsters/light/light-03.png';

import obsLi01 from '../../../assets/rules/monsters/obsessed/ob-light/obs-light-01.png';
import obsLi02 from '../../../assets/rules/monsters/obsessed/ob-light/obs-light-02.png';
import obsLi03 from '../../../assets/rules/monsters/obsessed/ob-light/obs-light-03.png';

import obsMid01 from '../../../assets/rules/monsters/obsessed/ob-mid/ob-mid-01.png';
import obsMid02 from '../../../assets/rules/monsters/obsessed/ob-mid/ob-mid-02.png';
import obsMid03 from '../../../assets/rules/monsters/obsessed/ob-mid/ob-mid-03.png';

import obsHeavy01 from '../../../assets/rules/monsters/obsessed/ob-heavy/ob-heavy-01.png';
import obsHeavy02 from '../../../assets/rules/monsters/obsessed/ob-heavy/ob-heavy-02.png';
import obsHeavy03 from '../../../assets/rules/monsters/obsessed/ob-heavy/ob-heavy-03.png';

import { ImagesAdaptive } from '../../../components';

import s from './monsters.module.css';

const heavy = [ab01, ab02, ab03];
const mid = [mid01, mid02, mid03];
const light = [li01, li02, li03];

const obsLi = [obsLi03, obsLi02, obsLi01];
const obsMid = [obsMid03, obsMid02, obsMid01];
const obsHeavy = [obsHeavy03, obsHeavy02, obsHeavy01];

export function Monsters(): JSX.Element {
  const getHearts = React.useCallback((count: number) => {
    const heartsCount = Array(count).fill(heart);
    return (
      <div>
        {heartsCount.map((p, i) => {
          return (
            <img src={p} key={i} alt='' width='20' />
          )
        })}
      </div>
    )
  }, []);

  return (
    <div className={s.container}>
      <Chapter chapter='АПОСТОЛЫ' />
      <div>Монстры могут быть различного типа, и различных характеристик, все идеи и пожелания обсуждаются с хронистами</div>
      <div>Ниже приведены примеры на которые можно ориентироваться при создании костюма</div>
      <div>Любые характеристики чудовища могут быть изменены исходя из конечного вида костюма</div>
      <div>Настоятельно рекомендуем связаться с мастерами на фазе обсуждения концепта</div>

      <div className={s.label}>Критерии оценки костюма</div>
      <div className={s.listContainer}>
        <li>Размер костюма</li>
        <li>Оригинальность</li>
        <li>Качество исполнения</li>
      </div>
      <AccordionBlock
        label='Чудовища'
        items={[
          {
            label: 'Формы чудовища',
            element:
              <>
                <div>Чудовище обладает двумя формами: человеческой и монструозной, при этом обе формы должны отыгрываться одним и тем же оператором</div>
                <h3>Форма человека</h3>
                <div>В этой форме на чудовище действуют все правила боевых взаимодействий что и на человека</div>
                <h4>Особенности пребывания монстра в человеческой форме</h4>
                <div className={s.listContainer}>
                  <li>В случае перехода в состояние <b>"Тяжело ранен"</b>, апостол обязан применить действие <b>"Смена формы"</b>.</li>
                  <li>Любая смена формы чудовища происходит на территории логова чудовища.</li>
                </div>
              </>
          },
          {
            label: 'Лечение чудовища',
            element:
              <>
                <div>В любой форме чудовище может лечиться только за счет поедания людей, при этом поедать людей апостол может только в монструозной форме.</div>
                <br />
                <div>1 пожирание восстанавливает <b>5 хитов</b>.</div>
                <div>Если игрок поедает игрока с меткой жертвы, он может восстановить так же <b>5 хитов</b>, но делает это мгновенно.</div>
                <div>Если монстр доводит игрока до состояния <b>"Тяжело ранен"</b>, он может его пленить и доведя до своего логова, сохранить лечение в лагере на будущее.</div>
                <div>Лечение монстра за счет заготовленных жертв происходит мгновенно, но только на территории логова чудовища.</div>
              </>
          },
          {
            label: 'Виды чудовищ',
            element:
              <>
                <h3>{'Мерзость'.toUpperCase()}</h3>
                25 {getHearts(25)}
                <ImagesAdaptive images={heavy} />
                <h4>Описание</h4>
                <i>те кто отрекаются от своей человечности во имя наслаждения силой и страданиями своих врагов, становятся тем кого называют "Темная мерзость бытия"</i>
                <h4>Доступные одержимые</h4>
                <div className={s.listContainer}>
                  <li>Близкий: 1</li>
                  <li>Воин: 1</li>
                  <li>Разведчик: 2</li>
                </div>

                <h4>Требования</h4>
                <div className={s.listContainer}>
                  <li>Размер от 2.25м</li>
                  <li>Размытая форма человека (сложно определить форму оператора)</li>
                  <li>Большое количество атакующих конечностей</li>
                  <li>Костюм должен уверено выдерживать большое количество ударов, как рубящих так и колющих</li>
                  <li>Оператор должен быть готов физически носить сложный костюм</li>
                  <li>Обязательны консультации с мастерами на фазе концепции построения костюма</li>
                </div>
                <br />
                <h3>{'Тяжеловес'.toUpperCase()}</h3>
                20 {getHearts(20)}
                <ImagesAdaptive images={mid} />
                <h4>Описание</h4>
                <i>Те чьи грехи были вызваны благими намереньями, но не не темным желанием, становятся "Тяжелой поступью рока"</i>
                <h4>Доступные одержимые</h4>
                <div className={s.listContainer}>
                  <li>Воин: 1</li>
                  <li>Разведчик: 2</li>
                </div>
                
                <h4>Требования</h4>
                <div className={s.listContainer}>
                  <li>Большое количество органической брони</li>
                  <li>Искривленные формы человека</li>
                  <li>Костюм должен уверено выдерживать большое количество ударов, как рубящих так и колющих</li>
                  <li>Оператор должен быть готов физически носить сложный костюм</li>
                  <li>Обязательны консультации с мастерами на фазе концепции построения костюма</li>
                </div>
                <br />
                <h3>{'Падальщик'.toUpperCase()}</h3>
                15 {getHearts(15)}
                <ImagesAdaptive images={light} />
                <h4>Описание</h4>
                <i>Желание выжить знакомо и коралю и бедняку, и если человек готов пожертвовать всем ради выживания он становится "Пожирателем греха"</i>
                <h4>Доступные одержимые</h4>
                <div className={s.listContainer}>
                  <li>Разведчик: 2</li>
                </div>
                
                <h4>Требования</h4>
                <div className={s.listContainer}>
                  <li>Искривленные формы человека с уклоном в пасть и клыки</li>
                  <li>Костюм должен уверено выдерживать большое количество ударов, как рубящих так и колющих</li>
                  <li>Оператор должен быть готов физически носить сложный костюм</li>
                  <li>Обязательны консультации с мастерами на фазе концепции построения костюма</li>
                </div>
                <br />
              </>
          },
        ]}
      />
      <AccordionBlock
        label='Одержимые'
        items={[
          {
            label: 'Общие',
            element:
              <>
                <div>Не может существовать одержимых без чудовища</div>
                <div>Лимит одержимых на каждое чудовище зависит от уровня подготовки антуража самого монстра</div>
                <div>Чем больше и страшнее монстр - тем больше он получает хитов на старте и тем больше одержимых он может содержать</div>
                <div>Количество хитов одержимого так же зависит от красоты подготовки костюма</div>
                <div>Одержимые могут использовать любое оружие что и люди, кроме особого и пушек</div>
              </>
          },
          {
            label: 'Особые свойства',
            element:
              <>
              <div className={s.listContainer}>
                <li><b>Плоть одержимого.</b> Не имеет броневых хитов, играет по "классической хитовее", внешний вид определяет количество хитов</li>
                <li><b>Безвольный.</b> Чтоб одержимый вышел из мертвяка чудовище, должен пожертвовать хитами монструозной формы 5 хитов - один одержимый</li>
                <li><b>Порченный.</b> Не могут получить метку жертвы</li>
                <li><b>Зависимый.</b> Чудовище может пожертвовать 2 хитами чтоб вылечить полностью одержимого, не требует времени отыгрывается касанием</li>
                <li><b>Неизлечимый.</b> Только чудовище может лечить одержимых</li>
                <li><b>Ведомый.</b> Не могут вести активные социальные взаимодействия (интеллект деградирует до “выполнить желания чудовища любой ценой”)</li>
                <li><b>Фатальный.</b> Не имеет статуса "тяжело ранен" - вместо этого переходит в статус "мертв"</li>
                <li><b>Верный.</b> Пожирание одержимых не лечит чудовище</li>
                <li><b>Фатальный.</b> В случаем смерти чудовища-вожака, все его одержимые переходят в состояние "мертв"</li>
              </div>
              </>
          },
          {
            label: 'Виды одержимых',
            element: 
              <>
                <h3>{'Близкий'.toUpperCase()}</h3>
                {getHearts(6)}
                <ImagesAdaptive images={obsHeavy} />
                <h4>Описание</h4>
                <i>Близкий - это одержимый впитавший в себя слишком много плоти чудовища, из-за чего его тело было искривлено и изуродовано темными силами, но это даровало ему нечеловеческую выносливость и силу</i>
                <h4>Требования</h4>
                <div className={s.listContainer}>
                  <li>Уникальный по стилистике костюм, отражающий извращенную натуру чудовища вожака</li>
                  <li>Шлем</li>
                  <li>Маска или грим</li>
                  <li>Обязательный фотодопуск</li>
                </div>
                <br />
                <h3>{'Воин'.toUpperCase()}</h3>
                {getHearts(4)}
                <ImagesAdaptive images={obsMid} />
                <h4>Описание</h4>
                <i>Воин смог вынести пытки темной плоти, его тело стало более крепким и выносливым чем у человека, его новые доспехи - это часть его плоти, боли и страха не существует, есть лишь воля черного сердца господина</i>
                <h4>Требования</h4>
                <div className={s.listContainer}>
                  <li>Тяжелые полные доспехи</li>
                  <li>Шлем</li>
                  <li>Маска или грим</li>
                  <li>Обязательный фотодопуск</li>
                </div>
                <br />
                <h3>{'Разведчик'.toUpperCase()}</h3>
                {getHearts(2)}
                <ImagesAdaptive images={obsLi} />
                <h4>Описание</h4>
                <i>Разведчик быстр, но слаб, его задача быть первой гончей черной стаи своего хозяина</i>
                <h4>Требования</h4>
                <div className={s.listContainer}>
                  <li>Шлем</li>
                  <li>Маска или грим</li>
                  <li>Потрепанные доспехи, обмотки</li>
                  <li>Обязательный фотодопуск</li>
                </div>
                <br />

              </>
          },
        ]}
      />
    </div>
  )
}