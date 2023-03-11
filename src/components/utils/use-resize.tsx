import React from 'react';

import {
  SCREEN_SM,
  SCREEN_MD,
  SCREEN_LG,
  SCREEN_XL,
  SCREEN_XXL,
} from './breakpoints';

type Size = {
  height: number,
  width: number,
  isScreenSm: boolean,
  isScreenMd: boolean,
  isScreenLg: boolean,
  isScreenXl: boolean,
  isScreenXxl: boolean,
}

export function useResize(): Size {
  const [width, setWidth] = React.useState<number>(window.innerWidth);
  const [height, setHeight] = React.useState<number>(window.innerHeight);

  React.useEffect(() => {
    const handleResize = (event: any) => {
      setWidth(event.target.innerWidth);
      setHeight(event.target.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return {
    height,
    width,
    isScreenSm: width >= SCREEN_SM,
    isScreenMd: width >= SCREEN_MD,
    isScreenLg: width >= SCREEN_LG,
    isScreenXl: width >= SCREEN_XL,
    isScreenXxl: width >= SCREEN_XXL,
  };
};