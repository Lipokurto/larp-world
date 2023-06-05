import { AccordionBlock, Chapter } from "../../../components";

import {
  chainsOrder, dogsOrder, dragonsOrder, heatOrder, ramOrder,
  rhinoOrder, ternsOrder, tigersOrder,
} from "../../../orders";

import s from './order.module.css';

export function Order(): JSX.Element {
  return (
    <div className={s.container}>
      <Chapter chapter='Рыцарские ордена' />
      
      <div>
        <i>Рыцарские ордена распространены по всему континенту и имеют свою символику, атрибутику и кодекс</i>
        <br />
        <i>Если вы хотите придумать свой орден, то следует согласовать это с мастерами</i>
      </div>

      <AccordionBlock
        label='Знаменитые рыцарские ордена'
        items={[
          {
            label: ramOrder.label,
            element: ramOrder.element,
          },
          {
            label: rhinoOrder.label,
            element: rhinoOrder.element,
          },
          {
            label: dragonsOrder.label,
            element: dragonsOrder.element,
          },
          {
            label: tigersOrder.label,
            element: tigersOrder.element,
          },
          {
            label: chainsOrder.label,
            element: chainsOrder.element,
          },
          {
            label: dogsOrder.label,
            element: dogsOrder.element,
          },
          {
            label: ternsOrder.label,
            element: ternsOrder.element,
          },
          {
            label: heatOrder.label,
            element: heatOrder.element,
          },
        ]}
      />
    </div>
  )
}