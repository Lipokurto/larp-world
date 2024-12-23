import React from 'react';
import Tooltip from 'react-tooltip-lite';

type Props = {
  cardName: string,
  src: string,
  width? : number,
}

export function CardTooltip(props: Props): JSX.Element {
  const renderContent = React.useMemo(() => {
    if (props.cardName === 'Спина') {
      return <div>Защищена ли ваша спина броней?</div>
    }

    return <img src={props.src} alt='' width={props.width || 200} />
  }, [props.cardName, props.src, props.width]);

  return (
    <Tooltip
      content={renderContent}
      background='wheat'
    >
      <div style={{ textDecoration: 'underline' }}>{props.cardName}</div>
    </Tooltip>
  )
}