import React from 'react';
import Select from 'react-select';

import { 
  artifact, healPack, healPotion,
  herbs, money, ore, repairPack,
  repairPotion,
} from '../../rules-text/items';

import s from './cargo-visual.module.css';


function SelectOption(icon, name, weight) {
  return (
    <div className={s.item}>
      <div><img src={icon} alt='' height='50' width='50' /></div>
      
      <div style={{textAlign: 'end'}}>
        <h4>{name}</h4>
        <div>Весит: {weight}</div>
      </div>
    </div>
  )
}

function setOptions(slot) {
  const options = [
    { value: { id: 'artifact', weight: 0, slot }, label: SelectOption(artifact.icon, 'Артифакт', 0)},
    { value: { id: 'money', weight: 0, slot }, label: SelectOption(money.icon, 'Деньги', 0)},
    { value: { id: 'herbs', weight: 1, slot }, label: SelectOption(herbs.icon, 'Лечебные травы', 1)},
    { value: { id: 'ore', weight: 1, slot }, label: SelectOption(ore.icon, 'Руда', 1)},
    { value: { id: 'healPack', weight: 1, slot }, label: SelectOption(healPack.icon, 'Медкомплект', 1)},
    { value: { id: 'repairPack', weight: 1, slot }, label: SelectOption(repairPack.icon, 'Ремкомплект', 1)},
    { value: { id: 'repairPotion', weight: 0, slot }, label: SelectOption(repairPotion.icon, 'Оружейное масло', 0)},
    { value: { id: 'healPotion', weight: 0, slot }, label: SelectOption(healPotion.icon, 'Целебная мазь', 0)},
  ];
  return options;
}

export function CargoVisual() {
  const [cargoWeight, setCargoWeight] = React.useState(2);

  let items = React.useMemo(() => [], []);

  const handleChange = React.useCallback((option) => {
    const { slot } = option.value;

    if (items.length === 0 || items.length === slot) {
      items.push(option);
    } else {
      items.splice(slot, 1, option);
    }

    const itemsWeight = items.reduce((acc, p) => {
      return acc + p.value.weight 
    }, 0);

    setCargoWeight(2 - itemsWeight);

  }, [items]);


  return  (
    <div className={s.container}>
      <div>{cargoWeight}</div>
      <Select name='Груз 1'
        options={setOptions(0)} 
        onChange={handleChange}
      />

      <Select name='Груз 2'
        options={setOptions(1)} 
        onChange={handleChange}
      />
    </div>
  )
}