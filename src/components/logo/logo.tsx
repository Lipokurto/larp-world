import React from 'react';
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";

import { LabelText } from './label-text/label-text';
import { Battle01 } from './battle/battle01';
import { Battle02 } from './battle/battle02';
import { Eclipse } from './eclipse/eclipse';
import { useResize } from '../utils/use-resize';

import s from './logo.module.css';

export function Logo(): JSX.Element {
  const { width ,isScreenLg } = useResize();

  if (isScreenLg) {
    return (
      <>
        <div className={s.logo}>
          <MouseParallaxContainer 
            globalFactorX={0.1} 
            globalFactorY={0.1}
            inverted
            containerStyle={{
              width: "100%",
              display: "flex",
              gridTemplateColumns: "auto auto auto auto auto",
              overflow: "visible"
            }}
          >
            <MouseParallaxChild factorX={0.3} factorY={0.3}
              style={{ zIndex: 3 }}
            >
              <LabelText />
            </MouseParallaxChild>
            
            <MouseParallaxChild factorX={0.2} factorY={0.2}
              style={{ zIndex: 2 }}
            >
              <Battle01 />
            </MouseParallaxChild>
  
            <MouseParallaxChild factorX={0.1} factorY={0.1}
              style={{ zIndex: 1 }}
            >
              <Battle02 />
            </MouseParallaxChild>
  
            <MouseParallaxChild factorX={0.0} factorY={0.0} 
              style={{ zIndex: 0 }}
            >
              <Eclipse />
            </MouseParallaxChild>
          </MouseParallaxContainer>
        </div>
      </>
    )
  }

  if (width > 800) {
    return (
      <div className={s.logo}>
        <div className={s.labelTextsm}>
          <LabelText />
        </div>
  
        <div>
          <Eclipse />
        </div>
      </div>
    )
  }

  return (
    <div className={s.logo}>
      <div className={s.labelTextsm}>
        <LabelText />
      </div>
    </div>
  )
}