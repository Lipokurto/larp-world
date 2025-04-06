import s from './input-form.module.scss'

type Props = {
  label: string,
  value: string,
}

export function Statistic(props: Props): JSX.Element {
  return (
    <div className={s.statisticContainer}>
      <div style={{ fontSize: 15, textAlign: 'center' }}>{props.label}</div>
      <div>{props.value}</div>
    </div>
  )
}