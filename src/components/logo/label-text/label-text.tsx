import blood from '../../../assets/blood.svg';

import s from './label-text.module.css';

export function LabelText(): JSX.Element {
  return (
    <div className={s.container}>
      <img className={s.blood} src={blood} alt="Blood" />

      <span className={s.labelText}>Темные<br />века</span>

      <span className={s.labelSubtext}>полигонная ролевая игра</span>
    </div>
  )
}