import { HitsCalc } from '../../../components';

import s from './char-calc.module.css';

export function CharCalc(): JSX.Element {
  return (
    <div className={s.container}>
      <HitsCalc />
    </div>
  );
}