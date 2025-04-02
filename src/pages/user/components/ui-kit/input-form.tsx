import React from 'react';
import ContentLoader from 'react-content-loader'
import Tooltip from 'react-tooltip-lite';

import s from './input-form.module.scss'

type Props = {
  label: string,
  type: string,
  value: string,
  name: string,
  disabled?: boolean,
  isLoading?: boolean,
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
  error?: string,
}

export function InputForm(props: Props): JSX.Element {
  const renderElement = React.useMemo(() => {
    if (props.disabled) {
      return(
        <div className={s.inputOff}>
          {props.value}
        </div>
      )
    }

  return (
    <Tooltip
      isOpen={Boolean(props.error)}
      content={props.error}
      background='pink'
      direction='left'
    >
      <input
        className={s.inputOn}
        type={props.type}
        name={props.name}
        placeholder={props.name === 'birthDate' ? 'ДД.ММ.ГГГГ' : undefined}
        value={props.value}
        onChange={props.onChange}
        disabled={props.disabled}
      />
    </Tooltip>
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