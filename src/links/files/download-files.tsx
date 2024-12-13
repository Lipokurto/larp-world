import { Link } from "../types";
// import rulesPDF from './rules.pdf';
import tailorPDF from './tailor.pdf';
import mapClear from '../../assets/map/clear-map.jpg';

export const downloadFiles: Link[] = [
  // {
  //   name: 'Правила одним файлом',
  //   link: rulesPDF,
  //   description: 'Вся компиляция правил одним файлом',
  //   fileName: 'Правила Темные века',
  // },
  {
    name: 'Карта Континента',
    link: mapClear,
    description: 'Карта Континента на котором разворачиваются действия мероприятия',
    fileName: 'Карта Континента',
  },
  {
    name: 'Книга по средневековому пошиву одежды',
    link: tailorPDF,
    description: 'Много выкроек, много деталей одежды, много тонкостей пошива, рекомендуем всем кто хочет погрузится в тематику',
    fileName: 'Подмастерье средневекового портного',
  },
] 