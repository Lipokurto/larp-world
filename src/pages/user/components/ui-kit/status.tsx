import React from 'react';
import { IoIosCheckbox, IoIosRemoveCircle } from 'react-icons/io';

import s from './input-form.module.scss';

export function renderStatusIcon(status: boolean): JSX.Element {
  return status
  ? <IoIosCheckbox style={{ color: 'green' }} />
  : <IoIosRemoveCircle style={{ color: 'red' }} />;
}

type Props = {
  label: string,
  status: boolean,
}

export function StatusBar(props: Props): JSX.Element {
  const statusText = React.useMemo(() => renderStatusIcon(props.status), [props]);

return (
  <div className={s.statusContainer}>
    <div className={s.label}>{props.label}</div>
    <div className={s.status}>{statusText}</div>
  </div>
)
}