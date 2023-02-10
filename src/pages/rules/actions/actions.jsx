import React from "react";

import { ItemModal, LinkButton } from "../../../components";
import { tithe, assault, search, prison, ransom, pray, fire, globalPray, eat, ham } from "../../../rules-text/actions";

import s from './actions.module.css';

export function Actions() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [item, setItem] = React.useState(null);

  const handleClick = React.useCallback((item) => {
    setItem(item);
    setIsOpen(true);
  }, []);

  return (
    <>
      <div className={s.container}>
        <h1>Игровые действия</h1>
        <div className={s.block}>
          <h2><LinkButton text='Церковная десятина' hint={tithe.hint} onclick={() => handleClick(tithe)}/></h2>
        </div>

        <div className={s.block}>
          <h2><LinkButton text='Штурм лагеря' hint={assault.hint} onclick={() => handleClick(assault)}/></h2>
        </div>

        <div className={s.block}>
          <h2><LinkButton text='Обыск лагеря' hint={search.hint} onclick={() => handleClick(search)}/></h2>
        </div>

        <div className={s.block}>
          <h2><LinkButton text='Пленение' hint={prison.hint} onclick={() => handleClick(prison)}/></h2>
        </div>

        <div className={s.block}>
          <h2><LinkButton text='Выкуп пленника' hint={ransom.hint} onclick={() => handleClick(ransom)}/></h2>
        </div>

        <div className={s.block}>
          <h2><LinkButton text='Молитва' hint={pray.hint} onclick={() => handleClick(pray)}/></h2>
        </div>

        <div className={s.block}>
          <h2><LinkButton text='Вселенская молитва' hint={globalPray.hint} onclick={() => handleClick(globalPray)}/></h2>
        </div>

        <div className={s.block}>
          <h2><LinkButton text='Отчищение огнем' hint={fire.hint} onclick={() => handleClick(fire)}/></h2>
        </div>

        <div className={s.block}>
          <h2><LinkButton text='Пожирание' hint={eat.hint} onclick={() => handleClick(eat)}/></h2>
        </div>

        <div className={s.block}>
          <h2><LinkButton text='Заключение в темницу' hint={ham.hint} onclick={() => handleClick(ham)}/></h2>
        </div>
      </div>

      {isOpen && (
        <ItemModal
          setIsOpen={setIsOpen}
          text={item}
        />
      )}
    </>
  )
}