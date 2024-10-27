import text from '../../../assets/logo_text.png';

import s from './label-text.module.css';

export function LabelText(): JSX.Element {
  return (
    <div className={s.container}>
      <img className={s.text} src={text} alt='textLogo' />
    </div>
  )
}