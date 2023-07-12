import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Video, useResize } from '../../components';
import { Link } from '../../links/types';

import './sub-menu.css';

type Props = {
  obj: Link
};

export function SubMenu(props: Props): JSX.Element {
  const { width } = useResize();
  const { ref, inView } = useInView({
    threshold: 0.4,
  });
  
  return (
    <div className={inView ? 'sub sub--zoom' : 'sub'} key={props.obj.link} ref={ref}>
      <Video
        src={props.obj.link}
        title={props.obj.name}
        width={width < 720 ? 360 : undefined}
      />

      <div className='sub-text'>{props.obj.description}</div>
    </div>
  )
}