import React from "react";
import Tooltip from 'react-tooltip-lite';

import { CardTooltip, Chapter, ItemModal, LinkButton } from "../../../components";
import { bag, barrow, cart } from "../../../rules-text/examples/cargo";

import { 
  healPack, healPotion, repairPack,
  repairPotion, artifact, ore, 
  herbs, money,
} from "../../../rules-text/items";

import eatCard from '../../../assets/cards/actionsCards/eatCard.png';
import forgivenessCard from '../../../assets/cards/actionsCards/forgivenessCard.png';
import prisonCard from '../../../assets/cards/actionsCards/prisonCard.png';
import restCard from '../../../assets/cards/actionsCards/restCard.png';
import sacrificeCard from '../../../assets/cards/actionsCards/sacrificeCard.png';
import skullCard from '../../../assets/cards/actionsCards/skullCard.png';
import thiefCard from '../../../assets/cards/actionsCards/thiefCard.png';

import { Item } from "../../../rules-text/type";

import s from './resources.module.css';

export function Resources(): JSX.Element {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [item, setItem] = React.useState<Item | null>(null);

  const handleClick = React.useCallback((item: Item) => {
    setItem(item);
    setIsOpen(true);
  }, []);

  return (
    <>
      <div className={s.container}>
        <Chapter chapter='РЕСУРСЫ' />

        <div className={s.label}>{'Предметы'.toUpperCase()}</div>
        <div className={s.label}>Список всех игровых предметов</div>
        <div className={s.listContainer}>
          <li><LinkButton text='Игровые деньги'  onclick={() => handleClick(money)}/>. Не имеет веса</li>
          <li><LinkButton text='Артефакт' onclick={() => handleClick(artifact)}/>. Не имеет веса</li>
          <li><LinkButton text='Целебная мазь' onclick={() => handleClick(healPotion)}/>. Не имеет веса</li>
          <li><LinkButton text='Оружейное масло' onclick={() => handleClick(repairPotion)}/>. Не имеет веса</li>
          <li><LinkButton text='Медкомплект' onclick={() => handleClick(healPack)}/>. Весит 1</li>
          <li><LinkButton text='Ремкомплект' onclick={() => handleClick(repairPack)}/>. Весит 1</li>
          <li><LinkButton text='Железная руда' onclick={() => handleClick(ore)}/>. Весит 1</li>
          <li><LinkButton text='Лечебные травы' onclick={() => handleClick(herbs)}/>. Весит 1</li>
        </div>

        <div className={s.label}>Вес предметов</div>
        <div>
          <div>Максимальная грузоподъемность для человека 2 (моделируется 2 кармашками в ДК)</div>
          <div>При этом ограничения на вес касаются только игровых предметов имеющими вес</div>
          <div>Все предметы повышающие грузоподъемность обязаны обладать игровым паспортами</div>
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

        <br />

        <div className={s.label}>{'Карты'.toUpperCase()}</div>
        <div>На все карты НЕ распространяются действия "Воровство" и "Обыск"</div>
        <div>Карты могут носится в скрытую</div>
        <div>Карты нужны как проверка правомерности некоторых игровых действий</div>
        <div>Не могут передаваться от одного игрока другому, только в некоторых случаях описанных ниже</div>

        <h3>Карты "Статуса"</h3>

        <div className={s.label}>
          <CardTooltip
            cardName={'Метка жертвы'}
            src={sacrificeCard}
          />
        </div>
        <div className={s.listContainer}>
          <li>Игрок-человек может получить эту карту в мертвяке или по сюжету через мастера или интенданта</li>
          <li>Никак не влияет на игра-механику самого игрока, нужна лишь для реакции на нее чудовищ и инквизиции</li>
          <li>Чудовище может заменить ее на карту "Сожран", инквизитор на карту "Прощение"</li>
          <li>Демонстрируется только при поедании Чудовищем или в ходе "Молитвы" инквизитора, или добровольно</li>
        </div>

        <div className={s.label}>
          <CardTooltip
            cardName={'Череп'}
            src={skullCard}
          />
        </div>
        <div className={s.listContainer}>
          <li>Эта карта нужна для обозначения количества рабов в темнице чудовища</li>
          <li>Чудовище присваивает своему логову "Череп" если довел до лагеря пленного игрока-человека</li>
          <li>Снимается череп когда чудовище желает мгновенно восстановить 5 своих хитов</li>
          <li>Может сопровождаться различным видом антуража (согласуется с мастерами)</li>
        </div>

        <div className={s.label}>
          <CardTooltip
            cardName={'Сожран'}
            src={eatCard}
          />
        </div>
        <div className={s.listContainer}>
          <li>Количество карт "Сожран" которые накопились за всю игру у мастеров, через поедания игроков чудовищами</li>
          <li>Количество карт определяет влияние чудовищ на "Затмение"</li>
          <li>Передается игроком мастеру при посещении мертвяка</li>
        </div>

        <div className={s.label}>
          <CardTooltip
            cardName={'Прощение'}
            src={forgivenessCard}
          />
        </div>
        <div className={s.listContainer}>
          <li>Количество карт "Прощение" которые накопились за всю игру мастеров, через действия инквизиции</li>
          <li>Количество карт определяет влияние инквизиции на "Затмение"</li>
          <li>Передается игроком мастеру при посещении мертвяка</li>
        </div>

        <div className={s.label}>
          <CardTooltip
            cardName={'Пленник'}
            src={prisonCard}
          />
        </div>
        <div className={s.listContainer}>
          <li>Карта пленник нужна для определения того что игрок с повязкой "Мертв" может перейти в состояние "Тяжелое ранение" внутри лагеря без посещения мертвяка</li>
          <li>Выдается Интендантом лагеря в котором данного пленника продали</li>
          <li>Хранится ДК игрока, передается только между игроком и интендантом</li>
          <li>В случае потери карты считается что игрок умер по дороге</li>
        </div>

        <h3>Карты "Действия"</h3>

        <div className={s.label}>
          <CardTooltip
            cardName={'Отдых'}
            src={restCard}
          />
        </div>
        <div className={s.listContainer}>
          <li>Если у игрока есть этак карта, то она убирает действие текущего "психоза"</li>
          <li>Карта сдается по возможности интенданту своего лагеря</li>
          <li>Нельзя передавать, обменивать, уничтожать</li>
          <li>В случае если у игрока более одной карты "Отдых" то они так же работают как одна</li>
        </div>

        <div className={s.label}>
          <CardTooltip
            cardName={'Воровство'}
            src={thiefCard}
          />
        </div>
        <div className={s.listContainer}>
          <li>Эти карты выдаются игрокам на старте игры по требованию с определенным лимитом на день</li>
          <li>Служат маркерами кражи</li>
          <li>Демонстрация этой карты в открытую считается признанием в воровстве</li>
          <li>В случае обнаружения этой карты в своих вещах, вы вправе ее тихо уничтожить без последствия для себя</li>
        </div>
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