import React from 'react';
import ContentLoader from 'react-content-loader'

import { LocationItem } from '../../type';
import { getLocationNameById } from '../../utils/get-location-name-by-id';

import s from './input-form.module.scss'

function Options(props: {
    locationList: LocationItem[],
    isAdmin?: boolean,
  }): JSX.Element {
  const { locationList, isAdmin } = props;

  const camps = locationList.filter(p => p.type === 'CAMP');
  const city = locationList.filter(p => p.type === 'CITY');
  const secrets = locationList.filter(p => p.type === 'SECRET');

  return (
    <>
      <option disabled value='0' hidden>Выберите локацию</option>
      <optgroup label="Военные лагеря">
        {camps.map(p => <option value={p.id} key={p.id}>{p.name}</option>)}
      </optgroup>

      <optgroup label="Город Камельн">
        {city.map(p => <option value={p.id} key={p.id}>{p.name}</option>)}
      </optgroup>

      {isAdmin && (
        <optgroup label="Скрытые локации">
          {secrets.map(p => <option value={p.id} key={p.id}>{p.name}</option>)}
        </optgroup>
      )}
    </>
  )
}

type Props = {
  label: string,
  name: string,
  value: string,
  locationsList?: LocationItem[],
  isLoading?: boolean,
  disabled?: boolean,
  onSelectChange?: (item: any) => void,
  error?: string,
  isAdmin?: boolean,
  options?: JSX.Element,
}

export function SelectForm(props: Props): JSX.Element {
  const renderElement = React.useMemo(() => {
    if (props.disabled) {
      return(
        <div className={s.inputOff}>
          {props.locationsList ? getLocationNameById(Number(props.value)) : props.value}
        </div>
      )
    }

  return (
    <select
      name={props.name}
      className={s.inputOn}
      value={props.value || '0'}
      onChange={props.onSelectChange}
      disabled={props.disabled}
      placeholder='Выберите локацию'
    >
      {props.options || (props.locationsList ? <Options locationList={props.locationsList} isAdmin={props.isAdmin} /> : null)}
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