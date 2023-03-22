import { BattleCalc } from '../../../components';

import s from './final-calc.module.css';

export function FinalCalc(): JSX.Element {
  return (
    <div className={s.container}>
      <BattleCalc />
    </div>
  )
}