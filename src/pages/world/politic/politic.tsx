import { AccordionBlock, Chapter } from '../../../components';

import {
  baldenHistory, grantHistory, holyHistory,
  isKingdomHistory, kushanHistory, midlendHistory,
  morgarHistory, paneriaHistory, randelHistory,
  tudorHistory, vallatoriaHistory,
} from '../../../history';

import s from './politic.module.css';

export function Politic(): JSX.Element {
  return (
    <div className={s.container}>
      <Chapter chapter='ПОЛИТИКА' />

      <div>
        <i>Все мероприятие строится вокруг подготовки лагерей к битве. По факту вся игра - это несколько дней до начала битвы в которой каждая из стороны пытается занять более выгодные позиции на политической и тактической карте, в то время как простые крестьяне пытаются просто выжить</i>
        <br />
        <i>Все что описано ниже является общими знаниями почти любого персонажа</i>
        <br />
      </div>

      <AccordionBlock
        label='Крупнейшие государства континента'
        items={[
          {
            label: midlendHistory.label,
            element: midlendHistory.element,
          },
          {
            label: tudorHistory.label,
            element: tudorHistory.element,
          },
          {
            label: baldenHistory.label,
            element: baldenHistory.element,
          },
          {
            label: isKingdomHistory.label,
            element: isKingdomHistory.element,
          },
          {
            label: randelHistory.label,
            element: randelHistory.element,
          },
          {
            label: grantHistory.label,
            element: grantHistory.element,
          },
          {
            label: morgarHistory.label,
            element: morgarHistory.element,
          },
          {
            label: vallatoriaHistory.label,
            element: vallatoriaHistory.element,
          },
          {
            label: kushanHistory.label,
            element: kushanHistory.element,
          },
          {
            label: paneriaHistory.label,
            element: paneriaHistory.element,
          },
          {
            label: holyHistory.label,
            element: holyHistory.element,
          },
        ]}
      />
    </div>
  )
}