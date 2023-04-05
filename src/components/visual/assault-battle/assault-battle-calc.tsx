import React from 'react';

import { randomInt } from '../../utils/random-int';

import soldierRed from '../../../assets/icons/assault/warrior01.png';
import soldierBlue from '../../../assets/icons/assault/warrior02.png';
import ghostRed from '../../../assets/icons/assault/ghost01.png';
import ghostBlue from '../../../assets/icons/assault/ghost02.png';
import tomb from '../../../assets/icons/assault/tomb.png';
import mapFort from '../../../assets/icons/assault/battle-map-fort.jpg';
import mapNoFort from '../../../assets/icons/assault/battle-map-no-fort.jpg';

import s from './assault-battle-calc.module.css';

type Position = {
  x: number,
  y: number,
};

type Soldier = {
  key: string,
  position: Position,
  pic: string,
}

type Phase = 'Подготовка' | 'Штурм' | 'Итоги';

const SQUARE_SIZE = 25;



const FORT = [
  {
    key: randomInt(0, 99999).toString(),
    size: {
      width: 75,
      height: 100,
    },
    position: {
      x: 400,
      y: 0,
    },
    color: 'brown',
  },
  {
    key: randomInt(0, 99999).toString(),
    size: {
      width: 50,
      height: 150,
    },
    position: {
      x: 350,
      y: 75,
    },
    color: 'brown',
  },
  {
    key: randomInt(0, 99999).toString(),
    size: {
      width: 75,
      height: 100,
    },
    position: {
      x: 400,
      y: 500,
    },
    color: 'brown',
  },
  {
    key: randomInt(0, 99999).toString(),
    size: {
      width: 50,
      height: 150,
    },
    position: {
      x: 350,
      y: 375,
    },
    color: 'brown',
  },
];

const FIRST_ATTACK_SOLDIER: Soldier = {
  key: randomInt(0, 99999).toString(),
  position: {
    x: 100 - SQUARE_SIZE,
    y: 300,
  },
  pic: 'sol-red',
};

const FIRST_DEFEND_SOLDIER: Soldier = {
  key: randomInt(0, 99999).toString(),
  position: {
    x: 500,
    y: 300,
  },
  pic: 'sol-blue',
};

const START_ATTACK_LIVES = randomInt(1, 35);
const START_DEFEND_LIVES = randomInt(1, 35);

const FIELD_SIZE = {
  x: 600,
  y: 600,
};

const DEAD_POINTS = {
  x: 300,
  highY: 50,
  lowY: 550,
}
function defendHorDead(x: number): number {
  if (x < FIRST_DEFEND_SOLDIER.position.x) {
    return x + 5;
  }

  return x;
}

function defendVertDead(y: number): number {
  if (y < FIRST_DEFEND_SOLDIER.position.y) {
    return y + 5;
  }

  if (y > FIRST_DEFEND_SOLDIER.position.y) {
    return y - 5;
  }

  return y;
}

function attackHorDead(x: number): number {
  if (x > FIRST_ATTACK_SOLDIER.position.x) {
    return x - 5;
  }

  return x;
}

function attackVertDead(y: number, x: number): number {
  if (y < FIRST_ATTACK_SOLDIER.position.y) {
    if (y > DEAD_POINTS.highY && x > DEAD_POINTS.x) {
      return y - 5;
    }

    return y + 5;
  }

  if (y > FIRST_ATTACK_SOLDIER.position.y) {
    if (y < DEAD_POINTS.lowY && x > DEAD_POINTS.x) {
      return y + 5;
    }

    return y - 5;
  }

  return y;
}

function attackVerticalMove(y: number): number {
  const isVetFort = FORT.findIndex(p => (p.position.y < y && p.position.y + p.size.height > y) || (p.position.y < y + SQUARE_SIZE && p.position.y + p.size.height > y + SQUARE_SIZE));

  if (isVetFort === 0 || isVetFort === 1) {
    return y + 5;
  }

  if (isVetFort === 2 || isVetFort === 3) {
    return y - 5;
  }

  if (y > 400 - SQUARE_SIZE) {
    return y + randomInt(-3, 0);
  }

  if (y < 200) {
    return y + randomInt(0, 3);
  }
  return y + randomInt(-10, 10);
}

function attackHorizontalMove(x: number, y: number, isFort: boolean): number {
  const isHorFort = FORT.findIndex(p => p.position.x < x + SQUARE_SIZE && (y < 200 || y + SQUARE_SIZE > 400));

  if (isHorFort >= 0 && isFort) {
    return x - 5;
  }

  if (x < 400) {
    return x + randomInt(1, 5);
  }

  if (x > 600) {
    return x + randomInt(-3, 0);
  }

  return x + randomInt(-3, 3);
}

function defendVerticalMove(y: number): number {
  if (y > 400 - SQUARE_SIZE) {
    return y + randomInt(-3, 0);
  }

  if (y < 200) {
    return y + randomInt(0, 3);
  }

  return y + randomInt(-10, 10);
}

function defendHorizontalMove(x: number, y: number, isFort: boolean): number {
  const isHorFort = FORT.findIndex(p => p.position.x + p.size.width < x && (y < 200 || y + SQUARE_SIZE > 400));

  if (isHorFort >= 0 && isFort) {
    return x + 5;
  }

  if (x < 400) {
    return x + randomInt(1, 5);
  }

  if (x + SQUARE_SIZE > 600) {
    return x + randomInt(-5, 0);
  }

  return x + randomInt(-3, 1);
}

export function AssaultBattleCalc(): JSX.Element {
  const [phase, setPhase] = React.useState<Phase>('Подготовка');
  const [winner, setWinner] = React.useState<string | null>(null);
  const [fortress, setFortress] = React.useState<boolean>(true);

  const [attackForces, setAttackForce] = React.useState<Soldier[]>([FIRST_ATTACK_SOLDIER]);
  const [defendForces, setDefendForce] = React.useState<Soldier[]>([FIRST_DEFEND_SOLDIER]);

  const [attackLivesCount, setAttackLivesCount] = React.useState<number>(START_ATTACK_LIVES);
  const [defendLivesCount, setDefendLivesCount] = React.useState<number>(START_DEFEND_LIVES);

  React.useEffect(() => {
    if (phase === 'Штурм') {
      const interval = setInterval(() => {
        const newAttackPosition = attackForces.map(p => {
          const newPositionX = attackHorizontalMove(p.position.x, p.position.y, fortress);
          const newPositionY = attackVerticalMove(p.position.y);

          const isHit = defendForces.find(pp => (
            (
              (newPositionX + SQUARE_SIZE > pp.position.x && newPositionX + SQUARE_SIZE < pp.position.x + SQUARE_SIZE)
              ||
              (newPositionX < pp.position.x + SQUARE_SIZE && newPositionX > pp.position.x)
            )
            &&
            (
              (newPositionY + SQUARE_SIZE > pp.position.y && newPositionY + SQUARE_SIZE < pp.position.y + SQUARE_SIZE)
              ||
              (newPositionY < pp.position.y + SQUARE_SIZE && newPositionY > pp.position.y)  
            )
            ));

          if (isHit) {
            setAttackLivesCount(attackLivesCount - 1);

            return {
              ...p,
              position: {
                x: attackHorDead(p.position.x),
                y: attackVertDead(p.position.y, p.position.x),
              },
              pic: 'ghost-red',
            }
          }

          if (p.pic === 'ghost-red'
              && 
              p.position.x > FIRST_ATTACK_SOLDIER.position.x 
              ) {
            return {
              ...p,
              position: {
                x: attackHorDead(p.position.x),
                y: attackVertDead(p.position.y, p.position.x),
              },
            }
          }

          if (attackLivesCount <= 0 && p.pic === 'ghost-red') {
            return {
              ...p,
              pic: 'tomb',
            }
          }

          if (p.pic === 'tomb') {
            return {
              ...p,
              position: {
                x: FIRST_ATTACK_SOLDIER.position.x,
                y: FIRST_ATTACK_SOLDIER.position.y,
              },
            }
          }

          return {
            ...p,
            position: {
              x: newPositionX,
              y: newPositionY,
            },
            pic: 'sol-red',
          }
        });

        const newDefendPosition = defendForces.map(p => {
          const newPositionX = defendHorizontalMove(p.position.x, p.position.y, fortress);
          const newPositionY = defendVerticalMove(p.position.y);

          const isHit = attackForces.find(pp => (
            (
              (newPositionX + SQUARE_SIZE > pp.position.x && newPositionX + SQUARE_SIZE < pp.position.x + SQUARE_SIZE)
              ||
              (newPositionX < pp.position.x + SQUARE_SIZE && newPositionX > pp.position.x)
            )
            &&
            (
              (newPositionY + SQUARE_SIZE > pp.position.y && newPositionY + SQUARE_SIZE < pp.position.y + SQUARE_SIZE)
              ||
              (newPositionY < pp.position.y + SQUARE_SIZE && newPositionY > pp.position.y)  
            )
            ));

            if (isHit) {
              setDefendLivesCount(defendLivesCount - 1);
  
              return {
                ...p,
                position: {
                  x: defendHorDead(p.position.x),
                  y: defendVertDead(p.position.y),
                },
                pic: 'ghost-blue',
              }
            }

            if (p.pic === 'ghost-blue' 
            && 
            p.position.x < FIRST_DEFEND_SOLDIER.position.x 
            ) {
              return {
                ...p,
                position: {
                  x: defendHorDead(p.position.x),
                  y: defendVertDead(p.position.y),
                },
              }
            }

          if (defendLivesCount <= 0 && p.pic === 'ghost-blue') {
            return {
              ...p,
              pic: 'tomb',
            }
          }

          if (p.pic === 'tomb') {
            return {
              ...p,
              position: {
                x: FIRST_DEFEND_SOLDIER.position.x,
                y: FIRST_DEFEND_SOLDIER.position.y,
              },
            }
          }

          return {
            ...p,
            position: {
              x: newPositionX,
              y: newPositionY,
            },
            pic: 'sol-blue',
          }
        });
        
        setAttackForce(newAttackPosition);
        setDefendForce(newDefendPosition);

        if (!newAttackPosition.some(p => p.pic === 'sol-red') && attackLivesCount <= 0) {
          setPhase('Итоги');
          setWinner('ЛАГЕРЬ БЫЛ ЗАЩИЩЕН');
        }

        if (!newDefendPosition.some(p => p.pic === 'sol-blue') && defendLivesCount <= 0) {
          setPhase('Итоги');
          setWinner('ЛАГЕРЬ БЫЛ ЗАХВАЧЕН');
        }
      }, 50);

      return () => clearInterval(interval);
    }
  }, [attackForces, attackLivesCount, defendForces, defendLivesCount, fortress, phase]);

  const handleForceChange = React.useCallback((e: { target: { name: string, value: string; }; }) => {
    const { value, name } = e.target;

    if (name === 'attackLives') {
      const attackSoldiers = Array(Math.ceil(Number(value)))
      .fill({
          key: randomInt(0, 99999).toString(),
          position: {
          x: randomInt(0, 200 - SQUARE_SIZE),
          y: randomInt(0, 600 - SQUARE_SIZE),
        },
        color: 'red',
      })
      .map(p => {
        return {
          ...p,
          position: {
            x: randomInt(0, 200 - SQUARE_SIZE),
            y: randomInt(0, 600 - SQUARE_SIZE),
          },
          key: randomInt(0, 99999).toString(),
        }
      });
  
      attackSoldiers[0] = FIRST_ATTACK_SOLDIER;
  
      setAttackForce(attackSoldiers);
    }

    if (name === 'defendLives') {
      const defendSoldiers = Array(Math.ceil(Number(value)))
      .fill({
          key: randomInt(0, 99999).toString(),
          position: {
          x: randomInt(0, 200 - SQUARE_SIZE),
          y: randomInt(0, 600 - SQUARE_SIZE),
        },
        color: 'blue',
      })
      .map(p => {
        return {
          ...p,
          position: {
            x: randomInt(400, 600 - SQUARE_SIZE),
            y: randomInt(200, 400 - SQUARE_SIZE),
          },
          key: randomInt(0, 99999).toString(),
        }
      });
  
      defendSoldiers[0] = FIRST_DEFEND_SOLDIER;
  
      setDefendForce(defendSoldiers);
    }
  }, []);

  const renderAttackForces = React.useMemo(() => {
    return (
      attackForces.map(p => {
        const filterStyle = p.pic === 'ghost-red' ? 'opacity(0.5)' : 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.5))'
        return (
          <rect
            key={p.key}
            x={p.position.x}
            y={p.position.y}
            width={SQUARE_SIZE}
            height={SQUARE_SIZE}
            fill={`url(#${p.pic})`}
            filter={filterStyle}
          />
        )
      })
    )
  }, [attackForces]);

  const renderDefendForces = React.useMemo(() => {
    return (
      defendForces.map(p => {
        const filterStyle = p.pic === 'ghost-blue' ? 'opacity(0.5)' : 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.5))'
        return (
          <rect
            key={p.key}
            x={p.position.x}
            y={p.position.y}
            width={SQUARE_SIZE}
            height={SQUARE_SIZE}
            fill={`url(#${p.pic})`}
            filter={filterStyle}
          />
        )
      })
    )
  }, [defendForces]);

  const renderAttackPoints = React.useMemo(() => {
    if (phase === 'Подготовка') {
      return (
        <div>
          <div>Подкрепления атакующих: {attackLivesCount}</div>
  
          <div>
            <div>Сколько бойцоа физически?</div>
            <input type='number' name='attackLives' max={START_ATTACK_LIVES} onChange={handleForceChange}/>
          </div>
        </div>
      )
    }

    return (
      <div>
        <div>Подкрепления атакующих: {attackLivesCount}</div>
      </div>
    )
  }, [attackLivesCount, handleForceChange, phase]);

  const renderDefendPoints = React.useMemo(() => {
    if (phase === 'Подготовка') {
      return (
        <div>
          <div>Подкрепления обороняющихся:: {defendLivesCount}</div>

          <div>
            <div>Сколько бойцоа физически?</div>
            <input type='number' name='defendLives' max={START_DEFEND_LIVES} onChange={handleForceChange}/>
          </div>
        </div>
      )
    }

    return (
      <div>
        <div>Подкрепления обороняющихся: {defendLivesCount}</div>
      </div>
    )
  }, [defendLivesCount, handleForceChange, phase]);

  const renderFort = React.useMemo(() => {
    return (
      FORT.map(p => {
        return (
          <rect
            key={p.key}
            x={p.position.x}
            y={p.position.y}
            width={p.size.width}
            height={p.size.height}
            fill={p.color}
            filter='opacity(0%)'
          />
        )
      })
    )
  }, []);

  const renderButtons = React.useMemo(() => {
    if (phase === 'Подготовка') {
      return (
        <>
          <button onClick={() => setPhase(phase === 'Подготовка' ? 'Штурм' : 'Итоги')}>Начать битву</button>
          <button onClick={() => setFortress(!fortress)}>Крепость</button>
        </>
      )
    }
  }, [fortress, phase])

  const renderWinText = React.useMemo(() => {
    if (phase === 'Подготовка') {
      return (
        <div className={s.begin}>
          <div style={{fontSize: '18px', fontWeight: 'bold'}}>ПОСТРОЕНИЕ</div>
          <i>не более 15 минут</i>
          <div>Подсчет бойцов каждой стороны</div>
          <div>Подсчет очков подкреплений</div>
        </div>
      )
    }

    if (phase === 'Итоги') {
      return (
        <div className={s.win}>{winner}</div>
      )
    }

    return null;
  }, [phase, winner]);

  return (
    <div>
      
      {renderButtons}

      <div className={s.pointsContainer}>
        {renderAttackPoints}

        {renderDefendPoints}
      </div>

      {renderWinText}
      
      <svg width={FIELD_SIZE.x} height={FIELD_SIZE.y}>

      <defs>
        <pattern id='sol-red' patternUnits='objectBoundingBox' width={SQUARE_SIZE} height={SQUARE_SIZE}>
          <image xlinkHref={soldierRed} x="0" y="0" width={SQUARE_SIZE} height={SQUARE_SIZE} />
        </pattern>

        <pattern id='sol-blue' patternUnits="objectBoundingBox" width={SQUARE_SIZE} height={SQUARE_SIZE}>
          <image xlinkHref={soldierBlue} x="0" y="0" width={SQUARE_SIZE} height={SQUARE_SIZE} />
        </pattern>

        <pattern id='ghost-red' patternUnits="objectBoundingBox" width={SQUARE_SIZE} height={SQUARE_SIZE}>
          <image xlinkHref={ghostRed} x="0" y="0" width={SQUARE_SIZE} height={SQUARE_SIZE} />
        </pattern>

        <pattern id='ghost-blue' patternUnits="objectBoundingBox" width={SQUARE_SIZE} height={SQUARE_SIZE}>
          <image xlinkHref={ghostBlue} x="0" y="0" width={SQUARE_SIZE} height={SQUARE_SIZE} />
        </pattern>

        <pattern id='tomb' patternUnits="objectBoundingBox" width={SQUARE_SIZE} height={SQUARE_SIZE}>
          <image xlinkHref={tomb} x="0" y="0" width={SQUARE_SIZE} height={SQUARE_SIZE} />
        </pattern>

        <pattern id='back-paper' patternUnits="userSpaceOnUse" width="600" height="600">
          <image xlinkHref={fortress ? mapFort : mapNoFort} x="0" y="0" width="600" height="600" />
        </pattern>
      </defs>

        <rect
          x='0'
          y='0'
          width='600'
          height='600'
          fill='url(#back-paper)'
        />
        
        {fortress ? renderFort : null}

        {renderAttackForces}

        {renderDefendForces}

      </svg>
    </div>
  );
};

