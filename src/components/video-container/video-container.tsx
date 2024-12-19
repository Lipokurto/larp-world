import React from "react";

import { Video } from "../video/video";

import s from './video-container.module.css';

type Props = {
  link: string,
  name: string,
}

export function VideoContainer(props: Props) {
  return (
    <div className={s.container}>
      <Video
        src={props.link}
        title={props.name}
        height={150}
        width={250}
      />
      <div className={s.text}>{props.name}</div>
    </div>
  )
}