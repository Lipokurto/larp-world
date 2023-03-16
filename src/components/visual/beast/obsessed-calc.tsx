import React from 'react';

import heart from '../../../assets/icons/health/heart.png';
import strike from '../../../assets/icons/damage/strike.png';

import { ObsessedType } from './type';

import s from './beast-calc.module.css';

type Props = {
  ob: ObsessedType,
  index: number,
  weaponDamage: number,
  isObsHealActive: boolean,
};

export function ObsessedCalc({ isObsHealActive, ob, index, weaponDamage }: Props): JSX.Element {
  const [maxHits, setMaxHits] = React.useState<number>(0);
  const [currentHits, setCurrentHits] = React.useState<number>(0);

  React.useEffect(() => {
    setCurrentHits(ob.value.hits);
    setMaxHits(ob.value.hits);
  }, [ob.value.hits, ob.value.isAlive]);

  const renderObsessedHits = React.useCallback((maxObsHits: number) => {
    const hearts = Array(maxObsHits).fill(heart);
    
    return (
      <div className={s.health}>
        
        {hearts.map((p, i) => {
          return (
            <img src={p} key={p + i} alt='' width='10' />
          )
        })}
      </div>
    )
  }, []); 

  const handleAttack = React.useCallback(() => {
    if (isObsHealActive && currentHits !== 0 && ob.value.isAlive) {
      setCurrentHits(maxHits);
      return;
    }

    if (ob.value.isAlive) {
      const resultHits = currentHits - weaponDamage;
      if (resultHits === 0) {
        ob.value.isAlive = false;
        setCurrentHits(0);
        return;
      }
      
      setCurrentHits(currentHits - weaponDamage);
    }
  }, [currentHits, isObsHealActive, maxHits, ob.value, weaponDamage]);

  const renderStrike = React.useMemo(() => {
    if (ob.value.isAlive && !isObsHealActive) {
      return (
        <div className={s.obsStrike}>
          <img src={strike} alt='' width='100' />
        </div>
      )
    }

    return null;
  }, [isObsHealActive, ob.value.isAlive]);

  return (
    <div className={s.obsItem} onClick={handleAttack}>
      <b 
        style={{ 
          opacity: ob.value.isAlive ? 1 : 0.5,
          marginBottom: ob.value.isAlive ? 0 : '10px',
        }}
      >
        {ob.value.isAlive ? ob.label : 'Не создан'}
      </b>

      {ob.value.isAlive ? renderObsessedHits(currentHits) : null}

      {renderStrike}

      <div style={{position: 'relative', marginTop: ob.value.isAlive && !isObsHealActive? '-105px' : 0}}>
        <img
          key={`${ob.label + index}`}
          src={ob.value.isAlive ? ob.value.src.on : ob.value.src.off}
          alt=''
          width='100'
        />
      </div>
    </div>
  )
}