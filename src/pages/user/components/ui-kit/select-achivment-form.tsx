import React from 'react';
import ContentLoader from 'react-content-loader'
import s from './input-form.module.scss'

type Props = {
  label: string,
  name: string,
  value: string,
  isLoading?: boolean,
  onSelectChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void,
  options: JSX.Element,
}

export function SelectAchivmentForm(props: Props): JSX.Element {
  if (props.isLoading) {
    return (
      <div className={s.container}>
        <div className={s.label}>{props.label}</div>
        <ContentLoader
          speed={1}
          width={180}
          height={25}
          backgroundColor="#000000"
          foregroundColor="#a39329"
        >
          <rect x="0" y="0" rx="5" ry="5" width="180" height="25" />
        </ContentLoader>
      </div>
    );
  }

  return (
    <div className={s.container}>
      <div className={s.label}>{props.label}</div>
      <select
        name={props.name}
        className={s.inputOn}
        value={props.value}
        onChange={props.onSelectChange}
        placeholder='Выберите достижение'
      >
        {props.options}
      </select>
    </div>
  );
}