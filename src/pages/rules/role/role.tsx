import React from "react";

import { Chapter, ItemModal, LinkButton } from '../../../components';
import { Item } from "../../../rules-text/type";

import {
  artist,
  captain, civil, craftsman,
  executor, fighter, inquisitor,
  knight, manager, owner, quartermaster,
} from "../../../rules-text/examples/characters";

import s from './role.module.css';

export function Role(): JSX.Element {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const [item, setItem] = React.useState<Item | null>(null);

  const handleClick = React.useCallback((item: Item) => {
    setItem(item);
    setIsOpen(true);
  }, []);

  return (
    <>
      <div className={s.container}>
        <Chapter chapter='РОЛИ' />
        <div>Каждый игрок на данном мероприятии должен иметь одну из выбранных ролей</div>
        <div>Роли физически не ограничивают игроков, лишь дают возможность реализовать некоторые особые игромеханики</div>
        <div>В случае если игрок при регистрации не соответствует требованиям выбранной роли ему будет выдана ближайшая роль соответствующая его внешнему виду</div>

        <div className={s.label}>Доступные роли</div>
        <div className={s.listContainer}>
          <div><b><LinkButton text='Интендант' onclick={() => handleClick(quartermaster)} /></b> Отвечает за игротехнические процессы лагеря</div>
          <div><b><LinkButton text='Капитан' onclick={() => handleClick(captain)} /></b> Глава отряда наемников</div>
          <div><b><LinkButton text='Боец' onclick={() => handleClick(fighter)} /></b> Базовая роль наемника</div>
          <br />
          <div><b><LinkButton text='Инквизитор' onclick={() => handleClick(inquisitor)} /></b> Представитель Святого престола на этой земле</div>
          <div><b><LinkButton text='Палач' onclick={() => handleClick(executor)} /></b> Божественная кара в руках инквизитора</div>
          <div><b><LinkButton text='Рыцарь' onclick={() => handleClick(knight)} /></b> Воин посвятивший себя служению церкви</div>
          <br />
          <div><b><LinkButton text='Обыватель' onclick={() => handleClick(civil)} /></b> Житель или гость местных земель</div>
          <div><b><LinkButton text='Хозяин' onclick={() => handleClick(owner)} /></b> Глава локации, которая предоставляет услуги</div>
          <div><b><LinkButton text='Бригадир' onclick={() => handleClick(manager)} /></b> Глава локации производящий первичные ресурсы "Целебная трава" или "Железная руда"</div>
          <div><b><LinkButton text='Ремесленник' onclick={() => handleClick(craftsman)} /></b> Глава локации "Госпиталь", "Кузница" или "Лаборатория"</div>
          <div><b><LinkButton text='Артист' onclick={() => handleClick(artist)} /></b> Игрок способный развлечь своим выступлением публику</div>
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