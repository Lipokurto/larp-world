import { BuildLevel } from './build-level';

import s from './build-calc.module.css';

export function BuildCalc(): JSX.Element {
  return (
    <div className={s.container}>
      <BuildLevel />
    </div>
  );
}