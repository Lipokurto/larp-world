import React from "react";
import { ItemModal, LinkButton } from "../../../components";
import { healPack, healPotion, herbs, ore, repairPack, repairPotion } from "../../../rules-text/items";
import { alchemist, gather, hospital, smith } from "../../../rules-text/location/buildings";

import s from './table.module.css';

export function BuildTable() {
  const [isOpen, setIsOpen] = React.useState(false);

  const [item, setItem] = React.useState(null);

  const handleClick = React.useCallback((item) => {
    setItem(item);
    setIsOpen(true);
  }, []);

  return (
    <>
      <table class={s.iksweb}>
        <tbody>
          <tr>
            <td>Постройка</td>
            <td>Потребляет</td>
            <td>Производит</td>
          </tr>

          <tr>
            <td rowspan="2"><LinkButton text='Ресурсная постройка' onclick={() => handleClick(gather)} /></td>
            <td rowspan="2"></td>
            <td><LinkButton text='Лечебная трава' onclick={() => handleClick(herbs)} /></td>
          </tr>

          <tr>
            <td><LinkButton text='руда' onclick={() => handleClick(ore)} /></td>
          </tr>

          <tr>
            <td><LinkButton text='Гопиталь' onclick={() => handleClick(hospital)} /></td>
            <td><LinkButton text='Лечебные травы' onclick={() => handleClick(herbs)} /></td>
            <td><LinkButton text='Медкомплект' onclick={() => handleClick(healPack)} /></td>
          </tr>

          <tr>
            <td><LinkButton text='Кузница' onclick={() => handleClick(smith)} /></td>
            <td><LinkButton text='Руда' onclick={() => handleClick(ore)} /></td>
            <td><LinkButton text='Ремкомплект' onclick={() => handleClick(repairPack)} /></td>
          </tr>

          <tr>
            <td rowspan="2"><LinkButton text='Лаборатория' onclick={() => handleClick(alchemist)} /></td>
            <td><LinkButton text='Медкомплект' onclick={() => handleClick(healPack)} /></td>
            <td><LinkButton text='Ремкомплект' onclick={() => handleClick(repairPack)} /></td>
          </tr>
          
          <tr>
            <td><LinkButton text='Целебная мазь' onclick={() => handleClick(healPotion)} /></td>
            <td><LinkButton text='Оружейное масло' onclick={() => handleClick(repairPotion)} /></td>
          </tr>
        </tbody>
      </table>

      {isOpen && (
        <ItemModal
          setIsOpen={setIsOpen}
          text={item}
        />
      )}
    </>
  )
}