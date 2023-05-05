type Props = {
  label: string,
  model: string,
  play: string,
}

export function CharStatus(props: Props): JSX.Element {
  return (
    <div>
      <div style={{fontWeight: 'bold', marginBottom: '5px', marginTop: '10px'}}>{props.label.toUpperCase()}</div>
      <div><i>Маркер: &nbsp;</i>{props.model}</div>
      <div><i>В игре: &nbsp;</i>{props.play}</div>
    </div>
  )
}