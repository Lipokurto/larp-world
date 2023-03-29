import { Item } from "../../../rules-text/type";
import { campBuild } from "./text/camp-build";
import { campPlace } from "./text/camp-place";
import { camping } from "./text/camping";
import { hierarchy } from "./text/hierarchy";
import { life } from "./text/life";
import { politic } from "./text/politic";
import { race } from "./text/race";
import { team } from "./text/team";
import { warCamp } from "./text/war-camp";

type SupportItems = {
  coordinates: {
    q: boolean | number,
    s: boolean | number,
    r: boolean | number,
  },
  color: string,
  label: string,
  element: Item,
};

export const supportItems: SupportItems[] = [
  {
    coordinates: {
      q: 0,
      s: 1,
      r: -1,
    }, 
    color: 'red',
    label: 'Поход',
    element: {
      label: 'Поход',
      element: camping.element,
    },
  },
  {
    coordinates: {
      q: 0,
      s: 2,
      r: -2,
    }, 
    color: 'red',
    label: 'Стоянка',
    element: {
      label: 'Стоянка',
      element: campPlace.element,
    },
  },

  {
    coordinates: {
      q: 1,
      s: 1,
      r: -2,
    }, 
    color: 'gray',
    label: 'Строяк',
    element: {
      label: 'Строяк',
      element: campBuild.element,
    },
  },

  {
    coordinates: {
      q: 1,
      s: 0,
      r: -1,
    }, 
    color: 'yellow',
    label: 'Команда',
    element: {
      label: 'Команда',
      element: team.element,
    },
  },
  {
    coordinates: {
      q: 2,
      s: 0,
      r: -2,
    }, 
    color: 'yellow',
    label: 'Лагерь',
    element: {
      label: 'Лагерь',
      element: warCamp.element,
    },
  },

  {
    coordinates: {
      q: 2,
      s: -1,
      r: -1,
    }, 
    color: 'gray',
    label: 'Иерархия',
    element: {
      label: 'Иерархия',
      element: hierarchy.element,
    },
  },

  {
    coordinates: {
      q: 1,
      s: -1,
      r: 0,
    }, 
    color: 'springGreen',
    label: 'Народность',
    element: {
      label: 'Народность',
      element: race.element,
    },
  },
  {
    coordinates: {
      q: 2,
      s: -2,
      r: 0,
    }, 
    color: 'springGreen',
    label: 'Политика',
    element: {
      label: 'Политика',
      element: politic.element,
    },
  },

  {
    coordinates: {
      q: 1,
      s: -2,
      r: 1,
    }, 
    color: 'gray',
    label: 'Квесты',
    element: {
      label: 'Квесты',
      element: <div>POHOFD</div>
    },
  },

  {
    coordinates: {
      q: 0,
      s: -1,
      r: 1,
    }, 
    color: 'khaki',
    label: 'Боевка',
    element: {
      label: 'Боевка',
      element: <div>POHOFD</div>
    },
  },
  {
    coordinates: {
      q: 0,
      s: -2,
      r: 2,
    }, 
    color: 'khaki',
    label: 'Снаряжение',
    element: {
      label: 'Снаряжение',
      element: <div>POHOFD</div>
    },
  },

  {
    coordinates: {
      q: -1,
      s: -1,
      r: 2,
    }, 
    color: 'gray',
    label: 'Лечение',
    element: {
      label: 'Лечение',
      element: <div>POHOFD</div>
    },
  },

  {
    coordinates: {
      q: 0,
      s: -1,
      r: 1,
    }, 
    color: 'khaki',
    label: 'Быт',
    element: {
      label: 'Быт',
      element: <div>POHOFD</div>
    },
  },
  {
    coordinates: {
      q: -1,
      s: 0,
      r: 1,
    }, 
    color: 'orange',
    label: 'Экономика',
    element: {
      label: 'Экономика',
      element: <div>POHOFD</div>
    },
  },
  {
    coordinates: {
      q: -2,
      s: 0,
      r: 2,
    }, 
    color: 'orange',
    label: 'Постройка',
    element: {
      label: 'Постройка',
      element: <div>POHOFD</div>
    },
  },

  {
    coordinates: {
      q: -2,
      s: 1,
      r: 1,
    }, 
    color: 'gray',
    label: 'Расходники',
    element: {
      label: 'Расходники',
      element: <div>POHOFD</div>
    },
  },

  {
    coordinates: {
      q: -1,
      s: 1,
      r: 0,
    }, 
    color: 'cyan',
    label: 'Маршрут',
    element: {
      label: 'Маршрут',
      element: <div>POHOFD</div>
    },
  },
  {
    coordinates: {
      q: -2,
      s: 2,
      r: 0,
    }, 
    color: 'cyan',
    label: 'Вещи',
    element: {
      label: 'Отправка вещей',
      element: <div>POHOFD</div>
    },
  },

  {
    coordinates: {
      q: -1,
      s: 2,
      r: -1,
    }, 
    color: 'gray',
    label: 'Быт',
    element: {
      label: 'Быт',
      element: life.element,
    },
  },

  {
    coordinates: {
      q: 0,
      s: 0,
      r: 0,
    }, 
    color: 'white',
    label: 'ИГРОК',
    element: {
      label: 'ИГРОК',
      element: <div>POHOFD</div>
    },
  },
]