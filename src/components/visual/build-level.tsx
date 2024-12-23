import React from 'react';
import { BsFillPersonPlusFill, BsFillPersonCheckFill } from 'react-icons/bs';
import Tooltip from 'react-tooltip-lite';

import arrow from '../../assets/icons/icon-arrow-up.svg';
import workPlaceSmith from '../../assets/icons/build/01_anvil.png';
import workToolsSmith from '../../assets/icons/build/02_tools.png';
import tent01Smith from '../../assets/icons/build/03_tent_01.png';
import tent02Smith from '../../assets/icons/build/04_tent_02.png';
import tent03Smith from '../../assets/icons/build/05_tent_03.png';
import { decimalText } from '../utils/decimal-text';
import { useResize } from '../utils/use-resize';

import s from './build-level.module.css';

type BuildItem = {
  src: string,
  level: number,
  label: string,
  hint: JSX.Element,
};

const smithBuild: BuildItem[] = [
  { src: workPlaceSmith, level: 1, label: 'Рабочее место', hint: <div>Основное место работы главного мастерового</div> },
  { src: workToolsSmith, level: 2, label: 'Рабочий инструмент', hint: <div>Дополнительный антураж, помогающий в производстве</div> },
  { src: tent01Smith, level: 3, label: 'Тент', hint: <div>Крыша над мастерской</div> },
  { src: tent02Smith, level: 4, label: 'Шатер', hint: <div>Крыша с стенами, огораживающими мастерскую</div> },
  { src: tent03Smith, level: 5, label: 'Большой шатер', hint: <div>Большая мастерская с крышей и стенами</div> },
];

const workerStyle = {
  width: 30,
  height: 30,
  opacity: 0.7,
};

const workerChosenStyle = {
  width: 30,
  height: 30,
  opacity: 1,
  color: 'wheat',
};

const workersHint = <div>Количество работников с рабочими местами</div>

export function BuildLevel(): JSX.Element {
  const { width } = useResize();
  const [currentLevel, setCurrentLevel] = React.useState<number>(1);
  const [currentCountWorkers, setCurrentCountWorkers] = React.useState<number>(0);

  const handleLevelChange = React.useCallback((level: number) => {
    if (level === 1) {
      setCurrentCountWorkers(0);
      setCurrentLevel(level);
      return;
    }

    if (currentCountWorkers > level) {
      setCurrentCountWorkers(currentLevel - 1);
      setCurrentLevel(level);
      return;
    }

    setCurrentLevel(level);
  }, [currentCountWorkers, currentLevel]);

  const handleWorkersChange = React.useCallback((countWorkers: number) => {
    setCurrentCountWorkers(countWorkers);
  }, []);

  const resultCount = React.useMemo(() => {
    return (
      <div className={s.header}>
        Действие <b>"Производство"</b> создаст {currentLevel} {decimalText(currentLevel, ['товар', 'товара', 'товаров'])}
      </div>
    )
  }, [currentLevel]);

  const resultCountHealers = React.useMemo(() => {
    return (
      <div className={s.header}>
        Одновременно восстанавливать хиты могут {currentCountWorkers} {decimalText(currentCountWorkers, ['персонаж', 'персонажа', 'персонажей'])}
      </div>
    )
  }, [currentCountWorkers]);

  const workers = React.useMemo(() => {
    const notLastWorker = currentCountWorkers !== 0 && currentCountWorkers !== 1;

      return (
        <div className={s.workersContainer}>
          <Tooltip
            content={workersHint}
            background='wheat'
          >
            <div className={s.workerText}>
                Работники:
            </div>
          </Tooltip>

          {currentLevel === 1
            ? <div className={s.noWorkers}>
                Нет возможности помогать
              </div>
            : <div className={s.workers}>
                <div className={s.workerItem}>{currentLevel >= 2 ? (currentCountWorkers >= 1 ? <BsFillPersonCheckFill style={workerChosenStyle} onClick={() => handleWorkersChange(notLastWorker ? 1 : 0)} /> : <BsFillPersonPlusFill style={workerStyle} onClick={() => handleWorkersChange(1)} />) : null}</div>
                <div className={s.workerItem}>{currentLevel >= 3 ? (currentCountWorkers >= 2 ? <BsFillPersonCheckFill style={workerChosenStyle} onClick={() => handleWorkersChange(2)} /> : <BsFillPersonPlusFill style={workerStyle} onClick={() => handleWorkersChange(2)} />) : null}</div>
                <div className={s.workerItem}>{currentLevel >= 4 ? (currentCountWorkers >= 3 ? <BsFillPersonCheckFill style={workerChosenStyle} onClick={() => handleWorkersChange(3)} /> : <BsFillPersonPlusFill style={workerStyle} onClick={() => handleWorkersChange(3)} />) : null}</div>
                <div className={s.workerItem}>{currentLevel >= 5 ? (currentCountWorkers >= 4 ? <BsFillPersonCheckFill style={workerChosenStyle} onClick={() => handleWorkersChange(4)} /> : <BsFillPersonPlusFill style={workerStyle} onClick={() => handleWorkersChange(4)} />) : null}</div>
              </div>
            }
        </div>
      )
  }, [currentCountWorkers, currentLevel, handleWorkersChange]);

  return (
    <div className={s.container}>
      {resultCount}

      {resultCountHealers}

      {workers}

      <div>
        {smithBuild.map(p => {
          return (
            <div className={s.item} key={p.src} onClick={() => handleLevelChange(p.level)}>
              <div className={currentLevel === p.level ? s.textContainer_chosen : s.textContainer}>
                <b className={s.label}>{width < 600 ? 'Ур.' : 'Уровень'} {p.level}</b>
              </div>

              <img src={p.src} alt='' width='100' style={{ opacity: p.level <= currentLevel ? 1 : 0.5 }}/>

              <div className={s.description}>
                {p.level <= currentLevel ? (
                  <>
                    <div className={s.icon}>
                      <img src={arrow} alt='' style={{ height: 50, transform: 'rotate(90deg)' }} />
                    </div>

                    <Tooltip
                      content={p.hint}
                      background='wheat'
                      className={s.text}
                    >
                      {smithBuild.find(pp => pp.level === p.level)?.label.toUpperCase()}
                    </Tooltip>
                  </>
                ) : ''}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}