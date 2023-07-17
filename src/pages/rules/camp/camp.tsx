import React from "react";

import { Chapter, AccordionBlock } from "../../../components";
import { Location } from "./location";

import s from './camp.module.css';

export function Camp(): JSX.Element {
  return (
    <div className={s.container}>
      <Chapter chapter='Локация' />

      <Location />
    </div>
  )
}