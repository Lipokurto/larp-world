import React from 'react';
import { useInView } from 'react-intersection-observer';

import './band.css';

export function Band(props) {
  const { band } = props;
  const { ref, inView } = useInView({
    threshold: 0.4,
  });

  return (
    <div className={inView ? 'band band--zoom' : 'band'} key={band.title} ref={ref}>
      <div className="avatar">
        <img src={band.image} alt='Band' width={200} height={100}/>
        <h1>{band.status}</h1>
      </div>

      <div className="band-text">
        <h1>{band.title}</h1>
        <p>{band.capitan}</p>
        <p>{band.description}</p>
        <p>{band.contact}</p>
      </div>
      
      <div className="avatar">
        <img src={band.image} alt='Band' width={200} height={100}/>
        <h1>{band.status}</h1>
      </div>
    </div>
  )
}