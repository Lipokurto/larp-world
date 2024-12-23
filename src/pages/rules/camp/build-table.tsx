import React from 'react';

import { Item } from '../../../rules-text/type';
import { ItemModal, LinkButton } from '../../../components';

import {
  alchemist, gather, hospital,
  plague, smith,
} from '../../../rules-text/location/buildings';

import {
  cureMarker, healPack, healPotion,
  herbs, ore, plagueMarker,
  repairPack, repairPotion,
} from '../../../rules-text/items';

import s from './table.module.css';

export function BuildTable(): JSX.Element {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [item, setItem] = React.useState<Item | null>(null);

  const handleClick = React.useCallback((item: Item) => {
    setItem(item);
    setIsOpen(true);
  }, []);

  return (
    <>
      <table className={s.iksweb}>
        <tbody>
          <tr>
            <td>Постройка</td>
            <td>Потребляет</td>
            <td>Производит</td>
          </tr>

          <tr>
            <td><LinkButton text='Ресурсная постройка' onclick={() => handleClick(gather)} /></td>
            <td></td>
            <td><LinkButton text='Железная руда' onclick={() => handleClick(ore)} /> / <LinkButton text='Лечебная трава' onclick={() => handleClick(herbs)} /></td>
          </tr>

          <tr>
          </tr>

          <tr>
            <td><LinkButton text='Госпиталь' onclick={() => handleClick(hospital)} /></td>
            <td><LinkButton text='Лечебные травы' onclick={() => handleClick(herbs)} /></td>
            <td><LinkButton text='Медкомплект' onclick={() => handleClick(healPack)} /></td>
          </tr>

          <tr>
            <td><LinkButton text='Кузница' onclick={() => handleClick(smith)} /></td>
            <td><LinkButton text='Железная руда' onclick={() => handleClick(ore)} /></td>
            <td><LinkButton text='Ремкомплект' onclick={() => handleClick(repairPack)} /></td>
          </tr>

          <tr>
            <td><LinkButton text='Лаборатория алхимика' onclick={() => handleClick(alchemist)} /></td>
            <td><LinkButton text='Медкомплект' onclick={() => handleClick(healPack)} /> / <LinkButton text='Ремкомплект' onclick={() => handleClick(repairPack)} /> / <LinkButton text='Железная руда' onclick={() => handleClick(ore)} /> / <LinkButton text='Лечебная трава' onclick={() => handleClick(herbs)} /></td>
            <td><LinkButton text='Целебная мазь' onclick={() => handleClick(healPotion)} /> / <LinkButton text='Оружейное масло' onclick={() => handleClick(repairPotion)} /></td>
          </tr>

          <tr>
            <td><LinkButton text='Чумная лаборатория' onclick={() => handleClick(plague)} /></td>
            <td><LinkButton text='Медкомплект' onclick={() => handleClick(healPack)} /> / <LinkButton text='Лечебная трава' onclick={() => handleClick(herbs)} /> / <LinkButton text='Целебная мазь' onclick={() => handleClick(healPotion)} /></td>
            <td><LinkButton text='маркер "Исцелен"' onclick={() => handleClick(cureMarker)} /> / <LinkButton text='Маркер "Чума"' onclick={() => handleClick(plagueMarker)} /></td>
          </tr>
        </tbody>
      </table>

      {isOpen && (
        <ItemModal
          setIsOpen={setIsOpen}
          item={item}
        />
      )}
    </>
  )
}