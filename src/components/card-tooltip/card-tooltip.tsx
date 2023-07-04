import Tooltip from "react-tooltip-lite";

type Props = {
  cardName: string,
  src: string,
  width? : number,
}

export function CardTooltip(props: Props): JSX.Element {
  return (
    <Tooltip
      content={<img src={props.src} alt='' width={props.width || 200} />}
      background='wheat'
    >
      <div style={{ textDecoration: 'underline' }}>{props.cardName}</div>
    </Tooltip>
  )
}