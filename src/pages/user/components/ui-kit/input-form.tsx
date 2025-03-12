import React from 'react';
import dayjs from 'dayjs';
import ContentLoader from 'react-content-loader'

import s from './input-form.module.scss'

type Props = {
  label: string,
  type: string,
  value: string,
  name: string,
  disabled: boolean,
  isLoading: boolean,
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
  error?: string,
}

export function InputForm(props: Props): JSX.Element {
  // TODO Прикрутить tooltip на ошибку
  const renderElement = React.useMemo(() => {
    if (props.disabled) {
      return(
        <div className={s.inputOff}>
          {props.name === 'birthDate' ? dayjs(props.value).format('DD.MM.YYYY') : props.value}
        </div>
      )
    }

    return (
      <input
        className={s.inputOn}
        type={props.type}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        disabled={props.disabled}
      />
    )
  }, [props]);

  const renderError = React.useMemo(() => {
    if (props.error) {
      return <div style={{ color: 'red' }}>{props.error}</div>
    }
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
        {renderError}
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