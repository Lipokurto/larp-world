import React from 'react';
import { AiFillSound, AiOutlineSound } from 'react-icons/ai';

import { DamageCalc } from '../../../components';

import s from './heal-calc.module.css';

export function HealCalc(): JSX.Element {
  const [isManual, setIsManual] = React.useState<boolean>(false);
  const [isSoundOn, setIsSoundOn] = React.useState<boolean>(true);

  const manualButton = React.useMemo(() => {
    const buttonText = isManual ? 'Спрятать подсказки' : 'Показать подсказки';

    return <button style={{ margin: '10px 10px 10px 10px' }} onClick={() =>setIsManual(!isManual)}>{buttonText}</button>
  }, [isManual]);

  const soundIcon = React.useMemo(() => {
    if (isSoundOn) {
      return <AiFillSound />
    }

    return <AiOutlineSound />
  }, [isSoundOn]);

  const soundButton = React.useMemo(() => {
    return <button style={{ margin: '10px 10px 10px 10px' }} onClick={() =>setIsSoundOn(!isSoundOn)}>{soundIcon}</button>
  }, [isSoundOn, soundIcon]);

  return (
    <div className={s.container}>
      <div>{manualButton} {soundButton}</div>

      <DamageCalc isManual={isManual} isSoundOn={isSoundOn}/>
    </div>
  )
}