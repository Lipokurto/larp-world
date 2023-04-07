import React from 'react';

import { randomInt } from '../../utils/random-int';

import soldierRed from '../../../assets/icons/assault/warrior01.png';
import soldierBlue from '../../../assets/icons/assault/warrior02.png';
import ghostRed from '../../../assets/icons/assault/ghost01.png';
import ghostBlue from '../../../assets/icons/assault/ghost02.png';
import tomb from '../../../assets/icons/assault/tomb.png';
import mapFort from '../../../assets/icons/assault/battle-map-fort.jpg';
import mapNoFort from '../../../assets/icons/assault/battle-map-no-fort.jpg';

import { AssaultCard } from './assault-card';
import { ItemModal } from '../../item-modal/item-modal';
import { Item } from '../../../rules-text/type';

import { 
  assItem01, assItem02, assItem03,
  assItem04,
  assWin01, assWin02, assWin03,
  assWin04, conditions, controlZone, defWin01, defWin02,
  defWin03, defWin04, reZone, safeZone,
} from '../../../rules-text/actions';

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

type Winner = 'ЛАГЕРЬ БЫЛ ЗАХВАЧЕН' | 'ЛАГЕРЬ БЫЛ ЗАЩИЩЕН';

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
      width: 100,
      height: 150,
    },
    position: {
      x: 325,
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
      width: 100,
      height: 150,
    },
    position: {
      x: 325,
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

  if (x < 350) {
    return x + randomInt(1, 5);
  }

  if (x > 600) {
    return x + randomInt(-3, 0);
  }

  return x + randomInt(-3, 3);
}

function defendVerticalMove(x: number, y: number, isFort: boolean): number {
  const isHorFort = FORT.findIndex(p => p.position.x + p.size.width < x && (y < 200 || y + SQUARE_SIZE > 400));

  if (isHorFort >= 0 && isFort) {
    if (y < 225) {
      console.log('YES')
      return y + 10;
    }

    if (y + SQUARE_SIZE > 400) {
      console.log('YES')
      return y - 10;
    }
  }

  if (y > 400 - SQUARE_SIZE) {
    return y + randomInt(-3, 0);
  }

  if (y < 200) {
    return y + randomInt(0, 3);
  }

  return y + randomInt(-5, 5);
}

function defendHorizontalMove(x: number, y: number, isFort: boolean): number {
  const isHorFort = FORT.findIndex(p => p.position.x + p.size.width < x && (y < 200 || y + SQUARE_SIZE > 400));

  if (isHorFort >= 0 && isFort) {
    return x + 5;
  }

  if (x < 350) {
    return x + randomInt(1, 5);
  }

  if (x + SQUARE_SIZE > 600) {
    return x + randomInt(-5, 0);
  }

  return x + randomInt(-3, 1);
}

export function AssaultBattleCalc(): JSX.Element {
  const [phase, setPhase] = React.useState<Phase>('Подготовка');
  const [winner, setWinner] = React.useState<Winner | null>(null);
  const [fortress, setFortress] = React.useState<boolean>(true);
  const [zoneManual, setZoneManual] = React.useState<boolean>(false);
  const [itemsManual, setItemsManual] = React.useState<boolean>(false);

  const [attackForces, setAttackForce] = React.useState<Soldier[]>([FIRST_ATTACK_SOLDIER]);
  const [defendForces, setDefendForce] = React.useState<Soldier[]>([FIRST_DEFEND_SOLDIER]);

  const [attackLivesCount, setAttackLivesCount] = React.useState<number>(1);
  const [defendLivesCount, setDefendLivesCount] = React.useState<number>(1);

  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [item, setItem] = React.useState<Item | null>(null);

  const handleClick = React.useCallback((item: Item) => {
    setItem(item);
    setIsOpen(true);
  }, []);

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
            const currentLives = attackLivesCount - 1;
            setAttackLivesCount(currentLives >= 0 ? currentLives : 0);

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
          const newPositionY = defendVerticalMove(p.position.x, p.position.y, fortress);

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
              const currentLives = defendLivesCount - 1;
              setDefendLivesCount(currentLives >= 0 ? currentLives : 0);
  
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
    return (
      <div className={s.points}>
        <div style={{marginBottom: '20px'}}>
          <div style={{fontSize: '14px', fontWeight: 'bold', color: 'red'}}>АТАКА</div>
          <div>Сколько подкреплений?</div>
          <input type='number' name='attackRe' className={s.inputNumber} max='30'onChange={(e) => setAttackLivesCount(Number(e.target.value))}/>
        </div>

        <div>
          <div>Сколько бойцов?</div>
          <input type='number' name='attackLives' className={s.inputNumber} max='30' onChange={handleForceChange}/>
        </div>
      </div>
    )
  }, [handleForceChange]);

  const renderDefendPoints = React.useMemo(() => {
    return (
      <div className={s.points}>
        <div style={{marginBottom: '20px'}}>
          <div style={{fontSize: '14px', fontWeight: 'bold', color: 'blue'}}>ОБОРОНА</div>
          <div>Сколько подкреплений?</div>
          <input type='number' name='attackRe' className={s.inputNumber} max='30' onChange={(e) => setDefendLivesCount(Number(e.target.value))}/>
        </div>

        <div>
          <div>Сколько бойцов?</div>
          <input type='number' name='defendLives' className={s.inputNumber} max='30' onChange={handleForceChange}/>
        </div>
      </div>
    )
  }, [handleForceChange]);

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
        <div style={{margin:'0 10px 0 10px'}}>
          <button className={s.mainButton} onClick={() => setPhase(phase === 'Подготовка' ? 'Штурм' : 'Итоги')}>Начать битву</button>

          <div className={s.buttonsContainer}>
            <button onClick={() => setFortress(!fortress)}>{fortress ? 'Выключить' : 'Включить'} укрепления</button>
            <button onClick={() => setZoneManual(!zoneManual)}>Показать зоны штурма</button>
            <button onClick={() => setItemsManual(!itemsManual)}>Показать объекты штурма</button>
            <button onClick={() => handleClick(conditions)}>Показать объекты штурма</button>
          </div>
        </div>
      )
    }
  }, [fortress, handleClick, itemsManual, phase, zoneManual])

  const renderZoneButton = React.useMemo(() => {
    return (
      <div className={s.beginTop}>
        <button onClick={() => setZoneManual(!zoneManual)}>Убрать игровые зоны штурма</button>
      </div>
    )
  }, [zoneManual]);

  const renderItemButton = React.useMemo(() => {
    return (
      <div className={s.beginTop}>
        <button onClick={() => setItemsManual(!itemsManual)}>Убрать объекты штурма</button>
      </div>
    )
  }, [itemsManual]);

  const renderWinText = React.useMemo(() => {
    if (phase === 'Подготовка') {
      return (
        <div className={s.begin}>
          <div className={s.pointsContainer}>
            {renderAttackPoints}

            {renderButtons}

            {renderDefendPoints}
          </div>

          
        </div>
      )
    }

    if (phase === 'Штурм') {
      return (
        <div className={s.assault}>
          <div>
            <div style={{fontSize: '14px', fontWeight: 'bold', color: 'red'}}>АТАКА</div>
            <div>Очки подкреплений: {attackLivesCount}</div>
          </div>

          <div>
            <div style={{fontSize: '14px', fontWeight: 'bold', color: 'blue'}}>ОБОРОНА</div>
            <div>Очки подкреплений: {defendLivesCount}</div>
          </div>
        </div>
      )
    }

    if (phase === 'Итоги') {
      if (winner === 'ЛАГЕРЬ БЫЛ ЗАХВАЧЕН') {
        return (
          <div className={s.win}>
            <button onClick={() => setPhase('Подготовка')}>Перезапустить</button>
            <div style={{fontSize: '18px', fontWeight: 'bold'}}>{winner}</div>
            <i>Лагерь не доступен для штурма в течении 2 часов</i>
            <div>
              <div>
                Доступно 1 из следующих действий:
              </div>

              <div className={s.cards}>
                <div onClick={() => handleClick(assWin01)}>
                  <AssaultCard 
                    label='Благородная победа'
                    text='После победы вы благородно уходите, показав тем самым что вы пришли сюдa не как воры или грабители'
                    effect='Вы получаете +20% к своему влиянию'
                  />
                </div>

                <div onClick={() => handleClick(assWin02)}>
                  <AssaultCard 
                    label='Сжечь лагерь'
                    text='Искры пылающих шатров лучшее подтверждение слабости вашего врага'
                    effect='Лагерь теряет 20% влияния'
                  />
                </div>

                <div onClick={() => handleClick(assWin03)}>
                  <AssaultCard 
                    label='Ограбить лагерь'
                    text='Все что имеет хоть какую-то ценность теперь пренадлежит победителю'
                    effect='Атакующие получают все игровые предметы которые были в лагере и на телах бойцов'
                  />
                </div>

                <div onClick={() => handleClick(assWin04)}>
                  <AssaultCard 
                    label='Захватить казну'
                    text='Казна - единсвенное что имеет ценность этого места'
                    effect='Атакующие получают все деньги лагеря и с бойцов поверженных'
                  />
                </div>
              </div>
            </div>
          </div>
        )
      }

      if (winner === 'ЛАГЕРЬ БЫЛ ЗАЩИЩЕН') {
        return (
          <div className={s.win}>
            <button onClick={() => setPhase('Подготовка')}>Перезапустить</button>
          <div style={{fontSize: '18px', fontWeight: 'bold'}}>{winner}</div>
          <i>Лагерь не доступен для штурма в течении 2 часов</i>
          <div>
            <div>
              Доступно 1 из следующих действий:
            </div>

            <div className={s.cards}>
              <div onClick={() => handleClick(defWin01)}>
                <AssaultCard 
                  label='Благодарность небесам'
                  text='Вы хороните павших товарищей и даже врагов'
                  effect='Лагерь не платит следующую десятину'
                />
              </div>

              <div onClick={() => handleClick(defWin02)}>
                <AssaultCard 
                  label='Заслуженный отдых'
                  text='Время отдохнуть и залечить раны свои бойцам'
                  effect='Лагерь получает +5% влияния'
                />
              </div>

              <div onClick={() => handleClick(defWin03)}>
                <AssaultCard 
                  label='Трупы как предуприждение'
                  text='Страх наших врагов - сила нашей победы'
                  effect='Влияние штурмующих -5%'
                />
              </div>

              <div onClick={() => handleClick(defWin04)}>
                <AssaultCard 
                  label='Сбор трофеев'
                  text='даже от мертвых бывает польза'
                  effect='Вы получаете +5% к козне лагеря'
                />
              </div>
            </div>
          </div>
        </div>
        )
      }
    }

    return null;
  }, [attackLivesCount, defendLivesCount, handleClick, phase, renderAttackPoints, renderButtons, renderDefendPoints, winner]);

  const renderZoneManual = React.useMemo(() => {
    return (
      <>
        <rect 
          x='290'
          y='230'
          width='160'
          height='150'
          fill='orange'
          filter='opacity(0.75)'
          stroke='red'
          rx='10'
          ry='10'
          style={{cursor: 'pointer'}}
          onClick={() => handleClick(controlZone)}
        />
        <text 
          x="320" y="310" font-size="20" fill="white" filter='drop-shadow(0 0 10 black)'
          style={{cursor: 'pointer'}}
          onClick={() => handleClick(controlZone)}
        >Зона контроля</text>

        <rect 
          x='250'
          y='110'
          width='75'
          height='75'
          fill='green'
          filter='opacity(0.5)'
          stroke='darkGreen'
          rx='10'
          ry='10'
          style={{cursor: 'pointer'}}
          onClick={() => handleClick(reZone)}
        />
        <text 
          x="230" y="175" font-size="16" fill="white" filter='drop-shadow(0 0 10 black)'
          style={{cursor: 'pointer'}}
          onClick={() => handleClick(reZone)}
        >Зона подкрепления</text>
        
        <rect 
          x='250'
          y='430'
          width='75'
          height='75'
          fill='green'
          filter='opacity(0.5)'
          stroke='darkGreen'
          rx='10'
          ry='10'
          style={{cursor: 'pointer'}}
          onClick={() => handleClick(reZone)}
        />
        <text 
          x="230" y="495" font-size="16" fill="white" filter='drop-shadow(0 0 10 black)'
          style={{cursor: 'pointer'}}
          onClick={() => handleClick(reZone)}
        >Зона подкрепления</text>

        <rect 
          x='485'
          y='255'
          width='100'
          height='100'
          fill='blue'
          filter='opacity(0.5)'
          stroke='blue'
          rx='10'
          ry='10'
          style={{cursor: 'pointer'}}
          onClick={() => handleClick(safeZone)}
        />
        <text 
          x="490" y="310" font-size="16" fill="white" filter='drop-shadow(0 0 10 black)'
          style={{cursor: 'pointer'}}
          onClick={() => handleClick(safeZone)}
        >
          Закрытая зона
        </text>

        <rect 
          x='15'
          y='255'
          width='100'
          height='100'
          fill='blue'
          filter='opacity(0.5)'
          stroke='blue'
          rx='10'
          ry='10'
          style={{cursor: 'pointer'}}
          onClick={() => handleClick(safeZone)}
        />
        <text 
          x="25" y="310" font-size="16" fill="white" filter='drop-shadow(0 0 10 black)'
          style={{cursor: 'pointer'}}
          onClick={() => handleClick(safeZone)}
        >
          Закрытая зона
        </text>
      </>
    )
  }, [handleClick]);

  const renderItemManual = React.useMemo(() => {
    return (
      <>
        <rect
          x='120'
          y='30'
          width='350'
          height='420'
          fill='black'
          filter='opacity(0.5)'
          rx='10'
          ry='10'
        />
        
        <rect
          x='135'
          y='45'
          width='320'
          height='90'
          fill='black'
          filter='opacity(0.5)'
          rx='10'
          ry='10'
          style={{cursor: 'pointer'}}
          onClick={() => handleClick(assItem01)}
        />
        <rect
          x='155'
          y='50'
          width='75'
          height='75'
          fill='url(#sol-red-leg)'
          filter='drop-shadow(0 1px 2px rgba(0, 0, 0, 0.5))'
          style={{cursor: 'pointer'}}
          onClick={() => handleClick(assItem01)}
        />
        <text 
          x="300" y="95" font-size="20" fill="white" filter='drop-shadow(0 0 10 black)'
          style={{cursor: 'pointer'}}
          onClick={() => handleClick(assItem01)}
        >
          Солдат атаки
        </text>

        <rect
          x='135'
          y='145'
          width='320'
          height='90'
          fill='black'
          filter='opacity(0.5)'
          rx='10'
          ry='10'
          style={{cursor: 'pointer'}}
          onClick={() => handleClick(assItem02)}
        />
        <rect
          x='150'
          y='150'
          width='75'
          height='75'
          fill='url(#sol-blue-leg)'
          filter='drop-shadow(0 1px 2px rgba(0, 0, 0, 0.5))'
          style={{cursor: 'pointer'}}
          onClick={() => handleClick(assItem02)}
        />
        <text 
          x="300" y="200" font-size="20" fill="white" filter='drop-shadow(0 0 10 black)'
          style={{cursor: 'pointer'}}
          onClick={() => handleClick(assItem02)}
        >
          Солдат обороны
        </text>

        <rect
          x='135'
          y='245'
          width='320'
          height='90'
          fill='black'
          filter='opacity(0.5)'
          rx='10'
          ry='10'
          style={{cursor: 'pointer'}}
          onClick={() => handleClick(assItem03)}
        />
        <rect
          x='150'
          y='250'
          width='75'
          height='75'
          fill='url(#ghost-leg)'
          filter='opacity(0.75)'
          style={{cursor: 'pointer'}}
          onClick={() => handleClick(assItem03)}
        />
        <text 
          x="300" y="300" font-size="20" fill="white" filter='drop-shadow(0 0 10 black)'
          style={{cursor: 'pointer'}}
          onClick={() => handleClick(assItem03)}
        >
          Мертвый солдат
        </text>

        <rect
          x='135'
          y='345'
          width='320'
          height='90'
          fill='black'
          filter='opacity(0.5)'
          rx='10'
          ry='10'
          style={{cursor: 'pointer'}}
          onClick={() => handleClick(assItem04)}
        />
        <rect
          x='150'
          y='350'
          width='75'
          height='100'
          fill='url(#tomb-leg)'
          filter='drop-shadow(0 1px 2px rgba(0, 0, 0, 0.5))'
          style={{cursor: 'pointer'}}
          onClick={() => handleClick(assItem04)}
        />
        <text 
          x="300" y="400" font-size="20" fill="white" filter='drop-shadow(0 0 10 black)'
          style={{cursor: 'pointer'}}
          onClick={() => handleClick(assItem04)}
        >
          Выбывший солдат
        </text>
        
      </>
    )
  }, [handleClick]);
  
  return (
    <>
      <div>      

        {zoneManual ? renderZoneButton : ( itemsManual ? renderItemButton : renderWinText )}
        
        <svg width={FIELD_SIZE.x} height={FIELD_SIZE.y}>

        <defs>

          {/* Игровые предметы */}
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

          {/* Предметы для легенды */}
          <pattern id='sol-red-leg' patternUnits='objectBoundingBox' width='25' height='25'>
            <image xlinkHref={soldierRed} x="0" y="0" width='75' height='75' />
          </pattern>

          <pattern id='sol-blue-leg' patternUnits="objectBoundingBox" width='25' height='25'>
            <image xlinkHref={soldierBlue} x="0" y="0" width='75' height='75' />
          </pattern>

          <pattern id='ghost-leg' patternUnits="objectBoundingBox" width='25' height='25'>
            <image xlinkHref={ghostBlue} x="0" y="0" width='75' height='75' />
          </pattern>

          <pattern id='tomb-leg' patternUnits="objectBoundingBox" width='25' height='25'>
            <image xlinkHref={tomb} x="0" y="0" width='75' height='75' />
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

          {zoneManual ? renderZoneManual : null}

          {itemsManual ? renderItemManual : null}

        </svg>
      </div>

      {isOpen && (
        <ItemModal
          setIsOpen={setIsOpen}
          item={item}
        />
      )}
    </>
  );
};

