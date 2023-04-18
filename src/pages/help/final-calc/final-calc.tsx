import { BattleCalc, useResize } from '../../../components';

import s from './final-calc.module.css';

export function FinalCalc(): JSX.Element {
  const { width } = useResize();
  
  if (width >= 800) {
    return (
      <div className={s.container}>
        <BattleCalc />
      </div>
    )
  }
  
  return (
    <div className={s.container}>
      Визуализация данного элемента доступна только при ширине окна не менее 800 пикселей
    </div>
  )
}