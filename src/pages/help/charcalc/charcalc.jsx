import React from "react";
import { Select } from "../../../components/visual/select-item";
// import Select from 'react-select';

import s from './charcalc.module.css';

const armor = [
  {value: { type: 'no_armor', armorClass: 0 }, label: 'Нет брони' },
  {value: { type: 'leather', armorClass: 0.5 }, label: 'Кожанка' },
  {value: { type: 'chain', armorClass: 0.75 }, label: 'Кольчуга' },
  {value: { type: 'brigant', armorClass: 1 }, label: 'Бригантина' },
  {value: { type: 'lamelar', armorClass: 1 }, label: 'Ламяляр' },
  {value: { type: 'plate', armorClass: 1.25 }, label: 'Латы' },
]

const helmet = [
  {value: { type: 'no_helmet', hasArmor: false }, label: 'Нет шлема' },
  {value: { type: 'soft', hasArmor: false }, label: 'Мягкий шлем' },
  {value: { type: 'hard', hasArmor: true }, label: 'Твердый шлем' },
  {value: { type: 'visor', hasArmor: true }, label: 'Шлем с забралом' },
]

const defaultArmor = [
    { limb: 'torso', hits: 0 },
    { limb: 'leftShoulder', hits: 0 },
    { limb: 'rightShoulder', hits: 0 },
    { limb: 'leftArm', hits: 0 },
    { limb: 'rightArm', hits: 0 },
    { limb: 'leftHip', hits: 0 },
    { limb: 'rightHip', hits: 0 },
    { limb: 'leftLeg', hits: 0 },
    { limb: 'rightLeg', hits: 0 },
  ];

export function Charcalc() {
  const [hasArmor, setHasArmor] = React.useState(false);
  const [hits, setHits] = React.useState(0);
  const [currentArmor, setCurrentArmor] = React.useState(defaultArmor);
  
  const handleHelmetArmor = React.useCallback((option) => {
    setHasArmor(option.value.hasArmor);
  }, []);

  const handleArmor = React.useCallback(({name, option}) => {
    const findIndex = currentArmor.findIndex(p => p.limb === name);
    
    currentArmor.splice(findIndex, 1, {
      limb: name,
      hits: name === 'torso' ? option.value.armorClass : option.value.armorClass / 4,
    });

    setCurrentArmor(currentArmor);

    const totalHits = currentArmor.reduce((acc, p) => acc + p.hits, 0);
    setHits(totalHits);
  }, [currentArmor]);

  return (
    <div className={s.container}>
      <h1>Ваши хиты: { hasArmor ? hits + 1 : 1 }</h1>
      
      <div className={s.character}>
        <div className={s.row}>
          <div className={s.item}>
            <div>Шлем</div>
            <Select 
              placeholder='Нет шлема'
              options={helmet}
              onChange={handleHelmetArmor}
            />
          </div>
        </div>

        <div className={s.rowCenter}>
          <div className={s.leftColumn}>
            <div className={s.item}>
              <div>Л.Плече</div>
              <Select
                placeholder='Нет брони'
                options={armor}
                onChange={(option) => handleArmor({name: 'leftShoulder', option})}
              />
            </div>

            <div className={s.item}>
              <div>Л.Рука</div>
                <Select
                  placeholder='Нет брони'
                  options={armor}
                  onChange={(option) => handleArmor({name: 'leftArm', option})}
                />
            </div>
          </div>

          <div className={s.torso}>
            <div>Торс</div>
            <Select 
              name='torso'
              placeholder='Нет брони'
              options={armor}
              onChange={(option) => handleArmor({name: 'torso', option})}
            />
          </div>

          <div className={s.column}>
            <div className={s.item}>
              <div>П.Плече</div>
              <Select
                placeholder='Нет брони'
                options={armor}
                onChange={(option) => handleArmor({name: 'rightShoulder', option})}
              />
            </div>

            <div className={s.item}>
              <div>П.Рука</div>
                <Select
                  placeholder='Нет брони'
                  options={armor}
                  onChange={(option) => handleArmor({name: 'rightArm', option})}
                />
            </div>
          </div>
        </div>

        <div className={s.legs}>
          <div className={s.leg}>
            <div className={s.item}>
              <div>Л.Бедро</div>
              <Select
                placeholder='Нет брони'
                options={armor}
                onChange={(option) => handleArmor({name: 'leftHip', option})}
              />
            </div>

            <div className={s.item}>
              <div>Л.Голень</div>
              <Select
                placeholder='Нет брони'
                options={armor}
                onChange={(option) => handleArmor({name: 'leftLeg', option})}
              />
            </div>
          </div>

          <div className={s.leg}>
            <div className={s.item}>
              <div>П.Бедро</div>
              <Select
                placeholder='Нет брони'
                options={armor}
                onChange={(option) => handleArmor({name: 'rightHip', option})}
              />
            </div>

            <div className={s.item}>
              <div>П.Голень</div>
              <Select
                placeholder='Нет брони'
                options={armor}
                onChange={(option) => handleArmor({name: 'rightLeg', option})}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}