import s from './assault-battle-calc.module.css';

type Props = {
  label: string,
  text: string,
  effect: string,
}

export function AssaultCard(props: Props): JSX.Element {
  return (
    <div className={s.cardContainer}>
      <div className={s.label}>{props.label}</div>
      <i>{props.text}</i>
      <div className={s.text}>{props.effect}</div>
    </div>
  )
}