import { AssaultBattleCalc, useResize } from '../../../components';

import s from './assault-calc.module.css';

export function AssaultCalc(): JSX.Element {
  const { width } = useResize();

  if (width >= 650) {
    return (
      <div className={s.container}>
        <AssaultBattleCalc />
      </div>
    )
  }

  return (
    <div className={s.container}>
      Визуализация данного элемента доступна только при ширине окна не менее 650 пикселей
    </div>
  )
}