import React from "react";

import { ItemModal, LinkButton } from "../../../components";
import { SelectItem } from "../../../components";
import { itemHelmet, itemShoulder, itemTorso, itemArm, itemHip, itemLeg } from "../../../rules-text/armor";
import man from '../../../assets/armor-zone/man.jpg';

import s from './hit-calc.module.css';

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
  {value: { type: 'hard', hasArmor: true }, label: 'Шлем' },
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

const backOptions = [{ value: true, label: 'Да' }, { value: false, label: 'Нет' }];

function getHits(name, armorClass, hasBack) {
  if (name === 'torso') {
    if (hasBack) {
      return armorClass
    } else {
      return armorClass / 2;
    }
  }

  return armorClass / 4;
}

export function HitsCalc() {
  const [hasArmor, setHasArmor] = React.useState(false);
  const [hits, setHits] = React.useState(0);
  const [currentArmor, setCurrentArmor] = React.useState(defaultArmor);
  const [back, setBack] = React.useState({ value: false, label: 'Нет' });

  const [isOpen, setIsOpen] = React.useState(false);
  const [item, setItem] = React.useState(null);

  const handleClick = React.useCallback((item) => {
    setItem(item);
    setIsOpen(true);
  }, []);
  
  const handleHelmetArmor = React.useCallback((option) => {
    setHasArmor(option.value.hasArmor);
  }, []);

  const handleArmor = React.useCallback(({name, option}) => {
    const findIndex = currentArmor.findIndex(p => p.limb === name);
    
    currentArmor.splice(findIndex, 1, {
      limb: name,
      hits: getHits(name, option.value.armorClass, back.value),
    });

    setCurrentArmor(currentArmor);

    const totalHits = currentArmor.reduce((acc, p) => acc + p.hits, 0);
    setHits(totalHits);
  }, [back.value, currentArmor]);

  const handleBack = React.useCallback((option) => {
    if (option.option.value !== back.value) {
      const torsoArmor = currentArmor.find(p => p.limb === 'torso');
      
      currentArmor.splice(0, 1, {
        limb: 'torso',
        hits:  option.option.value ? torsoArmor.hits * 2 : torsoArmor.hits / 2,
      });

      setCurrentArmor(currentArmor);

      const totalHits = currentArmor.reduce((acc, p) => acc + p.hits, 0);
      setHits(totalHits);
    }

    setBack(option.option);
  }, [back.value, currentArmor]);

  return (
    <>
      <div className={s.container}>
        
        <div className={s.character}>
        <h1>Ваши хиты: { hasArmor ? Math.round(hits + 1) : 1 }</h1>
        
        {!hasArmor ? <div style={{ color: 'red' }}>Нет шлема - нет хитов</div> : <br />}
          <div className={s.row}>
            <div className={s.item}>
              <div><LinkButton text='Шлем' onclick={() => handleClick(itemHelmet)} /></div>
              <SelectItem
                placeholder='Нет шлема'
                options={helmet}
                onChange={handleHelmetArmor}
              />
            </div>
          </div>

          <div className={s.rowCenter}>
            <div className={s.leftColumn}>
              <div className={s.item}>
                <div><LinkButton text='Л.Плече' onclick={() => handleClick(itemShoulder)} /></div>
                <SelectItem
                  placeholder='Нет брони'
                  options={armor}
                  onChange={(option) => handleArmor({name: 'leftShoulder', option})}
                />
              </div>

              <div className={s.item}>
                <div><LinkButton text='Л.Рука' onclick={() => handleClick(itemArm)} /></div>
                  <SelectItem
                    placeholder='Нет брони'
                    options={armor}
                    onChange={(option) => handleArmor({name: 'leftArm', option})}
                  />
              </div>
            </div>

            <div className={s.columnCenter}>
              <div className={s.item}>
                <div><LinkButton text='Торс' onclick={() => handleClick(itemTorso)} /></div>
                <SelectItem 
                  placeholder='Нет брони'
                  options={armor}
                  onChange={(option) => handleArmor({name: 'torso', option})}
                />
              </div>
              
              <div className={s.item}>
                <div>Спина</div>
                <SelectItem 
                  value={back}
                  options={backOptions}
                  onChange={(option) => handleBack({name: 'back', option})}
                />
              </div>
            </div>

            <div className={s.column}>
              <div className={s.item}>
                <div><LinkButton text='П.Плече' onclick={() => handleClick(itemShoulder)} /></div>
                <SelectItem
                  placeholder='Нет брони'
                  options={armor}
                  onChange={(option) => handleArmor({name: 'rightShoulder', option})}
                />
              </div>

              <div className={s.item}>
                <div><LinkButton text='П.Рука' onclick={() => handleClick(itemArm)} /></div>
                  <SelectItem
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
                <div><LinkButton text='Л.Бедро' onclick={() => handleClick(itemHip)} /></div>
                <SelectItem
                  name='legs'
                  placeholder='Нет брони'
                  options={armor}
                  onChange={(option) => handleArmor({name: 'leftHip', option})}
                />
              </div>

              <div className={s.item}>
                <div><LinkButton text='Л.Голень' onclick={() => handleClick(itemLeg)} /></div>
                <SelectItem
                  name='legs'
                  placeholder='Нет брони'
                  options={armor}
                  onChange={(option) => handleArmor({name: 'leftLeg', option})}
                />
              </div>
            </div>

            <div className={s.leg}>
              <div className={s.item}>
                <div><LinkButton text='П.Бедро' onclick={() => handleClick(itemHip)} /></div>
                <SelectItem
                  name='legs'
                  placeholder='Нет брони'
                  options={armor}
                  onChange={(option) => handleArmor({name: 'rightHip', option})}
                />
              </div>

              <div className={s.item}>
                <div><LinkButton text='П.Голень' onclick={() => handleClick(itemLeg)} /></div>
                <SelectItem
                  name='legs'
                  placeholder='Нет брони'
                  options={armor}
                  onChange={(option) => handleArmor({name: 'rightLeg', option})}
                />
              </div>
            </div>
          </div>

          <div className={s.charBackground}>
            <img src={man} alt='' width='420' />
          </div>
        </div>
      </div>

      {isOpen && (
        <ItemModal
          setIsOpen={setIsOpen}
          text={item}
        />
      )}
    </>
  );
}