import Tooltip from "react-tooltip-lite";

type Props = {
  cardName: string,
  src: string,
}

export function CardTooltip(props: Props): JSX.Element {
  return (
    <Tooltip
      content={<img src={props.src} alt='' width={200} />}
      background='wheat'
    >
      <div style={{ textDecoration: 'underline' }}>{props.cardName}</div>
    </Tooltip>
  )
}