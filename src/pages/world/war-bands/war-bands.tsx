import { AccordionBlock, Chapter } from "../../../components";

import {
  axes, bear, blades,
  chainsOrder, dogs, holyPoor,
  knights, outlanders,
} from "../../../war-bands";

import s from './war-bands.module.css';

export function WarBands(): JSX.Element {
  return (
    <div className={s.container}>
      <Chapter chapter='Отряды' />
      
      <div>
        <i>Тут перечислены все отряды воинов, которые могут принять участие в текущих событиях вокруг города Солем.</i>
      </div>

      <AccordionBlock
        label='Наемники королевства Мидленд'
        items={[
          {
            label: blades.label,
            element: blades.element,
          },
          {
            label: axes.label,
            element: axes.element,
          },
          {
            label: holyPoor.label,
            element: holyPoor.element,
          },
        ]}
      />

      <AccordionBlock
        label='Наемники империи Тюдор'
        items={[
          {
            label: bear.label,
            element: bear.element,
          },
          {
            label: outlanders.label,
            element: outlanders.element,
          },
          {
            label: knights.label,
            element: knights.element,
          },
        ]}
      />

      <AccordionBlock
        label='Нейтральные отряды'
        items={[
          {
            label: chainsOrder.label,
            element: chainsOrder.element,
          },
          {
            label: dogs.label,
            element: dogs.element,
          },
        ]}
      />
    </div>
  )
}