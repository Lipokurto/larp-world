import React from "react";

import { Chapter, ItemContainer, ItemModal, LinkButton } from "../../../components";
import { bag, barrow, cart } from "../../../rules-text/examples/cargo";

import { 
  healPack, healPotion, repairPack,
  repairPotion, artifact, ore, 
  herbs, money, victim,
  scull, eaten, execution,
  prisoner, rest, thief,
  psyh, artistDeck, managerDeck,
  dungeonDeck,
} from "../../../rules-text/items";

import { Item } from "../../../rules-text/type";

import s from './resources.module.css';

const resources = [ money, artifact, ore, herbs, healPack, repairPack, healPotion, repairPotion ];
const cards = [ victim, scull, eaten, execution, prisoner, rest, thief, psyh ];
const decks = [ artistDeck, managerDeck, dungeonDeck ];

export function Resources(): JSX.Element {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [item, setItem] = React.useState<Item | null>(null);

  const handleClick = React.useCallback((item: Item) => {
    setItem(item);
    setIsOpen(true);
  }, []);

  const recoursesList = React.useMemo(() => {
    return (
      <div className={s.resContainer}>
        {resources.map((p) => {
          return (
            <div className={s.resItem} onClick={() => handleClick(p)}>
              <ItemContainer
                item={p.label}
                weight={p.weight}
                icon={p.icon}    
              />
            </div>
          )
        })}
      </div>
    )
  }, [handleClick]);

  const cardsList = React.useMemo(() => {
    return (
      <div className={s.resContainer}>
        {cards.map((p) => {
          return (
            <div className={s.resItem} onClick={() => handleClick(p)}>
              <ItemContainer
                item={p.label}
                weight={p.weight}
                icon={p.icon}    
              />
            </div>
          )
        })}
      </div>
    )
  }, [handleClick]);

  const decksList = React.useMemo(() => {
    return (
      <div className={s.resContainer}>
        {decks.map((p) => {
          return (
            <div className={s.resDeck}>
              <div className={s.resDeck}>
                <div className={s.resItemDeck} onClick={() => handleClick(p)}>
                  <ItemContainer
                    item={p.label}
                    weight={p.weight}
                    icon={p.icon}    
                  />
                </div>
              </div>
            </div>
          )
        })}
      </div>
    )
  }, [handleClick]);

  return (
    <>
      <div className={s.container}>
        <Chapter chapter='РЕСУРСЫ И КАРТЫ' />

        <div className={s.label}>{'Предметы'.toUpperCase()}</div>
          {recoursesList}

        <div className={s.label}>Вес предметов</div>
        <div>
          <div>Максимальный вес, который может переносить персонаж-человека равно 2.</div>
          <div>Каждый предмет, который позволяет носить дополнительный вес (сумки, тачки телеги и т.д.) должен пройти регистрацию и получить на себя сертификат.</div>
          <div className={s.label}>Предметы повышающие грузоподъемность</div>
          <div className={s.listContainer}>
            <li><LinkButton text='Сумка' onclick={() => handleClick(bag)}/> Бонус к грузоподъемности +2</li>
            <li><LinkButton text='Тачка' onclick={() => handleClick(barrow)}/> Бонус к грузоподъемности +4</li>
            <li><LinkButton text='Телега' onclick={() => handleClick(cart)}/> Бонус к грузоподъемности +6</li>
          </div>
          <br />
          <div>Грузоподъемность - один из важных игровых элементов, дающих возможность играть в распределение ресурсов, логистику</div>
          <div>Если вы превысили максимально допустимый вес, то вы теряете 1 живой хит, считается что вы надорвали спину</div>
        </div>
        <div className={s.label}><i>Дополнительно</i></div>
        <ol className={s.listContainer}>
            <li>Грузоподъемность - один из важных игровых элементов, дающих возможность играть в распределение ресурсов, логистику, не игнорируйте ее.</li>
            <li>Если вы превысили максимально допустимый вес, то вы переходите в состояние <b>"Тяжело ранен"</b>, считается что вы надорвали спину.</li>
            <li>Качество исполнения предмета, позволяющего переносить больший груз, может повлиять на его возможность переносить вес. (добавить или убавить возможность носить вес).</li>
        </ol>
        <br />

        <div className={s.label}>{'Карты'.toUpperCase()}</div>
        <div>На все карты НЕ распространяются действия <b>"Воровство"</b> и <b>"Обыск"</b>.</div>
        <div>Карты могут носится в скрытую</div>
        <div>Карты нужны как проверка правомерности некоторых игровых действий</div>
        <div>Не могут передаваться от одного игрока другому, только в некоторых случаях описанных ниже</div>

        {cardsList} 

        <div className={s.label}>Колоды некоторых ролей</div>
        {decksList}
      </div>

      {isOpen && (
        <ItemModal
          setIsOpen={setIsOpen}
          item={item}
        />
      )}
    </>
  )
}