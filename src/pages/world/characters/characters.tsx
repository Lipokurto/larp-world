import React from "react";

import { Chapter, AccordionBlock, LinkButton, ItemModal } from "../../../components";

import { 
  captain, fighter, inquisitor,
  quartermaster, executor, priest,
  civil, craftsman, nobleman,
  merchant,
} from "../../../rules-text/examples/characters";

import { 
  midens, midensFasionHigh, midensFasionNorm,
  north, northFasionHigh, northFasionNorm,
  south, southFasionHigh, southFasionNorm,
} from "../../../rules-text/examples/nation";

import { ancestors, politeism, throne } from "../../../rules-text/examples/religion";
import { Item } from "../../../rules-text/type";

import s from './characters.module.css';

export function Characters(): JSX.Element {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const [item, setItem] = React.useState<Item | null>(null);

  const handleClick = React.useCallback((item: Item) => {
    setItem(item);
    setIsOpen(true);
  }, []);

  return (
    <>
      <div className={s.container}>
        <Chapter chapter='ПЕРСОНАЖИ' />

        
        <AccordionBlock
          label='Люди'
          items={[
            {
              label: 'Архетипы',
              element:
                <>
                  <div>Перечисленные ниже персонажи-люди подчиняются общим правилам и не имеют особых преимуществ</div>
                    
                    <li><LinkButton text='Капитан' onclick={() => handleClick(captain)} /> Опытный игрок готовы собрать и организовать бойцов для выполнения различных задач</li>
                    <li><LinkButton text='Интендант' onclick={() => handleClick(quartermaster)} /> Опытный игрок, выполняющий функции локального мастера</li>
                    <li><LinkButton text='Боец' onclick={() => handleClick(fighter)} /> Игрок желающий повоевать в составе команды</li>

                    <li><LinkButton text='Инквизитор' onclick={() => handleClick(inquisitor)} /> Опытный игрок желающий отыграть принципиально верующего, для которого жизнь лишь метод оправдать загробное существование</li>
                    <li><LinkButton text='Палач' onclick={() => handleClick(executor)} /> Может быть как классическим паладином света и добра, так и реалистичным крестоносцем, который легко мог в голодные годы сожрать соседа</li>
                    <li><LinkButton text='Священник' onclick={() => handleClick(priest)} /> Опытный игрок в ораторском искусстве</li>

                    <li><LinkButton text='Простолюдин' onclick={() => handleClick(civil)} /> Игрок желающий отыгрывать простолюдина разного достатка и прошлого</li>
                    <li><LinkButton text='Ремесленник' onclick={() => handleClick(craftsman)} /> Игрок готовы играть в экономику и понимающий ее принципы</li>
                    <li><LinkButton text='Аристократ' onclick={() => handleClick(nobleman)} /> Игрок любитель социальных взаимодействий, готовый при помощи слов и своего влияния продвигать интересы выбранной державы</li>
                    <li><LinkButton text='Торговец' onclick={() => handleClick(merchant)} /> Игрок готовый толкать экономику, используя в качестве оружия слово, информацию и отличные знания экономики</li>
                </>
            },
          ]}
        />

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