import { AccordionBlock, Chapter } from "../../../components";

import {
  burgomaster, office, traders,
  science, smiths, fishers,
  miners, hospital, show,
  church, militia, esoteric,
  gravamens, peasants, workers, 
} from "../../../rules-text/roles";

import s from './people.module.css';

export function People(): JSX.Element {
  return (
    <div className={s.container}>
      <Chapter chapter='ЖИТЕЛИ ГОРОДА' />

      <AccordionBlock
        label="Верхний квартал"
        items={[
          {
            label: `${burgomaster.label} (${burgomaster.count} чел.)`,
            element: burgomaster.element,
          },
          {
            label: `${office.label} (до ${office.count} чел.)`,
            element: office.element,
          },
          {
            label: `${traders.label} (до ${traders.count} чел.)`,
            element: traders.element,
          },
          {
            label: `${science.label} (до ${science.count} чел.)`,
            element: science.element,
          },
        ]}
      />

      <AccordionBlock
        label="Ремесленный квартал"
        items={[
          {
            label: `${smiths.label} (до ${smiths.count} чел.)`,
            element: smiths.element,
          },
          {
            label: `${fishers.label} (до ${fishers.count} чел.)`,
            element: fishers.element,
          },
          {
            label: `${miners.label} (до ${miners.count} чел.)`,
            element: miners.element,
          },
          {
            label: workers.label,
            element: workers.element,
          },
        ]}
      />

      <AccordionBlock
        label="Нижний квартал"
        items={[
          {
            label: `${hospital.label} (до ${hospital.count} чел.)`,
            element: hospital.element,
          },
          {
            label: `${show.label} (до ${show.count} чел.)`,
            element: show.element,
          },
          {
            label: `${church.label} (до ${church.count} чел.)`,
            element: church.element,
          },
          {
            label: `${militia.label} (до ${militia.count} чел.)`,
            element: militia.element,
          },
          {
            label: `${esoteric.label} (до ${esoteric.count} чел.)`,
            element: esoteric.element,
          },
          {
            label: `${gravamens.label} (до ${gravamens.count} чел.)`,
            element: gravamens.element,
          },
          {
            label: peasants.label,
            element: peasants.element,
          },
        ]}
      />
      
    </div>
  )
}