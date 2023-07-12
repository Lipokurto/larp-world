import { Link } from "../types";
import vkImage from './../../assets/icons/social/vk.png';

import s from './objects.module.css';

export const videoObject: Link[] = [
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
            <img src={vkImage} alt="" width={30} style={{marginLeft: "50%"}}/>
          </a>
        </div>
      </>
  }
]