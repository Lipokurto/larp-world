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

type Phase = 'Ставки' | 'Очередь' | 'Установка';

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
  // const [playerBanner, setPlayerBanner] = React.useState<number | null>(null);
  
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

  const renderResultBet = React.useMemo(() => {
    const resultBet = infBet + Math.floor(Number(goldBet) / START_CHANGE);
    setCurrentBet(resultBet);

    return <div><b>ВАША ФИНАЛЬНАЯ СТАВКА {resultBet}</b></div>
  }, [goldBet, infBet]);

  const renderPlayerBet = React.useMemo(() => {
    return (
      <div className={s.consoleText}>
        <div>
          <div>
            <b>Ваше влияние: </b>{START_INFLUENCE}
          </div>

          <div>
            <b>Ваша ставка влияния:</b>
            <input type='number' name='influenceBet' min='0' max={START_INFLUENCE} onChange={handleBetChange} />
          </div>
        </div>

        <div>
          <div>
            <div><b>Ваше золото: </b>{START_MONEY}</div>
          </div>

          <div>
            <b>Ваша ставка золота:</b>
            <input type='number' name='goldBet' min='0' max={START_MONEY} onChange={handleBetChange}/>
          </div>
        </div>

        <div><b>1 влияние = {`${START_CHANGE} ${decimalText(START_CHANGE, ['золотой', 'золота', 'золотых'])}`}</b></div>

        {renderResultBet}
      </div>
    )  
  }, [handleBetChange, renderResultBet]);

  const handlePlaceBanner = React.useCallback(() => {
    const firstEmptyIndex = currentBanners.findIndex(p => p.name === 'ПУСТО');
    const playersIndex = others.findIndex(p => p.name === 'ОТРЯД ИГРОКА');

    if (phase === 'Очередь') {
      if (firstEmptyIndex + 1 === playersIndex) setPhase('Установка');

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
    }
  }, [currentBanners, currentBet, others, phase]);

  const renderPlayersButtons = React.useMemo(() => {
    if (phase === 'Ставки') {
      return <button onClick={handleConfirmBet}>Подтвердить ставку</button>
    }

    if (phase === 'Очередь') {
      handleMakeQueue();

      return (
        <button onClick={handlePlaceBanner}>Ждать</button>
      )
    }
  }, [handleConfirmBet, handleMakeQueue, handlePlaceBanner, phase]);

  const renderPlayerScore = React.useMemo(() => {
    return (
      <div className={s.console}>
        <div style={{ width: '100px', height: '100px', backgroundColor: 'red' }}></div>

        {renderPlayerBet}

        {renderPlayersButtons}
      </div>
    )
  }, [renderPlayerBet, renderPlayersButtons])

  const renderBanners = React.useMemo(() => {
    if (phase !== 'Установка') {
      return (
        currentBanners.map((p, i) => {
          return (
            <div className={s.banner} key={p.name+p.size.left} style={{left: p.size.left, top: p.size.top}}>
              <div>{i}</div>
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
              <div>{i}</div>
              <img src={p.banner} alt='' width='50' />
              <div>{p.name}</div>
          </div>
          )
        }

        return (
          <div className={s.banner} key={p.name+p.size.left} style={{left: p.size.left, top: p.size.top}}>
            <div>{i}</div>
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
      <div style={{display: 'flex'}}>
        {others.map((p, i) => {
          return (
            <div className={s.console} key={p.name+i}>
              <div style={{ width: '100px', height: '100px', backgroundColor: p.color }}></div>
      
              <div className={s.consoleText}>
                <div>{p.name}</div>
                <div>{phase === 'Ставки' ? 'Текущая ставка скрыта' : `Влияение: ${p.bet}`}</div>
                <div>{phase === 'Очередь' ? `Очередь: ${i + 1}` : null}</div>
              </div>
            </div>
          )
        })}
      </div>
    )
  }, [others, phase]);
  
  return (
    <div className={s.container}>
      {renderMap}

      {renderOthers}

      {/* {phase === 'Ставки' ? renderPlayerScore : null} */}
      {renderPlayerScore}
    </div>
  )
}