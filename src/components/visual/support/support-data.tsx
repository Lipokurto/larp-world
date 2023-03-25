import { Item } from "../../../rules-text/type";

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
    label: 'Походный набор',
    element: {
      label: 'Походный набор',
      element: <div>POHOFD</div>
    },
  },
  {
    coordinates: {
      q: 0,
      s: 2,
      r: -2,
    }, 
    color: 'red',
    label: 'Место сна',
    element: {
      label: 'Место сна',
      element: <div>POHOFD</div>
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
      element: <div>POHOFD</div>
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
      element: <div>POHOFD</div>
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
      element: <div>POHOFD</div>
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
      element: <div>POHOFD</div>
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
      element: <div>POHOFD</div>
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
      element: <div>POHOFD</div>
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
    label: 'Отправка себя',
    element: {
      label: 'Отправка себя',
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
    label: 'Отправка вещей',
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
      element: <div>POHOFD</div>
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