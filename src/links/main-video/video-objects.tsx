import { Link } from "../types";
import vkImage from './../../assets/icons/social/vk.png';

import s from './objects.module.css';

export const videoObject: Link[] = [
  {
    name: 'ПРИ Темные века: 07 Виртуальная экскурсия по полигону',
    link: 'https://vk.com/video_ext.php?oid=-221551368&id=456239030&hd=2',
    description: 
      <>
        <div className={s.label}>07 Виртуальная экскурсия по полигону</div>
        <div className={s.listContainer}>
          <div>Какие виды?</div>
          <div>Есть ли удобства?</div>
          <div>Беседки?</div>
        </div>
      </>
  },
  {
    name: 'ПРИ Темные века: 06 Производство ремкомплектов (демонстрация)',
    link: 'https://vk.com/video_ext.php?oid=-221551368&id=456239027&hd=2',
    description: 
      <>
        <div className={s.label}>06 Производство ремкомплектов (демонстрация)</div>
        <div className={s.listContainer}>
          <div>Что такое физический труд для медиков?</div>
          <div>Что предоставляют мастера, а что придется докупать самостоятельно</div>
          <div>Как долго длиться процесс</div>
        </div>
      </>
  },
  {
    name: 'ПРИ Темные века: 05 Оружие и хитосъем',
    link: 'https://vk.com/video_ext.php?oid=-221551368&id=456239026&hd=2',
    description: 
      <>
        <div className={s.label}>05 Оружие и хитосъем</div>
        <div className={s.listContainer}>
          <div>Сколько хитов снимает оружие?</div>
          <div>Что такое особое оружие?</div>
          <div>Почему капитан должен выделяться среди подчиненных?</div>
        </div>
      </>
  },
  {
    name: 'ПРИ Темные века: 04 Броня и хиты',
    link: 'https://vk.com/video_ext.php?oid=-221551368&id=456239025&hd=2',
    description: 
      <>
        <div className={s.label}>04 Броня и хиты</div>
        <div className={s.listContainer}>
          <div>Как посчитать свои хиты?</div>
          <div>Для чего нужен шлем?</div>
          <div>Что за мобильное приложение?</div>
        </div>
      </>
  },
  {
    name: 'ПРИ Темные века: 03 Требования к внешнему виду',
    link: 'https://vk.com/video_ext.php?oid=-221551368&id=456239024&hd=2',
    description: 
      <>
        <div className={s.label}>03 Требования к внешнему виду</div>
        <div className={s.listContainer}>
          <div>Что такое фотодопуск</div>
          <div>Подсказки по антуражу</div>
          <div>Как сделать образ более интересным</div>
        </div>
      </>
  },
  {
    name: 'ПРИ Темные века: 02 Коротко о вселенной',
    link: 'https://vk.com/video_ext.php?oid=-221551368&id=456239023&hd=2',
    description: 
      <>
        <div className={s.label}>02 Коротко о вселенной</div>
        <div className={s.listContainer}>
          <div>Что за вселенная "Берсерк"</div>
          <div>Следует ли перечитывать все произведение?</div>
          <div>Могу ли я поехать Гатсом или Гриффитом?</div>
        </div>
      </>
  },
  {
    name: 'ПРИ Темные века: 01 Вступление',
    link: 'https://vk.com/video_ext.php?oid=-221551368&id=456239022&hd=2',
    description: 
      <>
        <div className={s.label}>01 Вступление</div>
        <div className={s.listContainer}>
          <div>Когда? Где? Чем?</div>
          <div>Какой сеттинг мероприятия</div>
          <div>Стилистика и тд</div>
        </div>
      </>
  },
  {
    name: 'Игровой трейлер',
    link: 'https://vk.com/video_ext.php?oid=-221551368&id=456239017&hash=c6a1036a9c1c6f4b&hd=2',
    description: 
      <>
        <div className={s.label}>Погрузись в увлекательный мир игры!</div>
        <div className={s.listContainer}>
          <div>Переживи невероятные приключения и ощути настоящий адреналин с многоуровневым геймплеем, который подходит как для командных сражений, так и для одиночных побед.</div>
          <div>Почувствуй атмосферу полной реалистичности, где требования к деталям, начиная от игроков и заканчивая локациями, берут верх.</div>
        </div>

        <div className={s.label}>Открой свою воображение и воплоти свои самые смелые идеи!</div>
        <div className={s.listContainer}>
          <div>Создай уникальную банду, орден или монстра и впиши себя в историю мира.</div>
        </div>

        <div className={s.label}>Насыщенный информационный контент ждет тебя!</div>
        <div className={s.listContainer}>
          <div>Здесь ты найдешь обилие видео, фото и цифровых материалов, которые помогут тебе лучше понять игровые правила, разработать свой костюм и построить локацию мечты.</div>
          <br />
          <a href='https://vk.com/larpdarkage' target='_blank' rel="noreferrer" style={{color: 'goldenrod'}}>
            <img src={vkImage} alt="" width={30} />
          </a>
        </div>
      </>
  },

]