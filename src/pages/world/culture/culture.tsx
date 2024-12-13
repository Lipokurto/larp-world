import React from "react";

import { Chapter, AccordionBlock, LinkButton, ItemModal } from "../../../components";

import { 
  midens, midensFasionHigh, midensFasionNorm,
  north, northFasionHigh, northFasionNorm,
  south, southFasionHigh, southFasionNorm,
} from "../../../rules-text/examples/nation";

import {
  ancestors, clearedByBlood, politeism,
  throne,
} from "../../../rules-text/examples/religion";

import { Item } from "../../../rules-text/type";

import s from './culture.module.css';

export function Culture(): JSX.Element {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const [item, setItem] = React.useState<Item | null>(null);

  const handleClick = React.useCallback((item: Item) => {
    setItem(item);
    setIsOpen(true);
  }, []);

  return (
    <>
      <div className={s.container}>
        <Chapter chapter='КУЛЬТУРА' />
        <AccordionBlock
          label='Народность'
          items={[
            {
              label: 'Мединцы',
              element:
                <>
                  {midens.element}
                  <div className={s.fasion_container}>
                    <h3><LinkButton text={midensFasionNorm.label} onclick={() => handleClick(midensFasionNorm)} /></h3>
                    <h3><LinkButton text={midensFasionHigh.label} onclick={() => handleClick(midensFasionHigh)} /></h3>
                  </div>
                </>
            },
            {
              label: 'Южане',
              element:
                <>
                  {south.element}
                  <div className={s.fasion_container}>
                    <h3><LinkButton text={southFasionNorm.label} onclick={() => handleClick(southFasionNorm)} /></h3>
                    <h3><LinkButton text={southFasionHigh.label} onclick={() => handleClick(southFasionHigh)} /></h3>
                  </div>
                </>
            },
            {
              label: 'Северяне',
              element:
                <>
                  {north.element}
                  <div className={s.fasion_container}>
                    <h3><LinkButton text={northFasionNorm.label} onclick={() => handleClick(northFasionNorm)} /></h3>
                    <h3><LinkButton text={northFasionHigh.label} onclick={() => handleClick(northFasionHigh)} /></h3>
                  </div>
                </>
            },
          ]}
        />

        <AccordionBlock
          label='Религия'
          items={[
            {
              label: 'Святой престол',
              element: <>{throne.element}</>
            },
            {
              label: 'Политеизм',
              element: <>{politeism.element}</>
            },
            {
              label: 'Культ предков',
              element: <>{ancestors.element}</>
            },
            {
              label: 'Очищенные кровью',
              element: <>{clearedByBlood.element}</>
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