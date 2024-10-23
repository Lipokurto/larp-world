import blood from '../../../assets/blood.svg';
import { useResize } from '../../utils/use-resize';

import s from './label-text.module.css';

export function LabelText(): JSX.Element {
  const { width } = useResize();

  return (
    <div className={s.container}>
      {width > 800 ? <img className={s.blood} src={blood} alt="Blood" /> : null}
      <span className={s.labelSubtext}>полигонная ролевая игра</span>
      <span className={s.labelText}>Темные<br />века</span>
      <span className={s.labelSubtextSub}>цена свободы</span>
    </div>
  )
}