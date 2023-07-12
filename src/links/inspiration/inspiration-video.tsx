import { Link } from "../types";

import s from './inspiration.module.css';

export const inspirationVideo: Link[] = [
  {
    name: 'Первая серия старого аниме "Берсерк" в озвучке Гоблина',
    link: 'https://vk.com/video_ext.php?oid=169252411&id=171268340&hash=6d18e937b41e0269&hd=2',
    description: 
      <>
        <div className={s.label}>Погружение в мир</div>
        <div className={s.listContainer}>
          <div>В этой серии вы погрузитесь в общую атмосферу темного фентези, где чудовища правят людьми, и только единицы могут им противостоять, неся большой урон и потери</div>
        </div>

        <div className={s.label}>Хронология</div>
        <div className={s.listContainer}>
          <div>События проекта "Темные века" берут свое начало задолго до появление на свет всех главных героев первоисточника, так мы позволяем раскрыть игрокам сюжет лично</div>
        </div>

        <div className={s.label}>Вооружение</div>
        <div className={s.listContainer}>
          <div>У главного героя в руке пушка и он орудует здоровенным клинком</div>
          <div>В хронологии событий игры данный клинок как и ручные пушки еще не созданы, но артиллерия в виде пушек на станине во всю используется</div>
          <div>Пистоли, ружья в мире игры еще не изобретены</div>
        </div>
      </>
  },
  {
    name: 'Фильм "Плоть и кровь" (1985)',
    link: 'https://vk.com/video_ext.php?oid=-162947134&id=456242799&hash=7153f48ca1ed60e3&hd=2',
    description: 
      <>
        <div className={s.label}>Погружение в мир</div>
        <div className={s.listContainer}>
          <div>В этом фильме вы наглядно можете увидеть что из себя представляет жизнь наемника (осторожно фильм суровый)</div>
        </div>
      </>
  },
  {
    name: 'Фильм "Ведьма" (2015)',
    link: 'https://vk.com/video_ext.php?oid=-29154202&id=456239727&hash=a8f3ff067c3fbadd&hd=2',
    description: 
      <>
        <div className={s.label}>Погружение в мир</div>
        <div className={s.listContainer}>
          <div>Фильм наглядно демонстрирует как может помутиться рассудок у простых крестьян на фоне голода и религиозной фанатичности (осторожно это психологический ужастик)</div>
        </div>
      </>
  },
  {
    name: 'Фильм "Капитан Алатристе" (2006)',
    link: 'https://vk.com/video_ext.php?oid=-101758569&id=171687276&hash=9567ef74de71c644&hd=2',
    description: 
      <>
        <div className={s.label}>Погружение в мир</div>
        <div className={s.listContainer}>
          <div>Фильм может показаться затянутым, но он в полную меру отображает тягучесть бытия солдата который торгует жизнью</div>
        </div>

        <div className={s.label}>Вооружение</div>
        <div className={s.listContainer}>
          <div>Фильм демонстрирует уже пороховую эпоху, что не вписывается в концепцию мероприятия.</div>
          <div>Но если смотреть на фильм с точки зрения трагедии одного человека - он может дать бесценные подсказки в создании своего персонажа.</div>
        </div>
      </>
  },
  {
    name: 'Фильм "Черная смерть" (2010)',
    link: 'https://vk.com/video_ext.php?oid=-36455846&id=456242710&hash=fdd2c25daad154ae&hd=2',
    description: 
      <>
        <div className={s.label}>Погружение в мир</div>
        <div className={s.listContainer}>
          <div>Фильм демонстрирует работу представителей церкви, которые не всегда ходят в блестящих доспехах</div>
        </div>
      </>
  },
  {
    name: 'Фильм "Соломон Кейн" (2009)',
    link: 'https://vk.com/video_ext.php?oid=-219683471&id=456239045&hash=f31128c7889a70ac&hd=2',
    description: 
      <>
        <div className={s.label}>Погружение в мир</div>
        <div className={s.listContainer}>
          <div>Одержимость, фамильные ценности, бандиты, мистика, и фамильные ценности</div>
        </div>
      </>
  },
  {
    name: 'Серия игр "Dark souls"',
    link: 'https://vk.com/video_ext.php?oid=-91883925&id=456239019&hash=e9e19e92ee5dbfa3&hd=2',
    description: 
      <>
        <div className={s.label}>Погружение в мир</div>
        <div className={s.listContainer}>
          <div>Запутанный сюжет, смерть как ведущая механика, большое обилие опасных чудовищ</div>
        </div>

        <div className={s.label}>Дополнительно</div>
        <div className={s.listContainer}>
          <div>Серия этих игр славится своей атмосферой и сложностью, дизайн локаций и монстров на высшем уровне</div>
        </div>
      </>
  },
  {
    name: 'Игра "Darkest dungeon"',
    link: 'https://vk.com/video_ext.php?oid=-191924860&id=456239256&hash=2b2203b5fa1e4809&hd=2',
    description: 
      <>
        <div className={s.label}>Погружение в мир</div>
        <div className={s.listContainer}>
          <div>Эта игра научит вас тому что лечить дороже чем нанять нового</div>
        </div>

        <div className={s.label}>Дополнительно</div>
        <div className={s.listContainer}>
          <div>Из данной игры мы позаимствовали систему психозов, ведь в темном фентези рассудок тоже конечный ресурс</div>
        </div>
      </>
  },
]