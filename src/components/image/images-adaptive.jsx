import React from "react";
import Carousel from "better-react-carousel";

import { useResize } from "../utils/use-resize";

import s from './images-adaptive.module.css';

export function ImagesAdaptive({images}) {
  const { isScreenLg } = useResize();

  if (isScreenLg) {
    return  (
      <div className={s.containerlg}>
        {images.map((p, i) => <img key={'lg>' + i} src={p} alt='' />)}
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
      mobileBreakpoint={[
        {
          breakpoint: 800,
          cols: 1,
          rows: 1,
          gap: 10,
          loop: true,
        }
      ]}
    >
      {images.map((p, i) => {
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