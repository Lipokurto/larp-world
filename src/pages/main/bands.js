import band from '../../assets/bands/band.jpg';

const status = {
  free: 'Банда',
  hired: 'Наемники',
  order: 'Орден',
  inquisitors: 'Инквизиция',
  monsters: 'Чудовища',
  unknown: 'Неизвесно'
}

export const bands = [
  {
    image: band,
    title: 'Незнакомцы',
    status: status.free,
    capitan: 'Гер фон Безимянный',
    description: 'банада широко извесна своей неизвесностью и безимянностью',
    contact: 'link to band',
  },
  {
    image: band,
    title: 'Орден святой буловы',
    status: status.order,
    capitan: 'Брат Круглолицый',
    description: 'Первая запеведь ордена является святость кругов',
    contact: 'link to band',
  },
  {
    image: band,
    title: 'Осьминоги',
    status: status.hired,
    capitan: 'Афдотий Троянский',
    description: 'Сухопутные пираты, ведь тут нет кораблей',
    contact: 'link to band',
  },
  {
    image: band,
    title: 'Рыцари святого пламени',
    status: status.inquisitors,
    capitan: 'Йорпин Пылающий',
    description: 'Выжечь зло - единсвенно верный путь',
    contact: 'link to band',
  },
] 