import React from 'react';
import ReactSelect from 'react-select';

import abomination from '../../../assets/rules/monsters/visual/abomination.png';
import crab from '../../../assets/rules/monsters/visual/crab.png';
import glutton from '../../../assets/rules/monsters/visual/glutton.png';

import wRegular from '../../../assets/weapon-preset/regular.png';
import wDistant from '../../../assets/weapon-preset/distant.png';
import wHeavy from '../../../assets/weapon-preset/heavy.png';
import wSpetial from '../../../assets/weapon-preset/spetial.png';

import sword from '../../../assets/icons/damage/sword.png';
import arrow from '../../../assets/icons/damage/arrow.png';
import claw from '../../../assets/icons/damage/claw.png';
import blast from '../../../assets/icons/damage/blast.png';

import tomb from '../../../assets/rules/monsters/visual/tombMonsters.png';

import heart from '../../../assets/icons/health/heart.png';
import heal from '../../../assets/icons/health/heal.png';

import healMonster from '../../../assets/icons/monster/heal-mon.png';
import healMonsterVictim from '../../../assets/icons/monster/heal-mon-victim.png';
import healObsessed from '../../../assets/icons/monster/heal-obs.png';
import riseObsessed from '../../../assets/icons/monster/recover-obs.png';

import twistedObs from '../../../assets/rules/monsters/visual/obs/twisted.png';
import heavyObs from '../../../assets/rules/monsters/visual/obs/heavy.png';
import lightObs from '../../../assets/rules/monsters/visual/obs/light.png';

import twistedObsOff from '../../../assets/rules/monsters/visual/obs/twistedoff.png';
import heavyObsOff from '../../../assets/rules/monsters/visual/obs/heavyoff.png';
import lightObsOff from '../../../assets/rules/monsters/visual/obs/lightoff.png';

import { decimalText } from '../../utils/decimal-text';
import { ObsessedCalc } from './obsessed-calc';

import { ObsessedType } from './type';

import s from './beast-calc.module.css';


type MonsterType = {
  label: string,
  value: {
    src: string,
    hits: number,
  },
};

type Weapon = {
  label: string,
  value: {
    src: string,
    damage: number,
    breakShields: boolean
  },
};

type Status = 'Мертв' | 'Напуган' | 'Голоден' | 'Здоров';

type Warning = 'Невозможно создать одержимого' | 'Невозможно вылечить одержимого' | 'Выберете кого хотите возродить' | 'Выберете кого хотите вылечить' | 'Некого лечить';

type UsableItems = 'Пожирание' | 'Пожирание жертвы' | 'Создать одержимого' | 'Излечить одержимого';

const weapon: Weapon[] = [
  {label: 'Обычное оружие', value: { src: wRegular, damage: 1, breakShields: false }},
  {label: 'Стрелковое оружие', value: { src: wDistant, damage: 2, breakShields: false }},
  {label: 'Особое оружие', value: { src: wSpetial, damage: 5, breakShields: false }},
  {label: 'Тяжелое оружие', value: { src: wHeavy, damage: 10, breakShields: true }},
];

const monster: MonsterType[] = [
  {label: 'Мерзость', value: { src: abomination, hits: 25 }},
  {label: 'Тяжеловес', value: { src: crab, hits: 20 }},
  {label: 'Падальщик', value: { src: glutton, hits: 15 }},
];

const obsessedList: ObsessedType[] = [
  {label: 'Близкий', value: { src: { on: twistedObs, off: twistedObsOff }, hits: 6, isAlive: false }},
  {label: 'Воин', value: { src: { on: heavyObs, off: heavyObsOff }, hits: 4, isAlive: false }},
  {label: 'Разведчик', value: { src: { on: lightObs, off: lightObsOff }, hits: 2, isAlive: false }},
  {label: 'Разведчик', value: { src: { on: lightObs, off: lightObsOff }, hits: 2, isAlive: false }},
];

const items = [
  {label: 'Пожирание', src: healMonster },
  {label: 'Пожирание жертвы', src: healMonsterVictim},
  {label: 'Создать одержимого', src: riseObsessed},
  {label: 'Излечить одержимого', src: healObsessed},
];

function getObsList(maxMonsterHits: number): ObsessedType[] {
  if (maxMonsterHits === 20) {
    return obsessedList.slice(1);
  }

  if (maxMonsterHits === 15) {
    return obsessedList.slice(2);
  }

  return obsessedList
}

export function BeastCalc(): JSX.Element {
  const [maxHits, setMaxHits] = React.useState<number>(0);
  const [timer, setTimer] = React.useState<number | null>(null);
  const [warning, setWarning] = React.useState<Warning | null>(null);

  const [isRiseActive, setIsRiseActive] = React.useState<boolean>(false);
  const [isObsHealActive, setIsObsHealActive] = React.useState<boolean>(false);

  const [obsState, setObsState] = React.useState<ObsessedType[]>(obsessedList);

  const [status, setStatus] = React.useState<Status>('Здоров');
  const [currentHits, setCurrentHits] = React.useState<number>(0);
  const [weaponDamage, setWeaponDamage] = React.useState<number>(0);
  const [currentItem, setCurrentItem] = React.useState<UsableItems | null>(null);
  const [monsterImg, setMonsterImg] = React.useState<string>('');
  const [weaponImg, setWeaponImg] = React.useState<string>('');

  React.useEffect(() => {
    handleArmorChange(monster[0]);
    setMaxHits(monster[0].value.hits);
    handleWeaponChange(weapon[0]);
    setCurrentHits(monster[0].value.hits);
    setObsState(obsessedList);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleArmorChange = React.useCallback((option: MonsterType) => {
    setMaxHits(option.value.hits);
    setCurrentHits(option.value.hits);
    setMonsterImg(option.value.src);
    setTimer(0);
    setStatus('Здоров');

    setObsState(getObsList(option.value.hits));
  }, []);

  const resetCharacter = React.useCallback(() => {
    const newArmor = monster.find(p => p.value.hits === maxHits) || monster[0];
    handleArmorChange(newArmor);
    setStatus('Здоров');
    setTimer(null);
    setObsState(getObsList(maxHits));

  }, [handleArmorChange, maxHits]);

  const handleWeaponChange = React.useCallback((option: Weapon) => {
    setWeaponDamage(option.value.damage);
    setWeaponImg(option.value.src);
  }, []);

  const attackType = React.useMemo(() => {
    if (weaponDamage === 1) {
      return <div className={s.attackRegular}><img src={sword} alt='' width='100' /></div>
    }

    if (weaponDamage === 2) {
      return <div className={s.attackDistant}><img src={arrow} alt='' width='100' /></div>
    }

    if (weaponDamage === 5) {
      return <div className={s.attackSpecial}><img src={claw} alt='' width='100' /></div>
    }

    if (weaponDamage === 10) {
      return <div className={s.attackHeavy}><img src={blast} alt='' width='100' /></div>
    }
  }, [weaponDamage]);

  const healType = React.useMemo(() => {
    if (currentItem === 'Пожирание') {
      return <div className={s.heal}><img src={heal} alt='' width='100' /></div>
    }
  }, [currentItem]);

  const handleAttack = React.useCallback(() => {
    if (status !== 'Мертв') {    
      const restHits = currentHits - weaponDamage;
  
      if (restHits >= 1 && restHits <= maxHits) {
        setStatus('Голоден');
        setCurrentHits(restHits);
        setCurrentItem(null);
        setTimer(0);
        return;
      }
  
      if (status === 'Напуган') {
        setStatus('Мертв');
        setTimer(180)
        setCurrentHits(0);
        setCurrentItem(null);

        setObsState(obsessedList);
        return;
      }
  
      if (restHits <= 0) {
        setStatus('Напуган');
        setCurrentHits(0);
        setCurrentItem(null);
        setTimer(0);
        return;
      }
    }
  }, [currentHits, maxHits, status, weaponDamage]);

  const color = React.useMemo(() => {
    if (status === 'Здоров') {
      return 'green';
    }

    if (status === 'Голоден') {
      return 'yellow';
    }

    if (status === 'Напуган' ) {
      return 'red';
    }

    if (status === 'Мертв' ) {
      return 'violet';
    }

    return 'white'
  }, [status]);

  const renderStatus = React.useMemo(() => {
    return <div>Статус персонажа: <b style={{ color: color }}>{status}</b></div>
  }, [color, status]);



  const renderHealth = React.useMemo(() => {
    const hearts = Array(currentHits).fill(heart);
    
    return (
      <>
        Вид хитов:
        <div className={s.health}>
          
          {hearts.map((p, i) => {
            return (
              <img src={p} key={p+i} alt='' width='10' />
            )
          })}
        </div>
      </>
    )
  }, [currentHits]);

  const handleHeal = React.useCallback((item: UsableItems) => {
    if (item === 'Пожирание' && ( status === 'Напуган' || status === 'Голоден')) {
      setCurrentItem('Пожирание');
      setTimer(10);
      return;
    }

    if (item === 'Пожирание жертвы' && ( status === 'Напуган' || status === 'Голоден')) {
      const resultHits = currentHits + 5 >= maxHits ? maxHits : currentHits + 5;

      setTimer(0);
      setStatus(resultHits === maxHits ? 'Здоров' : 'Голоден');
      setCurrentHits(resultHits);
      return;
    }
  }, [currentHits, maxHits, status]);

  const handleCreate = React.useCallback((item: UsableItems) => {
    if (item === 'Создать одержимого') {
      if (currentHits - 5 <= 0) {
        setWarning('Невозможно создать одержимого');
        return;
      }

      if (isRiseActive) {
        return;
      }
      
      setWarning('Выберете кого хотите возродить');
      setIsRiseActive(true);
      setStatus('Голоден');
      setCurrentHits(currentHits - 5);
    }

    if (item === 'Излечить одержимого') {
      if (currentHits - 2 <= 0) {
        setWarning('Невозможно вылечить одержимого');
        return;
      }

      if (isObsHealActive) {
        return;
      }

      if (!obsState.some(p => p.value.isAlive)) {
        setWarning('Некого лечить');
        return;
      }
      
      setWarning('Выберете кого хотите вылечить');
      setIsObsHealActive(true);
      setStatus('Голоден');
      setCurrentHits(currentHits - 2);
    }
  }, [currentHits, isObsHealActive, isRiseActive, obsState]);

  const handleRise = React.useCallback((index: number) => {
    if (isRiseActive) {
        const resultObsessed = obsState.map((p ,i) => {
          return ({
              label: p.label,
              value: { 
                src: { 
                  on: p.value.src.on,
                  off: p.value.src.off,
                }, 
                hits: p.value.hits,
                isAlive: i === index || p.value.isAlive,
              }
            })
        })
        setObsState(resultObsessed);
        setIsRiseActive(false);
        setWarning(null);
        return;
    }

    if (isObsHealActive) {
        setIsObsHealActive(false);
        setIsRiseActive(false);
        setWarning(null);
        return;
    }
  }, [isObsHealActive, isRiseActive, obsState]);

  const itemsList = React.useMemo(() => {
    return (
      <div className={s.items}>
        {items.map(p => {
          if (p.label === 'Пожирание' || p.label === 'Пожирание жертвы') {
            return (
              <div className={s.usableItem} key={p.label} onClick={() => handleHeal(p.label as UsableItems)}>
                <img  src={p.src} alt='' width='65' />
                <div style={{height: '48px'}}>{p.label}</div>
              </div>
            )
          }

          if (p.label === 'Создать одержимого') {
            return (
              <div className={isRiseActive ? s.usableItemActive : s.usableItem} key={p.label} onClick={() => handleCreate(p.label as UsableItems)}>
                <img  src={p.src} alt='' width='65' />
                <div style={{height: '48px'}}>{p.label}</div>
              </div>
            )
          }

          return (
            <div className={isObsHealActive ? s.usableItemActive : s.usableItem} key={p.label} onClick={() => handleCreate(p.label as UsableItems)}>
              <img  src={p.src} alt='' width='65' />
              <div style={{height: '48px'}}>{p.label}</div>
            </div>
          )
        })}
      </div>
    )
  }, [handleCreate, handleHeal, isObsHealActive, isRiseActive]);

  const handleHealWait = React.useCallback(() => {
    if (currentItem === 'Пожирание' && ( status === 'Напуган' || status === 'Голоден')) {
      const resultHits = currentHits + 5 >= maxHits ? maxHits : currentHits + 5;
      setCurrentHits(resultHits);
      setStatus(resultHits === maxHits ? 'Здоров' : 'Голоден');
      setTimer(null);
      setCurrentItem(null);

      return;
    }
  }, [currentHits, currentItem, maxHits, status]);

  const renderTimer = React.useMemo(() => {
    if (timer) {
      return (
        <div>
          <button 
            className={s.waitButton}
            onClick={status === 'Мертв' ? resetCharacter : handleHealWait}
          >
              Подождать {timer} {decimalText(timer, ['минуту', 'минуты', 'минут'])}
          </button>
        </div>
      )
    }
  }, [handleHealWait, resetCharacter, status, timer]);

  const renderDescription = React.useMemo(() => {
    if (currentItem === null) {
      if (status === 'Здоров') {
        return (
          <div>Вы полностью здоровы и готовы к бою</div>
        )
      }

      if (status === 'Голоден') {
        return (
          <div>Вы голодны и активно ищите пищу</div>
        )
      }

      if (status === 'Напуган') {
        return (
          <div>Сила с которой вы столкнулись напомнила вам о том что вас ждет после смерти - вы в страхе убегаете в свое убежище</div>
        )
      }

      if (status === 'Мертв') {
        return (
          <div>Посланцы Тьмы забрали вас в качестве платы за могущество, отправляйтесь в свое логово без маски и ожидайте там возрождения</div>
        )
      }
    }

    if (currentItem === 'Пожирание') {
      return (
        <div>Вы питаетесь, для усвоения пищи вам понадобится время</div>
      )
    }
  }, [currentItem, status]);

  const renderObsessedList = React.useMemo(() => {
      return (
        <div className={s.obsContainer}>
          {obsState.map((p, i) => {
            return (
              <div 
                onClick={() => handleRise(i)}
                className={isRiseActive || isObsHealActive ?  s.obsItemOuter : undefined}
              >
                <ObsessedCalc
                  isObsHealActive={p.value.isAlive ? isObsHealActive : false}
                  ob={p}
                  index={i}
                  weaponDamage={weaponDamage}
                />
              </div>
            )}
          )}
        </div>
      )
  }, [handleRise, isObsHealActive, isRiseActive, obsState, weaponDamage]);

  return (
    <div className={s.calcContainer}>
      <div className={s.charItemContainer}>
        <div className={s.char}>
          <ReactSelect
            className={s.select} 
            options={monster}
            defaultValue={monster[0]}
            onChange={(option) => handleArmorChange(option as MonsterType)}
            styles={{
              menu: (provided: any) => ({...provided, zIndex: 5})
            }}
          />

          <div className={s.charItem}>
            {renderStatus}
      
            {renderHealth}
            
            <div> Остлось хитов: <b>{currentHits}</b></div>
            <div onClick={handleAttack}>
              <div className={s.attackType}>{currentItem ? healType : attackType}</div>
              <img 
                src={status === 'Мертв' ? tomb : monsterImg} 
                alt='' height='400'
                style={{position: 'relative', marginTop: '-90px'}}
              />
            </div>
          </div>
        </div>

        <div className={s.weapon}>
          <b style={{ color: 'wheat' }}>АРСЕНАЛ</b>
          <div className={s.itemContainer}>
            <ReactSelect
                className={s.select} 
                options={weapon}
                defaultValue={weapon[0]}
                onChange={(option) => handleWeaponChange(option as Weapon)}
                styles={{
                  menu: (provided: any) => ({...provided, zIndex: 5})
                }}
              />
            <div> Урон оружия: <b>{weaponDamage} {decimalText(weaponDamage, ['хит', 'хита', 'хитов'])}</b></div>

            <div style={{ margin: 'auto 0 auto 0' }}>
              <img  src={weaponImg} alt='' width='300 '/>
            </div>
          </div>

          <b style={{ color: 'wheat' }}>ПРЕДМЕТЫ</b>
          <div className={s.inventory}>
            {itemsList}
          </div>

          <b style={{ color: 'wheat' }}>ОПИСАНИЕ</b>
          <div className={s.description}>
            {warning ? warning : renderDescription}

            {renderTimer}
          </div>
        </div>
      </div>

      <b style={{ color: 'wheat' }}>ОДЕРЖИМЫЕ</b>
      <div className={s.obsessedContainer}>
        {renderObsessedList}
      </div>
    </div>
  );
}