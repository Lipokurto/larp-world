import React from "react";

import { 
  ArmorHit, ArmorItem, BackItem,
  HandleArmor, HelmetItem,
} from "./type";

import man from '../../assets/armor-zone/man.png';

import heart from '../../assets/icons/health/heart.png';
import shield from '../../assets/icons/health/shield.png';

import { Item } from "../../rules-text/type";
import { itemArm, itemHelmet, itemHip, itemLeg, itemShoulder, itemTorso } from "../../rules-text/armor";
import { LinkButton } from "../link/link-button";
import { SelectItem } from "./select-item";
import { ItemModal } from "../item-modal/item-modal";

import s from './hit-calc.module.css';

const armor: ArmorItem[] = [
  {value: { type: 'no_armor', armorClass: 0 }, label: 'Нет брони' },
  {value: { type: 'leather', armorClass: 0.5 }, label: 'Кожанка' },
  {value: { type: 'chain', armorClass: 0.75 }, label: 'Кольчуга' },
  {value: { type: 'brigant', armorClass: 1 }, label: 'Бригантина' },
  {value: { type: 'lamelar', armorClass: 1 }, label: 'Ламяляр' },
  {value: { type: 'plate', armorClass: 1.25 }, label: 'Латы' },
]

const helmet: HelmetItem[] = [
  {value: { type: 'no_helmet', hasArmor: false }, label: 'Нет шлема' },
  {value: { type: 'hard', hasArmor: true }, label: 'Шлем' },
]

const defaultArmor: ArmorHit[] = [
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

const backOptions: BackItem[] = [{ value: true, label: 'Да' }, { value: false, label: 'Нет' }];

function getHits(name: string, armorClass: number, hasBack: boolean): number {
  if (name === 'torso') {
    if (hasBack) {
      return armorClass
    } else {
      return armorClass / 2;
    }
  }

  return armorClass / 4;
}

export function HitsCalc(): JSX.Element {
  const [hasArmor, setHasArmor] = React.useState<boolean>(false);
  const [hits, setHits] = React.useState<number>(1);
  const [currentArmor, setCurrentArmor] = React.useState<ArmorHit[]>(defaultArmor);
  const [back, setBack] = React.useState<BackItem>({ value: false, label: 'Нет' });

  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [item, setItem] = React.useState<Item | null>(null);

  const handleClick = React.useCallback((item: Item) => {
    setItem(item);
    setIsOpen(true);
  }, []);
  
  const handleHelmetArmor = React.useCallback((option: HelmetItem) => {
    setHasArmor(option.value.hasArmor);
  }, []);

  const handleArmor = React.useCallback(({ name, option }: HandleArmor) => {
    const findIndex = currentArmor.findIndex(p => p.limb === name);
    
    currentArmor.splice(findIndex, 1, {
      limb: name,
      hits: getHits(name, option.value.armorClass, back.value),
    });

    setCurrentArmor(currentArmor);

    const totalHits = currentArmor.reduce((acc, p) => acc + p.hits, 0);
    setHits(totalHits + 1);
  }, [back.value, currentArmor]);

  const handleBack = React.useCallback((option: BackItem) => {
    if (option.value !== back.value) {
      const torsoArmor = currentArmor.find(p => p.limb === 'torso');
      
      if (torsoArmor) {
        currentArmor.splice(0, 1, {
          limb: 'torso',
          hits:  option.value ? torsoArmor.hits * 2 : torsoArmor.hits / 2,
        });
  
        setCurrentArmor(currentArmor);
      }

      const totalHits = currentArmor.reduce((acc, p) => acc + p.hits, 0);
      setHits(totalHits);
    }

    setBack(option);
  }, [back.value, currentArmor]);

  const renderHealth = React.useMemo(() => {
    const shields = Array(Math.round(hits)).fill(shield);
    
    shields[0] = heart;

    return (
      <div style={{display: 'flex', justifyContent: 'center'}}>
        Вид хитов: 
        {hasArmor ? shields.map((p,i) => {
          return (
            <img src={p} key={p + i} alt='' width='20' />
          )
        }) : <img src={heart}  alt='' width='20' />}
      </div>
    )
  }, [hasArmor, hits]);

  return (
    <>
      <div className={s.container}>
        
        <div className={s.character}>
          <h1>Ваши хиты: { hasArmor ? Math.round(hits) : 1 }</h1>

          {renderHealth}
        
          {!hasArmor ? <div style={{ color: 'red' }}>Нет шлема - нет брони</div> : <br />}

          <div className={s.row}>
            <div className={s.item}>
              <div><LinkButton text='Шлем' onclick={() => handleClick(itemHelmet)} /></div>
              <SelectItem
                placeholder='Нет шлема'
                options={helmet}
                onChange={(option: HelmetItem) => handleHelmetArmor(option)}             />
            </div>
          </div>

          <div className={s.rowCenter}>
            <div className={s.leftColumn}>
              <div className={s.item}>
                <div><LinkButton text='Л.Плече' onclick={() => handleClick(itemShoulder)} /></div>
                <SelectItem
                  placeholder='Нет брони'
                  options={armor}
                  onChange={(option: ArmorItem) => handleArmor({ name: 'leftShoulder', option })} />
              </div>

              <div className={s.item}>
                <div><LinkButton text='Л.Рука' onclick={() => handleClick(itemArm)} /></div>
                  <SelectItem
                    placeholder='Нет брони'
                    options={armor}
                    onChange={(option: ArmorItem) => handleArmor({ name: 'leftArm', option })} 
                  />
              </div>
            </div>

            <div className={s.columnCenter}>
              <div className={s.item}>
                <div><LinkButton text='Торс' onclick={() => handleClick(itemTorso)} /></div>
                <SelectItem 
                  placeholder='Нет брони'
                  options={armor}
                  onChange={(option: ArmorItem) => handleArmor({name: 'torso', option})}
                />
              </div>
              
              <div className={s.item}>
                <div>Спина</div>
                <SelectItem 
                  value={back}
                  options={backOptions}
                  onChange={(option: BackItem) => handleBack(option)}
                />
              </div>
            </div>

            <div className={s.column}>
              <div className={s.item}>
                <div><LinkButton text='П.Плече' onclick={() => handleClick(itemShoulder)} /></div>
                <SelectItem
                  placeholder='Нет брони'
                  options={armor}
                  onChange={(option: ArmorItem) => handleArmor({name: 'rightShoulder', option})}
                />
              </div>

              <div className={s.item}>
                <div><LinkButton text='П.Рука' onclick={() => handleClick(itemArm)} /></div>
                  <SelectItem
                    placeholder='Нет брони'
                    options={armor}
                    onChange={(option: ArmorItem) => handleArmor({name: 'rightArm', option})}
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
                  onChange={(option: ArmorItem) => handleArmor({name: 'leftHip', option})}
                />
              </div>

              <div className={s.item}>
                <div><LinkButton text='Л.Голень' onclick={() => handleClick(itemLeg)} /></div>
                <SelectItem
                  name='legs'
                  placeholder='Нет брони'
                  options={armor}
                  onChange={(option: ArmorItem) => handleArmor({name: 'leftLeg', option})}
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
                  onChange={(option: ArmorItem) => handleArmor({name: 'rightHip', option})}
                />
              </div>

              <div className={s.item}>
                <div><LinkButton text='П.Голень' onclick={() => handleClick(itemLeg)} /></div>
                <SelectItem
                  name='legs'
                  placeholder='Нет брони'
                  options={armor}
                  onChange={(option: ArmorItem) => handleArmor({name: 'rightLeg', option})}
                />
              </div>
            </div>
          </div>
        </div>

        <div className={s.charBackground}>
          <img src={man} alt='' width='420' />
        </div>
      </div>

      {isOpen && (
        <ItemModal
          setIsOpen={setIsOpen}
          item={item}
        />
      )}
    </>
  );
}