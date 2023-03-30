import { Item } from "../../../rules-text/type";
import { build } from "./text/build";
import { campBuild } from "./text/camp-build";
import { campPlace } from "./text/camp-place";
import { camping } from "./text/camping";
import { economic } from "./text/economic";
import { equip } from "./text/equip";
import { fight } from "./text/fight";
import { heal } from "./text/heal";
import { hierarchy } from "./text/hierarchy";
import { life } from "./text/life";
import { player } from "./text/player";
import { politic } from "./text/politic";
import { quest } from "./text/quest";
import { race } from "./text/race";
import { rate } from "./text/rate";
import { route } from "./text/route";
import { stuff } from "./text/stuff";
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
    color: 'lightGray',
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
    color: 'darkGray',
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
    color: 'lightGray',
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
    color: 'darkGray',
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
    color: 'lightGray',
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
    color: 'darkGray',
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
      element: quest.element,
    },
  },

  {
    coordinates: {
      q: 0,
      s: -1,
      r: 1,
    }, 
    color: 'lightGray',
    label: 'Боевка',
    element: {
      label: 'Боевка',
      element: fight.element,
    },
  },
  {
    coordinates: {
      q: 0,
      s: -2,
      r: 2,
    }, 
    color: 'darkGray',
    label: 'Снаряжение',
    element: {
      label: 'Снаряжение',
      element: equip.element,
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
      element: heal.element,
    },
  },
  {
    coordinates: {
      q: -1,
      s: 0,
      r: 1,
    }, 
    color: 'lightGray',
    label: 'Экономика',
    element: {
      label: 'Экономика',
      element: economic.element,
    },
  },
  {
    coordinates: {
      q: -2,
      s: 0,
      r: 2,
    }, 
    color: 'darkGray',
    label: 'Постройка',
    element: {
      label: 'Постройка',
      element: build.element,
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
      element: rate.element,
    },
  },

  {
    coordinates: {
      q: -1,
      s: 1,
      r: 0,
    }, 
    color: 'lightGray',
    label: 'Маршрут',
    element: {
      label: 'Маршрут',
      element: route.element,
    },
  },
  {
    coordinates: {
      q: -2,
      s: 2,
      r: 0,
    }, 
    color: 'darkGray',
    label: 'Вещи',
    element: {
      label: 'Вещи',
      element: stuff.element,
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
      element: player.element,
    },
  },
]