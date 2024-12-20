import roof1 from '../../../assets/simple/roof.png';
import roof2 from '../../../assets/simple/roof2.png';
import roof3 from '../../../assets/simple/roof3.png';
import roof1Back from '../../../assets/simple/roofBack.png';
import roof2Back from '../../../assets/simple/roof2Back.png';
import roof3Back from '../../../assets/simple/roof3Back.png';

import stolb from '../../../assets/simple/stolb.png';

import bar from '../../../assets/simple/bar.png';
import bar2Half from '../../../assets/simple/bar2Half.png';
import bar3Half from '../../../assets/simple/bar3Half.png';

import s from './house-calc.module.css';

type Props = {
  x: number,
  y: number,
  buildX: number,
  buildY: number,
}

function calcBar(buildX: number, buildY: number): JSX.Element {
  if (buildX === 2) {
    if (buildY === 2 || buildY === 3) {
      return (
        <img src={bar2Half} alt='' className={s.roofBar} 
        style={{transform: `skewX(45deg) translateY(-350px) translateX(-50px)`}}/>
      )
    }

    if (buildY === 4 || buildY === 5) {
      return (
        <img src={bar2Half} alt='' className={s.roofBar} 
        style={{transform: `skewX(45deg) translateY(-450px) translateX(50px)`}}/>
      )
    }

    if (buildY === 6) {
      return (
        <img src={bar2Half} alt='' className={s.roofBar} 
        style={{transform: `skewX(45deg) translateY(-550px) translateX(150px)`}}/>
      )
    }
  }

  if (buildX === 3) {
    if (buildY === 2 || buildY === 3) {
      return (
        <img src={bar3Half} alt='' className={s.roofBar} 
        style={{transform: `skewX(45deg) translateY(-350px) translateX(-150px)`}}/>
      )
    }

    if (buildY === 4 || buildY === 5) {
      return (
        <img src={bar3Half} alt='' className={s.roofBar} 
        style={{transform: `skewX(45deg) translateY(-450px) translateX(-50px)`}}/>
      )
    }

    if (buildY === 6) {
      return (
        <img src={bar3Half} alt='' className={s.roofBar} 
        style={{transform: `skewX(45deg) translateY(-550px) translateX(50px)`}}/>
      )
    }
  }

  if (buildX === 4) {
    if (buildY === 2 || buildY === 3) {
      return (
        <>
          <img src={bar2Half} alt='' className={s.roofBar} 
            style={{transform: `skewX(45deg) translateY(-350px) translateX(-250px)`}}/>
            
          <img src={bar2Half} alt='' className={s.roofBar} 
            style={{transform: `skewX(45deg) translateY(-350px) translateX(-50px)`}}/>
        </>
      )
    }

    if (buildY === 4 || buildY === 5) {
      return (
        <>
          <img src={bar2Half} alt='' className={s.roofBar} 
            style={{transform: `skewX(45deg) translateY(-450px) translateX(50px)`}}/>
            
          <img src={bar2Half} alt='' className={s.roofBar} 
            style={{transform: `skewX(45deg) translateY(-450px) translateX(-150px)`}}/>
        </>
      )
    }

    if (buildY === 6) {
      return (
        <>
          <img src={bar2Half} alt='' className={s.roofBar} 
            style={{transform: `skewX(45deg) translateY(-550px) translateX(150px)`}}/>
            
          <img src={bar2Half} alt='' className={s.roofBar} 
            style={{transform: `skewX(45deg) translateY(-550px) translateX(-50px)`}}/>
        </>
      )
    }
  }

  if (buildX === 5) {
    if (buildY === 2 || buildY === 3) {
      return (
        <>
          <img src={bar3Half} alt='' className={s.roofBar} 
            style={{transform: `skewX(45deg) translateY(-350px) translateX(-150px)`}}/>
            
          <img src={bar2Half} alt='' className={s.roofBar} 
            style={{transform: `skewX(45deg) translateY(-350px) translateX(-350px)`}}/>
        </>
      )
    }

    if (buildY === 4 || buildY === 5) {
      return (
        <>
          <img src={bar3Half} alt='' className={s.roofBar} 
            style={{transform: `skewX(45deg) translateY(-450px) translateX(-50px)`}}/>
            
          <img src={bar2Half} alt='' className={s.roofBar} 
            style={{transform: `skewX(45deg) translateY(-450px) translateX(-250px)`}}/>
        </>
      )
    }

    if (buildY === 6) {
      return (
        <>
          <img src={bar3Half} alt='' className={s.roofBar} 
            style={{transform: `skewX(45deg) translateY(-550px) translateX(50px)`}}/>
            
          <img src={bar2Half} alt='' className={s.roofBar} 
            style={{transform: `skewX(45deg) translateY(-550px) translateX(-150px)`}}/>
        </>
      )
    }
  }

  if (buildX === 6) {
    if (buildY === 2 || buildY === 3) {
      return (
        <>
          <img src={bar3Half} alt='' className={s.roofBar} 
            style={{transform: `skewX(45deg) translateY(-350px) translateX(-150px)`}}/>
            
          <img src={bar3Half} alt='' className={s.roofBar} 
            style={{transform: `skewX(45deg) translateY(-350px) translateX(-450px)`}}/>
        </>
      )
    }

    if (buildY === 4 || buildY === 5) {
      return (
        <>
          <img src={bar3Half} alt='' className={s.roofBar} 
            style={{transform: `skewX(45deg) translateY(-450px) translateX(-50px)`}}/>
            
          <img src={bar3Half} alt='' className={s.roofBar} 
            style={{transform: `skewX(45deg) translateY(-450px) translateX(-350px)`}}/>
        </>
      )
    }

    if (buildY === 6) {
      return (
        <>
          <img src={bar3Half} alt='' className={s.roofBar} 
            style={{transform: `skewX(45deg) translateY(-550px) translateX(50px)`}}/>
            
          <img src={bar3Half} alt='' className={s.roofBar} 
            style={{transform: `skewX(45deg) translateY(-550px) translateX(-250px)`}}/>
        </>
      )
    }
  }

  return <></>
}

export function RoofCalc(props: Props): JSX.Element | null {
  const { x,y, buildX, buildY } = props;

  const baseStyleRight = 'rotateY(180deg) rotateZ(90deg) skewX(45deg)';
  const baseStyleLeft = 'skewY(45deg) rotateZ(270deg)';
  
  const isOnly = x+1 === buildX && x === 0;
  const isLast = x+1 === buildX;
  const isFirstOrMiddleOnFive = (x === 0 || x+1 === 3) && buildX % 2 !== 0;
  const isFirstOrMiddle = x === 0 || (buildX % 2 === 0 && x === buildX / 2 && buildX > 3 && buildX !== 5);
  const isMiddle = (x+1 === 3 && buildX % 2 !== 0) ||
  (buildX % 2 === 0 && x === buildX / 2 && buildX > 3 && buildX !== 5);

  if (buildY === 2 && y+1 === buildY) {
    if (isOnly) {
      return (
        <>
          <img src={bar} alt='' className={s.roofBar} 
            style={{transform: `skewX(45deg) translateY(-350px) translateX(50px)`}}/>

          <img src={roof1} alt='' className={s.roof} 
            style={{transform: `${baseStyleRight} translateY(-200px) translateX(-150px)`}}/>

          <img src={roof1} alt='' className={s.roof} 
            style={{transform: `${baseStyleLeft} translateY(-200px) translateX(50px)`}}/>

          <img src={roof1Back} alt='' className={s.roofBack} 
            style={{transform: `${baseStyleRight} translateY(-300px) translateX(-50px)`}}/>

          <img src={roof1Back} alt='' className={s.roofBack} 
            style={{transform: `${baseStyleLeft} translateY(-300px) translateX(-50px)`}}/>
        </>
      )
    }

    if (isLast) {
      return (
        <>
          {calcBar(buildX, buildY)}

          <img src={roof1} alt='' className={s.roof} 
            style={{transform: `${baseStyleRight} translateY(-200px) translateX(-150px)`}}/>

          <img src={roof1} alt='' className={s.roof} 
            style={{transform: `${baseStyleLeft} translateY(-200px) translateX(50px)`}}/>
        </>
      )
    }
    
    if (isFirstOrMiddle || isFirstOrMiddleOnFive) {
      return (
        <>
          <img src={roof1Back} alt='' className={s.roofBack} 
            style={{transform: `${baseStyleRight} translateY(-300px) translateX(-50px)`}}/>

          <img src={roof1Back} alt='' className={s.roofBack} 
            style={{transform: `${baseStyleLeft} translateY(-300px) translateX(-50px)`}}/>
        </>
      )
    }
  }

  if (buildY === 3 && y+1 === buildY) {
    if (isOnly) {
      return (
        <>
          <img src={bar} alt='' className={s.roofBar} 
            style={{transform: `skewX(45deg) translateY(-350px) translateX(50px)`}}/>

          <img src={roof2} alt='' className={s.roof}
            style={{transform: `${baseStyleRight} translateY(-250px) translateX(-150px)`}}/>

          <img src={roof1} alt='' className={s.roof} 
            style={{transform: `${baseStyleLeft} translateY(-200px) translateX(50px)`}}/>

          <img src={roof2Back} alt='' className={s.roofBack} 
            style={{transform: `${baseStyleRight} translateY(-350px) translateX(-50px)`}}/>

          <img src={roof1Back} alt='' className={s.roofBack} 
            style={{transform: `${baseStyleLeft} translateY(-300px) translateX(-50px)`}}/>
        </>
      )
    }

    if (isLast) {
      return (
        <>
          {calcBar(buildX, buildY)}

          <img src={roof2} alt='' className={s.roof}
            style={{transform: `${baseStyleRight} translateY(-250px) translateX(-150px)`}}/>

          <img src={roof1} alt='' className={s.roof} 
            style={{transform: `${baseStyleLeft} translateY(-200px) translateX(50px)`}}/>
        </>
      )
    }

    if (isFirstOrMiddle || isFirstOrMiddleOnFive) {
      return (
        <>
          <img src={roof2Back} alt='' className={s.roofBack} 
            style={{transform: `${baseStyleRight} translateY(-350px) translateX(-50px)`}}/>

          <img src={roof1Back} alt='' className={s.roofBack} 
            style={{transform: `${baseStyleLeft} translateY(-300px) translateX(-50px)`}}/>
        </>
      )
    }
  }

  if (buildY === 4 && y+1 === buildY) {
    if (isOnly) {
      return (
        <>
          <img src={bar} alt='' className={s.roofBar} 
            style={{transform: `skewX(45deg) translateY(-450px) translateX(150px)`}}/>

          <img src={roof2} alt='' className={s.roof}
            style={{transform: `${baseStyleRight} translateY(-250px) translateX(-250px)`}}/>
          
          <img src={roof2} alt='' className={s.roof} 
            style={{transform: `${baseStyleLeft} translateY(-250px) translateX(50px)`}}/>

          <img src={roof2Back} alt='' className={s.roofBack} 
            style={{transform: `${baseStyleRight} translateY(-350px) translateX(-150px)`}}/>

          <img src={roof2Back} alt='' className={s.roofBack} 
            style={{transform: `${baseStyleLeft} translateY(-350px) translateX(-50px)`}}/>
        </>
      )
    }

    if (isLast) {
      return (
        <>
          {calcBar(buildX, buildY)}

          <img src={roof2} alt='' className={s.roof}
            style={{transform: `${baseStyleRight} translateY(-250px) translateX(-250px)`}}/>
          
          <img src={roof2} alt='' className={s.roof} 
            style={{transform: `${baseStyleLeft} translateY(-250px) translateX(50px)`}}/>
        </>
      )
    }

    if (isFirstOrMiddle || isFirstOrMiddleOnFive) { 
      return (
        <>
          <img src={roof2Back} alt='' className={s.roofBack} 
            style={{transform: `${baseStyleRight} translateY(-350px) translateX(-150px)`}}/>

          {isMiddle && <img src={stolb} alt='' className={s.roof} 
            style={{transform: `${baseStyleLeft} translateY(-150px) translateX(${2*100}px`}}/>}

          <img src={roof2Back} alt='' className={s.roofBack} 
            style={{transform: `${baseStyleLeft} translateY(-350px) translateX(-50px)`}}/>
        </>
      )
    }
  }

  if (buildY === 5 && y+1 === buildY) {
    if (isOnly) {
      return (
        <>        
          <img src={bar} alt='' className={s.roofBar} 
            style={{transform: `skewX(45deg) translateY(-450px) translateX(150px)`}}/>

          <img src={roof3} alt='' className={s.roof}
            style={{transform: `${baseStyleRight} translateY(-300px) translateX(-250px)`}}/>

          <img src={roof2} alt='' className={s.roof} 
            style={{transform: `${baseStyleLeft} translateY(-250px) translateX(50px)`}}/>
          
          <img src={roof3Back} alt='' className={s.roofBack} 
            style={{transform: `${baseStyleRight} translateY(-400px) translateX(-150px)`}}/>

          <img src={roof2Back} alt='' className={s.roofBack} 
            style={{transform: `${baseStyleLeft} translateY(-350px) translateX(-50px)`}}/>
        </>
      )
    }

    if (isLast) {
      return (
        <>
          {calcBar(buildX, buildY)}

          <img src={roof3} alt='' className={s.roof}
            style={{transform: `${baseStyleRight} translateY(-300px) translateX(-250px)`}}/>

          <img src={roof2} alt='' className={s.roof} 
            style={{transform: `${baseStyleLeft} translateY(-250px) translateX(50px)`}}/>
        </>
      )
    }

    if (isFirstOrMiddle || isFirstOrMiddleOnFive) {
      return (
        <>        
          <img src={roof3Back} alt='' className={s.roofBack} 
            style={{transform: `${baseStyleRight} translateY(-400px) translateX(-150px)`}}/>

          {isMiddle && <img src={stolb} alt='' className={s.roof} 
            style={{transform: `${baseStyleLeft} translateY(-150px) translateX(${2*100}px`}}/>}

          <img src={roof2Back} alt='' className={s.roofBack} 
            style={{transform: `${baseStyleLeft} translateY(-350px) translateX(-50px)`}}/>
        </>
      )
    }


  }

  if (buildY === 6 && y+1 === buildY) {
    if (isOnly) {
      return (
        <>
          <img src={bar} alt='' className={s.roofBar} 
            style={{transform: `skewX(45deg) translateY(-550px) translateX(250px)`}}/>

          <img src={roof3} alt='' className={s.roof}
            style={{transform: `${baseStyleRight} translateY(-300px) translateX(-350px)`}}/>

          <img src={roof3} alt='' className={s.roof} 
            style={{transform: `${baseStyleLeft} translateY(-300px) translateX(50px)`}}/>

          <img src={roof3Back} alt='' className={s.roofBack} 
            style={{transform: `${baseStyleRight} translateY(-400px) translateX(-250px)`}}/>

          <img src={roof3Back} alt='' className={s.roofBack} 
            style={{transform: `${baseStyleLeft} translateY(-400px) translateX(-50px)`}}/>
        </>
      )
    }

    if (isLast) {
      return (
        <>
          {calcBar(buildX, buildY)}

          <img src={roof3} alt='' className={s.roof}
            style={{transform: `${baseStyleRight} translateY(-300px) translateX(-350px)`}}/>

          <img src={roof3} alt='' className={s.roof} 
            style={{transform: `${baseStyleLeft} translateY(-300px) translateX(50px)`}}/>
        </>
      )
    }

    if (isFirstOrMiddle || isFirstOrMiddleOnFive) {
      return (
        <>
          <img src={roof3Back} alt='' className={s.roofBack} 
            style={{transform: `${baseStyleRight} translateY(-400px) translateX(-250px)`}}/>

          {isMiddle && <img src={stolb} alt='' className={s.roof} 
            style={{transform: `${baseStyleLeft} translateY(-150px) translateX(${3*100}px`}}/>}

          <img src={roof3Back} alt='' className={s.roofBack} 
            style={{transform: `${baseStyleLeft} translateY(-400px) translateX(-50px)`}}/>
        </>
      )
    }
  }

  return null
}