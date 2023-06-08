import React from "react";

import { Chapter, ItemModal, LinkButton } from "../../../components";
import { bag, barrow, cart } from "../../../rules-text/examples/cargo";

import { 
  healPack, healPotion, repairPack,
  repairPotion, artifact, ore, 
  herbs, money,
} from "../../../rules-text/items";

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

        <div className={s.label}>{'Карты'.toUpperCase()}</div>
        <div>На все карты НЕ распространяются действия "Воровство" и "Обыск"</div>
        <div>Карты могут носится в скрытую</div>
        <div>Карты нужны как проверка правомерности некоторых игровых действий</div>
        <div>Не могут передаваться от одного игрока другому, только в некоторых случаях описанных ниже</div>

        <div className={s.label}>Карта "Жертва"</div>
        <div className={s.listContainer}>
          <li>Игрок-человек может получить эту карту в мертвяке или по сюжету через мастера или интенданта</li>
          <li>Никак не влияет на игра-механику самого игрока, нужна лишь для реакции на нее чудовищ и инквизиции</li>
          <li>Чудовище может заменить ее на карту "Сожран", инквизитор на карту "Прощение"</li>
          <li>Демонстрируется только при поедании Чудовищем или в ходе "Молитвы" инквизитора, или добровольно</li>
        </div>

        <div className={s.label}>Карта "Череп"</div>
        <div className={s.listContainer}>
          <li>Эта карта нужна для обозначения количества рабов в темнице чудовища</li>
          <li>Чудовище присваивает своему логову "Череп" если довел до лагеря пленного игрока-человека</li>
          <li>Снимается череп когда чудовище желает мгновенно восстановить 5 своих хитов</li>
          <li>Может сопровождаться различным видом антуража (согласуется с мастерами)</li>
        </div>

        <div className={s.label}>Карта "Воровство"</div>
        <div className={s.listContainer}>
          <li>Эти карты выдаются игрокам на старте игры по требованию с определенным лимитом на день</li>
          <li>Служат маркерами кражи</li>
          <li>Демонстрация этой карты в открытую считается признанием в воровстве</li>
          <li>В случае обнаружения этой карты в своих вещах, вы вправе ее тихо уничтожить без последствия для себя</li>
        </div>

        <div className={s.label}>Карта "Сожран"</div>
        <div className={s.listContainer}>
          <li>Количество карт "Сожран" которые накопились за всю игру у мастеров, через поедания игроков чудовищами</li>
          <li>Количество карт определяет влияние чудовищ на "Затмение"</li>
          <li>Передается игроком мастеру при посещении мертвяка</li>
        </div>

        <div className={s.label}>Карта "Прощение"</div>
        <div className={s.listContainer}>
          <li>Количество карт "Прощение" которые накопились за всю игру мастеров, через действия инквизиции</li>
          <li>Количество карт определяет влияние инквизиции на "Затмение"</li>
          <li>Передается игроком мастеру при посещении мертвяка</li>
        </div>

        <div className={s.label}>Карта "Пленник"</div>
        <div className={s.listContainer}>
          <li>Карта пленник нужна для определения того что игрок с повязкой "Мертв" может перейти в состояние "Тяжелое ранение" внутри лагеря без посещения мертвяка</li>
          <li>Выдается Интендантом лагеря в котором данного пленника продали</li>
          <li>Хранится ДК игрока, передается только между игроком и интендантом</li>
          <li>В случае потери карты считается что игрок умер по дороге</li>
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