import React from 'react';
import Carousel from 'better-react-carousel';

import { useResize } from '../utils/use-resize';
import loader from '../../assets/icons/loader-2.gif';

import s from './images-adaptive.module.css';

type Props = {
  images: string[],
  isNoAdaptive?: boolean,
}

export function ImagesAdaptive(props: Props): JSX.Element {
  const { isScreenXl } = useResize();
  const [isLoaded, setIsLoaded] = React.useState<boolean>(false);

  if (isScreenXl && !props.isNoAdaptive) {
    return (
      <div className={s.containerLg}>
        {props.images.map((p, i) => {
          return (
            <div key={'lg>' + i}>
              <img src={p} alt='' style={isLoaded ? {} : { display: 'none' }} onLoad={() => setIsLoaded(true)} />
               {isLoaded ? null : <img src={loader} alt='' />}
            </div>
          )
        })}
    </div>
    )
  }

  return (
    <div className={s.container}>
      <Carousel
        cols={1}
        rows={1}
        gap={10}
        loop
        showDots
        mobileBreakpoint={359}
        responsiveLayout={[
          {
            breakpoint: 800,
            cols: 1,
            rows: 1,
            gap: 10,
            loop: true,
          },
        ]}
      >
        {props.images.map((p, i) => {
          return (
            <Carousel.Item key={'lg<' + i}>
              <img src={p} alt='' style={isLoaded ? {} : { display: 'none' }} onLoad={() => setIsLoaded(true)} />
              {isLoaded ? null : <img src={loader} alt='' />}
            </Carousel.Item>
          )
        })}
      </Carousel>
    </div>
  )
}