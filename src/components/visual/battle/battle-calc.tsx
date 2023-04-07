import React from 'react';

import battleground from '../../../assets/icons/texture/battleground.jpg';
import { decimalText } from '../../utils/decimal-text';
import { randomInt } from '../../utils/random-int';

import emptyBanner from '../../../assets/icons/texture/banners/banner-empty.png'; 
import redBanner from '../../../assets/icons/texture/banners/banner-red.png'; 
import blueBanner from '../../../assets/icons/texture/banners/banner-blue.png'; 
import grayBanner from '../../../assets/icons/texture/banners/banner-gray.png'; 
import purpleBanner from '../../../assets/icons/texture/banners/banner-purple.png'; 
import yellowBanner from '../../../assets/icons/texture/banners/banner-yellow.png'; 
import greenBanner from '../../../assets/icons/texture/banners/banner-green.png'; 

import s from './battle-calc.module.css';

const START_INFLUENCE = randomInt(1, 35);
const START_MONEY = randomInt(1, 35);
const START_CHANGE = randomInt(1, 10);

type Others = {
  color: string,
  name: string,
  flag: string,
  bet: number,
};

type Banners = {
  size: {
    left: string,
    top: string,
  },
  banner: string,
  name: string,
}

type Phase = 'Ставки' | 'Очередь' | 'Установка' | 'Финиш';

const banners: Banners[] = [
  {
    size: {
      left: '350px',
      top: '550px',
    },
    banner: emptyBanner,
    name: 'ПУСТО',
  },
  {
    size: {
      left: '320px',
      top: '80px',
    },
    banner: emptyBanner,
    name: 'ПУСТО',
  },
  {
    size: {
      left: '-10px',
      top: '90px',
    },
    banner: emptyBanner,
    name: 'ПУСТО',
  },
  {
    size: {
      left: '-160px',
      top: '510px',
    },
    banner: emptyBanner,
    name: 'ПУСТО',
  },
  {
    size: {
      left: '-255px',
      top: '320px',
    },
    banner: emptyBanner,
    name: 'ПУСТО',
  },
  {
    size: {
      left: '100px',
      top: '330px',
    },
    banner: emptyBanner,
    name: 'ПУСТО',
  },
]

const othersStart: Others[] = [
  {
    color: 'green',
    name: 'Отряд Леса',
    flag: greenBanner,
    bet: 0,
  },
  {
    color: 'blue',
    name: 'Отряд Котов',
    flag: blueBanner,
    bet: 0,
  },
  {
    color: 'yellow',
    name: 'Орден Огня',
    flag: yellowBanner,
    bet: 0,
  },
  {
    color: 'purple',
    name: 'Банда Плоти',
    flag: purpleBanner,
    bet: 0,
  },
  {
    color: 'gray',
    name: 'Отряд Золы',
    flag: grayBanner,
    bet: 0,
  },
];

export function BattleCalc(): JSX.Element {
  const [currentBet, setCurrentBet] = React.useState<number>(0);
  const [others, setOthers] = React.useState<Others[]>(othersStart);
  const [infBet, setInfBet] = React.useState<number>(0);
  const [goldBet, setGoldBet] = React.useState<number>(0);
  const [phase, setPhase] = React.useState<Phase>('Ставки');
  const [currentBanners, setCurrentBanners] = React.useState<Banners[]>(banners);
  
  React.useEffect(() => {
    const startOthers = others.map(p => {
      return (
        {
          color: p.color,
          name: p.name,
          flag: p.flag,
          bet: randomInt(1, 35),
        }
      )
    });

    setOthers(startOthers);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleBetChange = React.useCallback((e: { target: { name: string; value: string; }; }) => {
    const { name, value } = e.target;

    if (name === 'influenceBet') {
      setInfBet(Number(value));
    }
    
    if (name === 'goldBet') {      
      setGoldBet(Number(value));
    }
  }, []);

  const handleConfirmBet = React.useCallback(() => {
    setPhase('Очередь');
  }, []); 

  const handleMakeQueue = React.useCallback(() => {
    others.push({
      color: 'red',
      name: 'ОТРЯД ИГРОКА',
      flag: redBanner,
      bet: currentBet,
    });

    others.sort((a, b) => b.bet - a.bet);

    setOthers(others);
  }, [currentBet, others]); 

  const renderPlayerBet = React.useMemo(() => {
    return (
      <div className={s.consoleText}>
        <div>
          <div>
            Ваше влияние: <b>{START_INFLUENCE}</b>
          </div>

          <div>
            Ваша ставка влияния:
            <b><input type='number' name='influenceBet' min='0' max={START_INFLUENCE} onChange={handleBetChange} /></b>
          </div>
        </div>

        <div>
          <div>
            <div>Ваше золото: <b>{START_MONEY}</b></div>
          </div>

          <div>
            Ваша ставка золота:
            <b><input type='number' name='goldBet' min='0' max={START_MONEY} onChange={handleBetChange}/></b>
          </div>
        </div>

        <div><b>1 влияние</b> = <b>{`${START_CHANGE} ${decimalText(START_CHANGE, ['золотой', 'золота', 'золотых'])}`}</b></div>
      </div>
    )  
  }, [handleBetChange]);

  const handlePlaceBanner = React.useCallback(() => {
    const firstEmptyIndex = currentBanners.findIndex(p => p.name === 'ПУСТО');
    const playersIndex = others.findIndex(p => p.name === 'ОТРЯД ИГРОКА');

    if (phase === 'Очередь') {
      if (firstEmptyIndex + 1 === playersIndex || playersIndex === 0) setPhase('Установка');

      const newBanners = currentBanners.map((p, i) => {
        if (i === firstEmptyIndex && i < playersIndex) {
          return ({
            size: {
              left: p.size.left,
              top: p.size.top,
            },
            banner: others[firstEmptyIndex].flag,
            name: others[firstEmptyIndex].name,
          })
        }
        
        return ({
          size: {
            left: p.size.left,
            top: p.size.top,
          },
          banner: p.banner,
          name: p.name,
        })
      })

      setCurrentBanners(newBanners);
    }
  }, [currentBanners, others, phase]);

  const restBannersSet = React.useCallback((playerIndex: number) => {    
    const restOthers = others.filter(p => p.name !== 'ОТРЯД ИГРОКА');
    
    
    restOthers.splice(playerIndex, 0, {
      color: 'red',
      name: 'ОТРЯД ИГРОКА',
      bet: currentBet,
      flag: redBanner,
    });

    if (phase === 'Установка') {
      const newBanners = currentBanners.map((p, i) => {

        if (i === playerIndex) {
          return ({
            size: {
              left: p.size.left,
              top: p.size.top,
            },
            banner: redBanner,
            name: 'ОТРЯД ИГРОКА',
          })
        }

          return ({
            size: {
              left: p.size.left,
              top: p.size.top,
            },
            banner: restOthers[i].flag,
            name: restOthers[i].name,
          })


      })

      setCurrentBanners(newBanners);
      setPhase('Финиш');
    }
  }, [currentBanners, currentBet, others, phase]);

  const renderPlayersButtons = React.useMemo(() => {
    const resultBet = infBet + Math.floor(Number(goldBet) / START_CHANGE);
    setCurrentBet(resultBet);

    if (phase === 'Ставки') {
      return <button onClick={handleConfirmBet}>Подтвердить ставку {resultBet} влияния</button>
    }

    if (phase === 'Очередь') {
      if (others.length !== othersStart.length + 1) {
        handleMakeQueue();
      }

      if (others[0].name === 'ОТРЯД ИГРОКА') {
        handlePlaceBanner();
        return;
      }

      return (
        <button onClick={handlePlaceBanner}>Ждать</button>
      )
    }
  }, [goldBet, handleConfirmBet, handleMakeQueue, handlePlaceBanner, infBet, others, phase]);

  const renderPlayerScore = React.useMemo(() => {
    return (
      <div className={s.score}>
        {renderPlayersButtons}

        <div className={s.consolePlayer}>

          <div className={s.othersFlag}>
            <img src={redBanner} alt='' width='100' height='100' />
          </div>

          {phase === 'Ставки' ? renderPlayerBet : null}

        </div>
      </div>
    )
  }, [phase, renderPlayerBet, renderPlayersButtons])

  const renderBanners = React.useMemo(() => {
    if (phase !== 'Установка') {
      return (
        currentBanners.map(p => {
          return (
            <div className={s.banner} key={p.name+p.size.left} style={{left: p.size.left, top: p.size.top}}>
              <img src={p.banner} alt='' width='50' />
              <div>{p.name}</div>
          </div>
          )
        })
      )
    }

    return (
      currentBanners.map((p, i) => {
        if (p.name === 'ПУСТО') {
          return (
            <div className={s.bannerActive} key={p.name+p.size.left} style={{left: p.size.left, top: p.size.top}} onClick={() => restBannersSet(i as number)}>
              <img src={p.banner} alt='' width='50' />
              <div>{p.name}</div>
          </div>
          )
        }

        return (
          <div className={s.banner} key={p.name+p.size.left} style={{left: p.size.left, top: p.size.top}}>
            <img src={p.banner} alt='' width='50' />
            <div>{p.name}</div>
        </div>
    )}))
  }, [currentBanners, phase, restBannersSet]);

  const renderMap = React.useMemo(() => {
    return (
      <div className={s.mapContainer}>

        {renderBanners}

        <div className={s.backMap}>
          <img src={battleground} alt='' />
        </div>
      </div>
    )
  }, [renderBanners]);

  const renderOthers = React.useMemo(() => {
    return (
      <div>
        Список всех команд

        <div className={s.others}>
          {others.map((p, i) => {
            return (
              <div className={s.console} key={p.name+i}>
                <div className={s.othersFlag}>
                  <img src={p.flag} alt='' width='50' height='50' />
                </div>
        
                <div className={s.consoleText}>
                  <div>{p.name}</div>
                  <div>{phase === 'Ставки' ? 'Ставка скрыта' : `Влияние: ${p.bet}`}</div>
                  <div>{phase === 'Очередь' ? `Очередь: ${i + 1}` : null}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }, [others, phase]);

  const renderActionText = React.useMemo(() => {
    if (phase === 'Ставки') {
      return (
        <div className={s.actionText}>
          Сделайте свою ставку
        </div>
      )
    }

    if (phase === 'Очередь') {
      return (
        <div className={s.actionText}>
          Подождите пока игроки выше очередностью установят свои позиции
        </div>
      )
    }

    if (phase === 'Установка') {
      return (
        <div className={s.actionText}>
          Выберите свою позицию из оставшихся
        </div>
      )
    }

    if (phase === 'Финиш') {
      return (
        <div className={s.actionText}>
          Все команды знают свои места старта
        </div>
      )
    }
  }, [phase]);
  
  return (
    <div className={s.sumContainer}>
      <div className={s.container}>
        {renderMap}

        {renderOthers}
      </div>

      <div className={s.panel}>
        {renderPlayerScore}

        {renderActionText}
      </div>
    </div>
  )
}