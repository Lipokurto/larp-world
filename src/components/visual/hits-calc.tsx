import React from "react";

import { 
  ArmorHit, ArmorItem, BackItem,
  HandleArmor, HelmetItem,
} from "./type";

import { SelectItem } from "./select-item";
import { CardTooltip } from "../card-tooltip/card-tooltip";
import { LinkButton } from "../link/link-button";

import man from '../../assets/armor-zone/man.png';
import heart from '../../assets/icons/health/heart.png';
import shield from '../../assets/icons/health/shield.png';
import armorHelmet from '../../assets/armor-zone/helmet.jpg';
import armorArm from '../../assets/armor-zone/arm.jpg';
import armorShoulder from '../../assets/armor-zone/shoulder.jpg';
import armorTorso from '../../assets/armor-zone/torso.jpg';
import armorHip from '../../assets/armor-zone/hip.jpg';
import armorLeg from '../../assets/armor-zone/leg.jpg';

import noneArmor from '../../assets/armor-material/none.jpg';
import leatherArmor from '../../assets/armor-material/leather.jpg';
import chainArmor from '../../assets/armor-material/chainmail.jpg';
import brigaArmor from '../../assets/armor-material/briga.jpg';
import lamelarArmor from '../../assets/armor-material/lamelar.jpg';
import steelArmor from '../../assets/armor-material/steel.jpg';
import helmetArmor from '../../assets/armor-material/helmet.png';

import s from './hit-calc.module.css';

const armor: ArmorItem[] = [
  {value: { type: 'no_armor', armorClass: 0 }, label: 'Нет брони', icon: noneArmor },
  {value: { type: 'leather', armorClass: 0.5 }, label: 'Кожанка', icon: leatherArmor  },
  {value: { type: 'chain', armorClass: 0.75 }, label: 'Кольчуга', icon: chainArmor  },
  {value: { type: 'brigant', armorClass: 1 }, label: 'Бригантина', icon: brigaArmor  },
  {value: { type: 'lamelar', armorClass: 1 }, label: 'Ламяляр', icon: lamelarArmor  },
  {value: { type: 'plate', armorClass: 1.25 }, label: 'Латы', icon: steelArmor  },
]

const helmet: HelmetItem[] = [
  {value: { type: 'hard', hasArmor: true }, label: 'Есть шлем', icon: helmetArmor   },
  {value: { type: 'no_helmet', hasArmor: false }, label: 'Нет шлема', icon: noneArmor   },
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
  const [isManual, setManual] = React.useState<Boolean>(true);
  
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

  const renderLabel = React.useCallback((text: string, element: JSX.Element) => {
    return isManual ? element : text;
  }, [isManual])

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
      setHits(totalHits + 1);
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
          <LinkButton text={`${isManual ? 'Выключить' : 'Включить'} подсказки`} onclick={() => setManual(!isManual)}/>

          <div style={{fontSize:18}}>Ваши хиты: { hasArmor ? Math.round(hits) : 1 }</div>

          {renderHealth}
        
          {!hasArmor ? <div style={{ color: 'red' }}>Нет шлема - нет брони</div> : <br />}

          <div className={s.row}>
            <div className={s.item}>
              {renderLabel('Шлем',
                <CardTooltip
                  src={armorHelmet}
                  cardName="Голова"
                  width={300}
                />
              )}

              <SelectItem
                placeholder='Нет шлема'
                name='helmet'
                options={helmet}
                onChange={(option: HelmetItem) => handleHelmetArmor(option)}
              />
            </div>
          </div>

          <div className={s.rowCenter}>
            <div className={s.leftColumn}>
              <div className={s.item}>
                {renderLabel(
                  'Л.Плечо',
                  <CardTooltip
                    src={armorShoulder}
                    cardName="Л.Плечо"
                    width={300}
                  />
                )}

                <SelectItem
                  placeholder='Нет брони'
                  options={armor}
                  onChange={(option: ArmorItem) => handleArmor({ name: 'leftShoulder', option })}
                />
              </div>

              <div className={s.item}>
                {renderLabel(
                  'Л.Рука',
                  <CardTooltip
                    src={armorArm}
                    cardName="Л.Рука"
                    width={300}
                  />
                )}

                <SelectItem
                  placeholder='Нет брони'
                  options={armor}
                  onChange={(option: ArmorItem) => handleArmor({ name: 'leftArm', option })} 
                />
              </div>
            </div>

            <div className={s.columnCenter}>
              <div className={s.item}>
                {renderLabel(
                  'Торс',
                  <CardTooltip
                    src={armorTorso}
                    cardName="Торс"
                    width={300}
                  />
                )}

                <SelectItem 
                  placeholder='Нет брони'
                  options={armor}
                  onChange={(option: ArmorItem) => handleArmor({name: 'torso', option})}
                />
              </div>
              
              <div className={s.item}>
                {renderLabel(
                  'Спина',
                  <CardTooltip
                    src={armorTorso}
                    cardName="Спина"
                    width={300}
                  />
                )}

                <SelectItem 
                  value={back}
                  name='back'
                  options={backOptions}
                  onChange={(option: BackItem) => handleBack(option)}
                />
              </div>
            </div>

            <div className={s.column}>
              <div className={s.item}>
                {renderLabel(
                  'П.Плечо',
                  <CardTooltip
                    src={armorShoulder}
                    cardName="П.Плечо"
                    width={300}
                  />
                )}

                <SelectItem
                  placeholder='Нет брони'
                  options={armor}
                  onChange={(option: ArmorItem) => handleArmor({name: 'rightShoulder', option})}
                />
              </div>

              <div className={s.item}>
                {renderLabel(
                  'П.Рука',
                  <CardTooltip
                    src={armorArm}
                    cardName="П.Рука"
                    width={300}
                  />
                )}

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
                {renderLabel(
                  'Л.Бедро',
                  <CardTooltip
                    src={armorHip}
                    cardName="Л.Бедро"
                    width={300}
                  />
                )}

                <SelectItem
                  name='legs'
                  placeholder='Нет брони'
                  options={armor}
                  onChange={(option: ArmorItem) => handleArmor({name: 'leftHip', option})}
                />
              </div>

              <div className={s.item}>
                {renderLabel(
                  'Л.Нога',
                  <CardTooltip
                    src={armorLeg}
                    cardName="Л.Нога"
                    width={300}
                  />
                )}

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
                {renderLabel(
                  'П.Бедро',
                  <CardTooltip
                    src={armorHip}
                    cardName="П.Бедро"
                    width={300}
                  />
                )}

                <SelectItem
                  name='legs'
                  placeholder='Нет брони'
                  options={armor}
                  onChange={(option: ArmorItem) => handleArmor({name: 'rightHip', option})}
                />
              </div>

              <div className={s.item}>
                {renderLabel(
                  'П.Нога',
                  <CardTooltip
                    src={armorLeg}
                    cardName="П.Нога"
                    width={300}
                  />
                )}

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
    </>
  );
}