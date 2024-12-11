import React from "react";

import { AccordionBlock, Chapter, ItemModal, PsyContainer } from '../../../components';
import { Item } from '../../../rules-text/type';

import {
  aggression,
  apathy, bloodthirsty, cowardice, critic, delusion,
  disgust, dreamer, egocentrism, fanatic,
  fatalism,
  gambler, hemophobia, joker, linguist,
  mystic, naive, neat,
  nobility, obtrusive, paranoia,
  shy,
  weakness,
  xenophobe, } from "../../../rules-text/psy";

import s from './psycho.module.css';

const level01 = [
  shy, paranoia,
  obtrusive, critic, joker,
  naive, linguist, apathy,
  delusion,
];

const level02 = [
  mystic, fanatic,
  neat, dreamer, gambler,
  nobility, disgust,
];

const level03 = [
  weakness, cowardice,
  aggression, egocentrism, hemophobia,
  fatalism, xenophobe, bloodthirsty
]

export function Psycho(): JSX.Element {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [item, setItem] = React.useState<Item | null>(null);

  const handleClick = React.useCallback((item: Item) => {
    setItem(item);
    setIsOpen(true);
  }, []);

  const level01List = React.useMemo(() => {
    return (
      <div className={s.psyContainer}>
        {level01.map((p) => {
          return (
            <PsyContainer
              label={p.label}
              psyLevel={p.psyLevel}
              desc={p.element}
            />
          )
        })}
      </div>
    )
  }, []);

  const level02List = React.useMemo(() => {
    return (
      <div className={s.psyContainer}>
        {level02.map((p) => {
          return (
            <PsyContainer
              label={p.label}
              psyLevel={p.psyLevel}
              desc={p.element}
            />
          )
        })}
      </div>
    )
  }, []);

  const level03List = React.useMemo(() => {
    return (
      <div className={s.psyContainer}>
        {level03.map((p) => {
          return (
            <PsyContainer
              label={p.label}
              psyLevel={p.psyLevel}
              desc={p.element}
            />
          )
        })}
      </div>
    )
  }, []);

  return (
    <>
      <div className={s.container}>
        <Chapter chapter='ПСИХОЗЫ' />
        <div>Психозы - это индикатор безумия вашего персонажа, отражающий последствия произошедших с ним событий.</div>
        <div className={s.listContainer}>
          <div>Психозы отмечаются в ДК, исключением считается мертвяк после действия <b>«Убить персонажа»</b>.</div>
          <div>Психозы не пропадают после мертвяка.</div>
          <div>Снимать психозы могут барды, представители. инквизиции и локации, предоставляющие услуги отдыха.</div>
          <div>Одновременно у игрока не может быть более одного психоза.</div>
          <div>На игрока всегда действует психоз высшего уровня.</div>
          <div>Психозы нельзя обменивать, демонстрировать описание или указывать как бы вы отыграли этот психоз.</div>
        </div>

        <div className={s.label}>Механика получения психоза</div>
        <div className={s.listContainer}>
          <div>Если у игрока до этого не было ни одного психоза, то при посещении мертвяка, он кидает кубик и в случае выпадения единицы тянет карту психоза в закрытую.</div>
          <div>Каждая последующая временная смерть добавляет вероятность получения психоза, к примеру умер второй раз то теперь для получения психоза достаточно выкинуть 1 или 2, умер третий раз - 1, 2, 3 и т.д.</div>
          <br />
          <div>Если у вас был психоз, то вы так же кидаете кубик, но тянете психоз из колоды психозов уровнем выше, заменяя текущий психоз новым.</div>
          <div>После получения психоза счетчик смертей сбрасывается до единицы, т.е. чтоб получить психоз в следующую смерть надо будет выкинуть единицу.</div>
          <br />
          <div>В случае получения карты <b>"Сожран"</b> или <b>"Прощение"</b>, персонаж испытывает больший стресс чем при обычной смерти, поэтому он кидает не один кубик а два и при выпадении на любом числа счетчика смертей - выдается психоз.</div>
        </div>

        <div className={s.label}>Способы избавится от психоза</div>
        <div className={s.listContainer}>
          <div>Известный бард может подарить вам свой <b>"Автограф"</b>.</div>
          <div>Персонаж может <b>"Отдохнуть"</b> в увеселительном заведении.</div>
          <div>Персонаж может <b>"Исповедаться"</b> у инквизитора.</div>
        </div>

        <AccordionBlock
          label="Список всех психозов"
          items={[
            {
              label: 'УРОВЕНЬ 1',
              element: level01List,
            },
            {
              label: 'УРОВЕНЬ 2',
              element: level02List,
            },
            {
              label: 'УРОВЕНЬ 3',
              element: level03List,
            },
          ]}
        />

      </div>

      {isOpen && (
        <ItemModal
          setIsOpen={setIsOpen}
          item={item}
        />
      )}
    </>
  )
}