import React from 'react';
import { IoIosCheckbox, IoIosRemoveCircle } from 'react-icons/io';

import s from './input-form.module.scss';

type Props = {
  label: string,
  status: boolean,
}

export function StatusBar(props: Props): JSX.Element {
  const statusText = React.useMemo(() => {
    return props.status
    ? <IoIosCheckbox style={{ color: 'green' }} />
    : <IoIosRemoveCircle style={{ color: 'red' }} />;
  }, [props]);

return (
  <div className={s.statusContainer}>
    <div className={s.label}>{props.label}</div>
    <div className={s.status}>{statusText}</div>
  </div>
)
}