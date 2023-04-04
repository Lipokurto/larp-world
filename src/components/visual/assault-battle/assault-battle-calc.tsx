import React from 'react';

import s from './assault-battle-calc.module.css';
import { randomInt } from '../../utils/random-int';

type Position = {
  x: number,
  y: number,
};

type Soldier = {
  key: string,
  position: Position,
  color: string,
}

type Phase = 'Подготовка' | 'Штурм' | 'Итоги';

const SQUARE_SIZE = 25;

const FIRST_ATTACK_SOLDIER: Soldier = {
  key: randomInt(0, 99999).toString(),
  position: {
    x: 100 - SQUARE_SIZE,
    y: 300,
  },
  color: 'red',
};

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
]

const FIRST_DEFEND_SOLDIER: Soldier = {
  key: randomInt(0, 99999).toString(),
  position: {
    x: 500,
    y: 300,
  },
  color: 'blue',
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
  const isVetFort = FORT.findIndex(p => (p.position.y < y && p.position.y + p.size.height > y));

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

  if (x > 600) {
    return x + randomInt(-3, 0);
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
              color: 'lightGray',
            }
          }

          if (p.color === 'lightGray' 
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

          if (attackLivesCount <= 0 && p.color === 'lightGray') {
            return {
              ...p,
              color: 'lightGreen',
            }
          }

          if (p.color === 'lightGreen') {
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
            color: 'red',
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
                color: 'lightGray',
              }
            }

            if (p.color === 'lightGray' 
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

          if (defendLivesCount <= 0 && p.color === 'lightGray') {
            return {
              ...p,
              color: 'lightGreen',
            }
          }

          if (p.color === 'lightGreen') {
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
            color: 'blue',
          }


        });
        
        setAttackForce(newAttackPosition);
        setDefendForce(newDefendPosition);

        if (!newAttackPosition.some(p => p.color === 'red') && attackLivesCount <= 0) {
          setPhase('Итоги');
          setWinner('Победила сторона обороны');
        }

        if (!newDefendPosition.some(p => p.color === 'blue') && defendLivesCount <= 0) {
          setPhase('Итоги');
          setWinner('Победила сторона атаки');
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
        return (
          <rect
            key={p.key}
            x={p.position.x}
            y={p.position.y}
            width={SQUARE_SIZE}
            height={SQUARE_SIZE}
            fill={p.color}
          />
        )
      })
    )
  }, [attackForces]);

  const renderDefendForces = React.useMemo(() => {
    return (
      defendForces.map(p => {
        return (
          <rect
            key={p.key}
            x={p.position.x}
            y={p.position.y}
            width={SQUARE_SIZE}
            height={SQUARE_SIZE}
            fill={p.color}
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

  return (
    <div>
      
      {renderButtons}

      <div className={s.pointsContainer}>
        {renderAttackPoints}

        {renderDefendPoints}
      </div>

      {phase === 'Подготовка' ? <div className={s.win}>Построение войск перед штурмом</div> : null}
      {phase === 'Итоги' ? <div className={s.win}>{winner}</div> : null}
      
      <svg width={FIELD_SIZE.x} height={FIELD_SIZE.y} style={{backgroundColor: 'green'}}>
        
        {fortress ? renderFort : null}

        {renderAttackForces}

        {renderDefendForces}
      </svg>
    </div>
  );
};

