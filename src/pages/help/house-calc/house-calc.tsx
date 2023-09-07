import React from "react";
import RangeSlider from 'react-bootstrap-range-slider';

import rec from '../../../assets/simple/rec.png';
import wall from '../../../assets/simple/wall.png';
import wallBack from '../../../assets/simple/wallBack.png';

import wallSize from '../../../assets/simple/wallSize.png';

import roof1Size from '../../../assets/simple/roof1Size.png';
import roof2Size from '../../../assets/simple/roof2Size.png';
import roof3Size from '../../../assets/simple/roof3Size.png';
import stolbSize from '../../../assets/simple/stolbSize.png';
import bar1Size from '../../../assets/simple/bar1Size.png';
import bar2Size from '../../../assets/simple/bar2Size.png';
import bar3Size from '../../../assets/simple/bar3Size.png';

import { RoofCalc } from "./roof-calc";
import { calcRoofCounts } from "./roof-counts";
import { ItemModal } from "../../../components";
import { RoofCounts } from "./types";
import { CalcCountImage } from "./calc-count-image";

import s from './house-calc.module.css';

const MAX_SIZE = 6;

const stats = {
  cubeWoodCount: 67,
  countWood: {
    wall: 2,
    roof3: 2,
    roof2: 1,
    roof1: 1,
    stolb: 1,
    bar1: 1,
    bar2: 1,
    bar3: 1,
  },
};

const startRoofCounts = {
  roof1: 0,
  roof2: 0,
  roof3: 0,
  stolb: 0,
  bar1: 0,
  bar2: 0,
  bar3: 0,
};

export function HouseCalc(): JSX.Element {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const [buildX, setBuildX] = React.useState<number>(1);
  const [buildY, setBuildY] = React.useState<number>(1);
  const [cubePrice, setCubePrice] = React.useState<number | null>(null);
  const [globalPrice, setGlobalPrice] = React.useState<string>('0');
  
  const [wallsCount, setWallsCount] = React.useState<number>(4);

  const [roofCounts, setRoofCounts] = React.useState<RoofCounts>(startRoofCounts);

  React.useEffect(() => {
    setWallsCount((buildX + buildY)*2);

    setRoofCounts(calcRoofCounts(buildX, buildY));
  }, [buildX, buildY]);

  const handleClick = React.useCallback(() => {
    setIsOpen(true);
  }, []);

  const handleSizeChange = React.useCallback((event: { target: { value: any; }; }, isX: boolean) => {
    const current = Number(event.target.value);
    if (current <= MAX_SIZE && current > 0) {
      isX ? setBuildX(current) : setBuildY(current);
    }
    return null;
  }, []);

  const handleCubePriceChange = React.useCallback((event: { target: { value: any; }; }) => {
    const current = Number(event.target.value);
    if (current > 0) {
      setCubePrice(current);
    }
  }, []);

  const renderEmpty = React.useMemo(() => {
    return (
    <div className={s.square}>
      <img src={rec} alt='' />
    </div>
    )
  }, []);

  const renderRoof = React.useCallback((x: number, y: number) => {
    return <RoofCalc x={x} y={y} buildX={buildX} buildY={buildY} />
  }, [buildX, buildY]);

  const renderLine = React.useMemo(() => {
    const rowsEmpty = Array(buildX).fill(renderEmpty);
    const columnsWalls = Array(buildY).fill(rowsEmpty);


    const table = columnsWalls.map((py, iy) => {
      return <div style={{display: 'flex', flexDirection: 'row'}} key={iy+'aa'}>
        {py.map((px: any, ix: number) => {
          return (
            <div className={s.square} key={ix+iy}>
              {renderRoof(ix, iy)}

              {ix === 0 ? <img src={wallBack} alt='' className={s.leftTopWall}/> : null}
              {iy === 0 ? <img src={wallBack} alt='' className={s.rightTopWall}/> : null}
              {iy+1 === buildY ? <img src={wall} alt='' className={s.leftBottomWall}/> : null}
              {ix+1 === buildX ? <img src={wall} alt='' className={s.rightBottomWall}/> : null}
              
              <img src={rec} alt='' />
            </div>
          )
        })}
        </div>
    })

    return (
      <div className={s.build}>
        <div className={s.containerBuild}>
          {table}
        </div>
      </div>
    );
  }, [buildX, buildY, renderEmpty, renderRoof]);

  const renderPrices = React.useMemo(() => {
    const hasRoof = buildY !== 1;

    const reNullCubePrice = cubePrice === null ? 0 : cubePrice;

    const wallsFinalPrice = (wallsCount*(reNullCubePrice/stats.cubeWoodCount));

    const roofFinalPrice = (
      (
        roofCounts.roof1*stats.countWood.roof1 + 
        roofCounts.roof2*stats.countWood.roof2 + 
        roofCounts.roof3*stats.countWood.roof3 + 
        roofCounts.stolb*stats.countWood.stolb +
        roofCounts.bar1*stats.countWood.bar1 +
        roofCounts.bar2*stats.countWood.bar2 +
        roofCounts.bar3*stats.countWood.bar3
        )*(reNullCubePrice/stats.cubeWoodCount));
      
        setGlobalPrice((roofFinalPrice + wallsFinalPrice).toFixed(2));

    const woodCount = (
      wallsCount*stats.countWood.wall +
      roofCounts.roof1*stats.countWood.roof1 + 
      roofCounts.roof2*stats.countWood.roof2 + 
      roofCounts.roof3*stats.countWood.roof3 + 
      roofCounts.stolb*stats.countWood.stolb +
      roofCounts.bar1*stats.countWood.bar1 +
      roofCounts.bar2*stats.countWood.bar2 +
      roofCounts.bar3*stats.countWood.bar3
    );
        
    return (
      <div>
        <div className={s.itemModalContainer}>
          <div>Всего понадобится бруса</div>
          <div>{`50*50*6000 : ${woodCount} шт.`}</div>
        </div>
        
        <div className={s.itemModalContainer}>
          <div style={{fontSize: '20px', fontWeight: 'bold', color: 'wheat', margin: '10px'}}>Стены</div>
          <img src={wallSize} alt='' />
          <div>{`Количество: ${wallsCount}`}</div>
          <div>{`Стоимость стен: ${wallsFinalPrice.toFixed(2)}`}</div>
        </div>
        <br />
        {hasRoof && (
          <>
            <div className={s.itemModalContainer}>
              <div style={{fontSize: '20px', fontWeight: 'bold', color: 'wheat', margin: '10px'}}>Крыша</div>
                <CalcCountImage sourceImg={roof1Size} count={roofCounts.roof1} />
    
                <CalcCountImage sourceImg={roof2Size} count={roofCounts.roof2} />

                <CalcCountImage sourceImg={roof3Size} count={roofCounts.roof3} />

                <CalcCountImage sourceImg={stolbSize} count={roofCounts.stolb} />

                <CalcCountImage sourceImg={bar1Size} count={roofCounts.bar1} />

                <CalcCountImage sourceImg={bar2Size} count={roofCounts.bar2} />

                <CalcCountImage sourceImg={bar3Size} count={roofCounts.bar3} />
            </div>
            <div>{`Стоимость крыши: ${roofFinalPrice.toFixed(2)}`}</div>
          </>
        )}

      </div>
    )
  }, [buildY, cubePrice, roofCounts, wallsCount]);

  const renderGlobalPrice = React.useMemo(() => {
    return (
      <div className={s.priceContainer}>
        <div>Стоимость куба леса</div>
        <input type='number' onChange={(e) => handleCubePriceChange(e)} step={5}/>
      </div>
    )
  }, [handleCubePriceChange]);

  const renderBuildingSize = React.useMemo(() => {
    return (
      <div className={s.sizeContainer}>
        <div>
          Длина здания
          <RangeSlider value={buildX} min={1} max={MAX_SIZE} onChange={(e) => handleSizeChange(e, true)} tooltip="off" />
          {` ${buildX} м`}
        </div>

        <div>
          Ширина здания
          <RangeSlider value={buildY} min={1} max={MAX_SIZE} onChange={(e) => handleSizeChange(e, false)} tooltip="off" />
          {` ${buildY} м`}
        </div>
      </div>
    )
  }, [buildX, buildY, handleSizeChange]);

  const renderFinalPrice = React.useMemo(() => {
    return (
      <div className={s.finalContainer}>
        <div style={{fontSize: '15px', fontWeight: 'bold'}}>Общая стоимость леса</div>
        <div style={{fontSize: '20px', color: 'wheat', fontWeight: 'bold', marginTop: '10px'}}>{globalPrice}</div>
        <button className={s.resultButton} onClick={handleClick}>Показать расчеты</button>
      </div>
    )
  }, [globalPrice, handleClick]);

  return (
    <>
      <div className={s.container}>
        
        <div style={{display: 'flex', flexDirection: 'column'}}>
          {renderGlobalPrice}

          {renderBuildingSize}

          {renderFinalPrice}
        </div>
        <div>{renderLine}</div>
      </div>

      {isOpen && (
        <ItemModal
          setIsOpen={setIsOpen}
          item={{label: 'Расчеты', element: renderPrices}}
        />
      )}
    </>
  )
}