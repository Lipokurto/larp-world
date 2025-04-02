import React from 'react';
import ContentLoader from 'react-content-loader'

import s from './input-form.module.scss'

function DefaultOptions(): JSX.Element {
  return (
    <>
      <optgroup label="Военные лагеря">
        <option value="" disabled selected hidden>Выберите локацию</option>
        <option value='Престольский лагерь'>Престольский лагерь</option>
        <option value='Кушанский лагерь'>Кушанский лагерь</option>
      </optgroup>
      <optgroup label="город Камельн">
        <option value='Верхний квартал'>Верхний квартал</option>
        <option value='Торговый квартал'>Торговый квартал</option>
        <option value='Восточный квартал'>Восточный квартал</option>
        <option value='Церковный квартал'>Церковный квартал</option>
      </optgroup>
    </>
  )
}

type Props = {
  label: string,
  name: string,
  value: string,
  isLoading?: boolean,
  disabled?: boolean,
  onSelectChange?: (item: any) => void,
  error?: string,
  options?: JSX.Element,
}

export function SelectForm(props: Props): JSX.Element {
  const renderElement = React.useMemo(() => {
    if (props.disabled) {
      return(
        <div className={s.inputOff}>
          {props.value}
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
      placeholder='Выберите локацию'
    >
      {props.options || <DefaultOptions />}
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