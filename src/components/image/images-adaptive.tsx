import React from "react";
import Carousel from "better-react-carousel";

import { useResize } from "../utils/use-resize";

import s from './images-adaptive.module.css';

type Props = {
  images: string[],
  isNoAdaptive?: boolean,
}

export function ImagesAdaptive(props: Props): JSX.Element {
  const { isScreenXl } = useResize();

  if (isScreenXl && !props.isNoAdaptive) {
    return  (
      <div className={s.containerlg}>
        {props.images.map((p, i) => <img key={'lg>' + i} src={p} alt='' />)}
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
        }
      ]}
    >
      {props.images.map((p, i) => {
        return (
          <Carousel.Item key={'lg<' + i}>
            <img src={p} alt='' />
          </Carousel.Item>
        )
      })}
    </Carousel>
</div>
  )
}