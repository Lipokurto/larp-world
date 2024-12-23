import s from './stat.module.css';

type Props = {
  label: string,
  model: string,
  play: string,
  img?: string,
}

export function CharStatus(props: Props): JSX.Element {
  return (
    <div className={s.statContainer}>
      <div style={{ fontWeight: 'bold', marginBottom: '5px', marginTop: '10px' }}>{props.label.toUpperCase()}</div>
      <div><i>Маркер: &nbsp;</i>{props.model}</div>
      <div><i>В игре: &nbsp;</i>{props.play}</div>
      {props.img ? <img src={props.img} alt='' width={150}/> : null}
    </div>
  )
}