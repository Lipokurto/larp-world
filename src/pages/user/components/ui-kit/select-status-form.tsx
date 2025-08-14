import React from 'react';
import ContentLoader from 'react-content-loader'

import s from './input-form.module.scss'

type Props = {
  label: string,
  name: string,
  value: string,
  disabled: boolean,
  isLoading: boolean,
  onSelectChange?: (item: any) => void,
  isFloat?: boolean,
  error?: string,
}

export function SelectStatusForm(props: Props): JSX.Element {
  const renderElement = React.useMemo(() => {
    if (props.disabled) {
      if (props.value === '0.5') {
        return (
          <div className={s.inputOff}>
            Условно
          </div>
        )
      }

      return(
        <div className={s.inputOff}>
          {props.value === '1' ? 'Есть' : 'Нет'}
        </div>
      )
    }

  return (
    <select
      name={props.name}
      className={s.inputOn}
      value={props.value}
      onChange={props.onSelectChange}
      disabled={props.disabled}
    >
      <option value='0'>Нет</option>
      {props.isFloat && <option value='0.5'>Условно</option>}
      <option value='1'>Есть</option>
    </select>
    )
  }, [props]);

  const renderContent = React.useMemo(() => {
    if (props.isLoading) {
      return (
        <ContentLoader
          speed={1}
          width={180}
          height={25}
          backgroundColor="#000000"
          foregroundColor="#a39329"
        >
          <rect x="0" y="0" rx="5" ry="5" width="180" height="25" />
        </ContentLoader>
      );
    }

    return (
      <>
        {renderElement}
      </>
    )
  }, [props]);

  return (
    <div className={s.container}>
      <div className={s.label}>{props.label}</div>
      {renderContent}
    </div>
  );
}