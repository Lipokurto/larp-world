import React from 'react';
import { useInView } from 'react-intersection-observer';

import './band.css';
import { Video } from '../../components';

type Props = {
  obj: {
    link: string,
    name: string,
  }
};

export function Band(props: Props): JSX.Element {
  const { ref, inView } = useInView({
    threshold: 0.4,
  });
  
  return (
    <div className={inView ? 'band band--zoom' : 'band'} key={props.obj.link} ref={ref}>
      <Video
        src={props.obj.link}
        title={props.obj.name}
      />
    </div>
  )
}