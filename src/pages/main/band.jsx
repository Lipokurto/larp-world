import React from 'react';
import { useInView } from 'react-intersection-observer';

import { useResize } from '../../components/utils/use-resize';

import './band.css';

export function Band(props) {
  const { width, isScreenLg } = useResize();

  const { band } = props;
  const { ref, inView } = useInView({
    threshold: 0.4,
  });

  const secondAvatar = React.useMemo(() => {
    if (isScreenLg) {
      return (
        <div className="avatar">
          <img src={band.image} alt='Band' width={200} height={100}/>
          <h1>{band.status}</h1>
        </div>
      )
    }

    return null;
  }, [band.image, band.status, isScreenLg]);

  const firstAvatar = React.useMemo(() => {
    if (width > 600) {
      return (
        <div className="avatar">
          <img src={band.image} alt='Band' width={200} height={100}/>
          <h1>{band.status}</h1>
        </div>
      )
    }

    return null;
  }, [band.image, band.status, width]);
  
  return (
    <div className={inView ? 'band band--zoom' : 'band'} key={band.title} ref={ref}>
      {firstAvatar}

      <div className="band-text">
        <h1>{band.title}</h1>
        <p>{band.capitan}</p>
        <p>{band.description}</p>
        <p>{band.contact}</p>
      </div>
      
      {secondAvatar}
    </div>
  )
}