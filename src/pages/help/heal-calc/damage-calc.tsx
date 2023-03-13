import React from 'react';
import ReactSelect from 'react-select';

import medium from '../../../assets/armor-preset/medium.png';
import heavy from '../../../assets/armor-preset/heavy.png';
import full from '../../../assets/armor-preset/full.png';

import wRegular from '../../../assets/weapon-preset/regular.png';
import wDistant from '../../../assets/weapon-preset/distant.png';
import wHeavy from '../../../assets/weapon-preset/heavy.png';
import wSpetial from '../../../assets/weapon-preset/spetial.png';

import sword from '../../../assets/icons/damage/sword.png';
import arrow from '../../../assets/icons/damage/arrow.png';
import claw from '../../../assets/icons/damage/claw.png';
import blast from '../../../assets/icons/damage/blast.png';

import tomb from '../../../assets/icons/tombNew.png';

import heart from '../../../assets/icons/health/heart.png';
import shield from '../../../assets/icons/health/shield.png';

import healPack from '../../../assets/icons/items/healPack.png';
import healPotion from '../../../assets/icons/items/healPotion.png';
import repairPack from '../../../assets/icons/items/repairPack.png';
import repairPotion from '../../../assets/icons/items/repairPotion.png';

import s from './damage-calc.module.css';

type Armor = {
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

type Status = 'Мертв' | 'Тяжело ранен' | 'Ранен' | 'Здоров';

const weapon: Weapon[] = [
  {label: 'Обычное оружие', value: { src: wRegular, damage: 1, breakShields: false }},
  {label: 'Стрелковое оружие', value: { src: wDistant, damage: 2, breakShields: false }},
  {label: 'Особое оружие', value: { src: wSpetial, damage: 5, breakShields: false }},
  {label: 'Тяжелое оружие', value: { src: wHeavy, damage: 10, breakShields: true }},
];

const armor: Armor[] = [
  {label: 'Средний доспех', value: { src: medium, hits: 3 }},
  {label: 'Тяжелый доспех', value: { src: heavy, hits: 4 }},
  {label: 'Полный доспех', value: { src: full, hits: 5 }},
];

const items = [
  {label: 'Медкомплект', src: healPack },
  {label: 'Целебная мазь', src: healPotion},
  {label: 'Ремкомплект', src: repairPack},
  {label: 'Оружейное масло', src: repairPotion},
];

export function DamageCalc(): JSX.Element {
  const [maxHits, setMaxHits] = React.useState<number>(0);
  const [timer, setTimer] = React.useState<number | null>(null);

  const [weaponDamage, setWeaponDamage] = React.useState<number>(0);
  const [currentHits, setCurrentHits] = React.useState<number>(0);
  const [status, setStatus] = React.useState<Status>('Здоров');

  const [armorImg, setArmorImg] = React.useState<string>('');
  const [weaponImg, setWeaponImg] = React.useState<string>('');

  React.useEffect(() => {
    handleArmorChange(armor[0]);
    setMaxHits(armor[0].value.hits);
    handleWeaponChange(weapon[0]);
    setCurrentHits(armor[0].value.hits);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleArmorChange = React.useCallback((option: Armor) => {
    setMaxHits(option.value.hits);
    setCurrentHits(option.value.hits);
    setArmorImg(option.value.src);
    setStatus('Здоров');
  }, []);

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

  const handleAttack = React.useCallback(() => {
    if (status !== 'Мертв') {    
      const restHits = currentHits - weaponDamage;
  
      if (restHits >= 1 && restHits <= maxHits) {
        setStatus('Ранен');
        setCurrentHits(restHits);
        return;
      }
  
      if (status === 'Тяжело ранен') {
        setStatus('Мертв');
        setCurrentHits(0);
        return;
      }
  
      if (restHits <= 0) {
        setStatus('Тяжело ранен');
        setCurrentHits(0);
        return;
      }
    }
  }, [currentHits, maxHits, status, weaponDamage]);

  const color = React.useMemo(() => {
    if (status === 'Здоров') {
      return 'green';
    }

    if (status === 'Ранен') {
      return 'yellow';
    }

    if (status === 'Тяжело ранен' ) {
      return 'red';
    }

    if (status === 'Мертв' ) {
      return 'violet';
    }

    return 'white'
  }, [status]);

  const renderStatus = React.useMemo(() => {
    return <div style={{ color: color, fontWeight: 'bold' }}>{status}</div>
  }, [color, status]);

  const renderHealth = React.useMemo(() => {
    const shields = Array(currentHits).fill(shield);
    
    if (currentHits !== 0 ) {
      shields[0] = heart;
    }

    return (
      <div className={currentHits !== 0 ? s.health : s.dead}>
        {shields.map((p,i) => {
          return (
            <img src={p} key={p+i} alt='' width='20' />
          )
        })}
      </div>
    )
  }, [currentHits]);

  const handleHeal = React.useCallback((item: string) => {
    if (item === 'Медкомплект' && currentHits === 0) {
      setTimer(10);
      setCurrentHits(1);
      setStatus('Ранен');
      return
    }

    if (item === 'Целебная мазь' && currentHits === 0) {
      setTimer(0);
      setCurrentHits(1);
      setStatus('Ранен');
      return
    }

    if (item === 'Ремкомплект' && currentHits >= 1) {
      setTimer(10);
      setCurrentHits(maxHits);
      setStatus('Здоров');
      return
    }

    if (item === 'Оружейное масло' && currentHits >= 1) {
      setTimer(0);
      setCurrentHits(maxHits);
      setStatus('Здоров');
      return
    }
    
  }, [currentHits, maxHits]);

  const itemsList = React.useMemo(() => {
    return (
      <div className={s.items}>
        {items.map(p => {
          return (
            <div className={s.usableItem} key={p.label} onClick={() => handleHeal(p.label)}>
              <img  src={p.src} alt='' width='65' />
              <div style={{height: '48px'}}>{p.label}</div>
            </div>
          )
        })}
      </div>
    )
  }, [handleHeal]);

  return (
    <div className={s.wrapper}>
      <div className={s.calcContainer}>
        <div className={s.char}>
          <ReactSelect
            className={s.select} 
            options={armor}
            defaultValue={armor[0]}
            onChange={(option) => handleArmorChange(option as Armor)}
            styles={{
              menu: (provided: any) => ({...provided, zIndex: 5})
            }}
          />

          <div className={s.charItem}>
            {renderStatus}
      
            {renderHealth}
            
            <div> Остлось хитов: {currentHits}</div>
            <div onClick={handleAttack}>
              <div className={s.attackType}>{attackType}</div>
              <img src={status === 'Мертв' ? tomb : armorImg} alt='' height='300' style={{position: 'relative', right: '20%'}}/>
            </div>
          </div>
        </div>

        <div className={s.weapon}>
          <ReactSelect
              className={s.select} 
              options={weapon}
              defaultValue={weapon[0]}
              onChange={(option) => handleWeaponChange(option as Weapon)}
              styles={{
                menu: (provided: any) => ({...provided, zIndex: 5})
              }}
            />

          <div className={s.itemContainer}>
            <div> Урон оружия {weaponDamage}</div>

            <div style={{ margin: 'auto 0 auto 0' }}>
              <img  src={weaponImg} alt='' width='300 '/>
            </div>
            {itemsList}
          </div>
        </div>
      </div>
    </div>
  );
}