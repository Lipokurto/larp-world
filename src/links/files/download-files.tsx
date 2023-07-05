import { Link } from "../types";
import rulesPDF from './rules.pdf';
import mapClear from './clear-map.png';

export const downloadFiles: Link[] = [
  {
    name: 'Правила одним файлом',
    link: rulesPDF,
    description: 'Вся компиляция правил одним файлом',
    fileName: 'Правила Темные века',
  },
  {
    name: 'Карта Континента',
    link: mapClear,
    description: 'Карта Континента на котором разворачиваются действия мероприятия',
    fileName: 'Карта Континента',
  },
] 