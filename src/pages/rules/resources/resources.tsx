import React from "react";

import { AccordionBlock, Chapter, ItemModal, LinkButton } from "../../../components";
import { bag, barrow, cart, trap } from "../../../rules-text/examples/cargo";

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

        <AccordionBlock
          label='Предметы'
          items={[
            {
              label: 'Список предметов',
              element:
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
            },
            {
              label: 'Грузоподъемность',
              element:
                <>
                  <div>Максимальная грузоподъемность человека 2 (моделируется 2 кармашками в ДК)</div>
                  <div>При этом ограничения на вес касаются только игровых предметов имеющими вес</div>
                  <div className={s.label}>Предметы повышающие грузоподъемность</div>
                  <div className={s.listContainer}>
                    <li><LinkButton text='Сумка' onclick={() => handleClick(bag)}/> Бонус к грузоподъемности +1</li>
                    <li><LinkButton text='Носилки' onclick={() => handleClick(trap)}/> Бонус к грузоподъемности +2</li>
                    <li><LinkButton text='Тачка' onclick={() => handleClick(barrow)}/> Бонус к грузоподъемности +3</li>
                    <li><LinkButton text='Телега' onclick={() => handleClick(cart)}/> Бонус к грузоподъемности +4</li>
                  </div>
                  <br />
                  <div>Грузоподъемность - один из важных игровых элементов, дающих возможность играть в распределение ресурсов, логистику</div>
                  <div>Если вы превысили максимально допустимый вес, то вы теряете 1 живой хит, считается что вы надорвали спину</div>
                </>
            },
          ]}
        />

        <AccordionBlock
          label='Карты'
          items={[
            {
              label: 'Общее',
              element:
                <>
                  <div>На все карты не распространяются действия "Воровство" и "Обыск"</div>
                  <div>Карты могут носится в скрытую</div>
                </>
            },
            {
              label: 'Карта "Жертва"',
              element:
                <>
                  <div>Игрок-человек может получить эту карту в мертвяке или по сюжету</div>
                  <div>Никак не влияет на игра-механику самого игрока, нужна лишь для реакции на нее чудовищ и инквизиции</div>
                  <div>Может быть заменена на "Сожран" или "Прощение" ТОЛЬКО чудовищем или инквизитором</div>
                  <div>Демонстрируется только по требованию Чудовища или в ходе "Молитвы" инквизитора, или добровольно</div>
                </>
            },
            {
              label: 'Карта "Череп"',
              element:
                <>
                  <div>Эта карта нужна для обозначения количества рабов в темнице чудовища</div>
                </>
            },
            {
              label: 'Карта "Воровство"',
              element:
                <>
                  <div>Эти карты выдаются игрокам на старте игры по требованию с определенным лимитом на день</div>
                  <div>Служат маркерами кражи</div>
                  <div>Демонстрация этой карты в открытую считается признанием в воровстве</div>
                  <div>В случае обнаружения этой карты в своих вещах, вы вправе ее тихо уничтожить без последствия для себя</div>
                </>
            },
            {
              label: 'Карта "Сожран"',
              element:
                <>
                  <div>Количество карт "Сожран" которые накопились за всю игру мастеров, через поедания игроков чудовищами</div>
                  <div>Количество карт определяет влияние чудовищ на "Затмение"</div>
                  <div>Передается игроком мастеру при посещении мертвяка</div>
                </>
            },
            {
              label: 'Карта "Прощение"',
              element:
                <>
                  <div>Количество карт "Прощение" которые накопились за всю игру мастеров, через действия инквизиции</div>
                  <div>Количество карт определяет влияние инквизиции на "Затмение"</div>
                  <div>Передается игроком мастеру при посещении мертвяка</div>
                </>
            },
          ]}
        />
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