import s from './house-calc.module.css';

type Props = {
  sourceImg: string,
  count: number,
}

export function CalcCountImage(props: Props): JSX.Element | null {
  if (props.count !== 0) {
    return (
      <div className={s.roofItem}>
        <img src={props.sourceImg} alt='' />
        <div>{`Количество: ${props.count}`}</div>
      </div>
    )
  }

  return null;
}