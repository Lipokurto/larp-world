import { BeastCalc } from '../../../components';

import s from './monster-calc.module.css';

export function MonsterCalc(): JSX.Element {
  return (
    <div className={s.container}>
      <BeastCalc />
    </div>
  )
}