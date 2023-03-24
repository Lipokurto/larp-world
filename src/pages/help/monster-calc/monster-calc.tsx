import React from 'react';

import { BeastCalc } from '../../../components';

import s from './monster-calc.module.css';

export function MonsterCalc(): JSX.Element {
  const [isManual, setIsManual] = React.useState<boolean>(false);

  const manualButton = React.useMemo(() => {
    const buttonText = isManual ? 'Спрятать подсказки' : 'Показать подсказки';

    return <button style={{margin: '10px 10px 10px 10px'}} onClick={() =>setIsManual(!isManual)}>{buttonText}</button>
  }, [isManual]);

  return (
    <div className={s.container}>
      {manualButton}

      <BeastCalc isManual={isManual}/>
    </div>
  )
}