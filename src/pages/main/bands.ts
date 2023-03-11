import band from '../../assets/bands/band.jpg';
import { BandItem, StatusBand } from './type';

export const bands: BandItem[] = [
  {
    image: band,
    title: 'Незнакомцы',
    status: StatusBand.free,
    capitan: 'Гер фон Безимянный',
    description: 'банада широко извесна своей неизвесностью и безимянностью',
    contact: 'link to band',
  },
  {
    image: band,
    title: 'Орден святой буловы',
    status: StatusBand.order,
    capitan: 'Брат Круглолицый',
    description: 'Первая запеведь ордена является святость кругов',
    contact: 'link to band',
  },
  {
    image: band,
    title: 'Осьминоги',
    status: StatusBand.hired,
    capitan: 'Афдотий Троянский',
    description: 'Сухопутные пираты, ведь тут нет кораблей',
    contact: 'link to band',
  },
  {
    image: band,
    title: 'Рыцари святого пламени',
    status: StatusBand.order,
    capitan: 'Йорпин Пылающий',
    description: 'Выжечь зло - единсвенно верный путь',
    contact: 'link to band',
  },
] 