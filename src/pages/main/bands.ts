import band from '../../assets/bands/band.jpg';
import { BandItem, StatusBand } from './type';

export const bands: BandItem[] = [
  {
    image: band,
    title: 'Незнакомцы',
    status: StatusBand.free,
    capitan: 'Гер фон Безымянный',
    description: 'банда широко известна своей неизвестностью и безымянностью',
    contact: 'link to band',
  },
  {
    image: band,
    title: 'Орден святой булавы',
    status: StatusBand.order,
    capitan: 'Брат Круглолицый',
    description: 'Первая заповедь ордена является святость кругов',
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
    description: 'Выжечь зло - единственно верный путь',
    contact: 'link to band',
  },
] 