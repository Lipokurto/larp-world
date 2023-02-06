import React from "react";

import { Logo } from "../../components/logo";
import { Band } from "./band";
import { bands } from "./bands";

import s from './main.module.css';

export function Main() {

  return (
    <div className={s.container}>
      <div className={s.logo}>
        <Logo />
      </div>

      <div className={s.bandsContainer}>
        {bands.map((e) => {
          return (
            <div key={e.description}>
              <Band band={e} />
            </div>
          )
        })}
      </div>
    </div>
  )
}