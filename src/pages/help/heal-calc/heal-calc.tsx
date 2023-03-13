import { DamageCalc } from './damage-calc';

import s from './heal-calc.module.css';

export function HealCalc(): JSX.Element {
  return (
    <div className={s.container}>
      <DamageCalc />
    </div>
  )
}