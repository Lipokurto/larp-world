import React from "react";

import s from './image-zoom.module.css';

type Props = {
  image: string, 
  startWidth: string, 
  zoomWidth: string,
}

export function ImageZoom({ image, startWidth, zoomWidth }: Props): JSX.Element {
  const [isOpen, setIsOpen] = React.useState(false);

  if (isOpen) {
    document.body.style.position = 'fixed';
    document.body.style.top = `-${window.scrollY}px`;
    
    return (
      <>
        <div className={s.portrait_open} onClick={() => setIsOpen(false)}>
          <img src={image} alt='Kings' width={zoomWidth} />
        </div>

        <div className={s.portrait_wrapper} onClick={() => setIsOpen(false)}>
        </div>
      </>
    )
  }

  document.body.style.position = '';
  document.body.style.top = '';

  return (
    <div onClick={() => setIsOpen(true)}>
      <img src={image} alt='Kings' width={startWidth} />
    </div>
  )
}