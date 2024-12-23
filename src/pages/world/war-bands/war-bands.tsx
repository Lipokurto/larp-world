import { AccordionBlock, Chapter } from '../../../components';

import {
  bear, chainsOrder, holyPoor,
  outlanders,
} from '../../../war-bands';

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
            label: outlanders.label,
            element: outlanders.element,
          },

        ]}
      />
    </div>
  )
}