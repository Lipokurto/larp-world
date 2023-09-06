import React from "react";

import rec from '../../../assets/simple/rec.png';
import wall from '../../../assets/simple/wall.png';
import wallBack from '../../../assets/simple/wallBack.png';

import { RoofCalc } from "./roof-calc";

import s from './house-calc.module.css';

const MAX_SIZE = 6;

export function HouseCalc(): JSX.Element {
  const [buildX, setBuildX] = React.useState<number>(1);
  const [buildY, setBuildY] = React.useState<number>(1);

  const handleSizeChange = React.useCallback((event: { target: { value: any; }; }, isX: boolean) => {
    const current = Number(event.target.value);
    if (current <= MAX_SIZE && current > 0) {
      isX ? setBuildX(current) : setBuildY(current);
    }
    return null;
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

  return (
    <div className={s.container}>
      
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <label>
          Длина здания
          <input type='number' value={buildX} onChange={(e) => handleSizeChange(e, true)} max={MAX_SIZE} />
        </label>

        <label>
          Ширина здания
          <input type='number' value={buildY} onChange={(e) => handleSizeChange(e, false)} max={MAX_SIZE}/>
        </label>
      </div>

      <div>{renderLine}</div>
    </div>
  )
}