import React from "react";

import { GlobalTimer } from './timer';
import { useResize } from "../utils/use-resize";

import dividerLeft from '../../assets/icons/divider-left.svg';
import dividerRight from '../../assets/icons/divider-right.svg';

import s from './chapter.module.css';

type Props = {
  chapter: string,
}

export function Chapter(props: Props): JSX.Element {
  const [isActive, setIsActive] = React.useState<boolean>(false);
  const { width } = useResize();

  return (
    <div className={s.chapter_container}>
      {width >= 1024 && (
        <div
          className={s.timer}
          style={{marginLeft: isActive ? '-200px' : '-50px' }}
          onMouseOver={() => setIsActive(true)}
          onMouseLeave={() => setIsActive(false)}  
        >
          <GlobalTimer isActive={isActive} />
        </div>
      )}
      
      <div className={s.divider}>
        <img src={dividerLeft} alt='Divider' width='150'/>
      </div>

      <h1 className={s.chapter}>{props.chapter}</h1>

      <div className={s.divider}>
        <img src={dividerRight} alt='Divider' width='150'/>
      </div>
    </div>
  )
}