import { Chapter, ImagesAdaptive } from '../../components';
import ant01 from '../../assets/about/anturage/ant-01.png';
import ant02 from '../../assets/about/anturage/ant-02.png';
import ant03 from '../../assets/about/anturage/ant-03.png';
import suj01 from '../../assets/about/sujet/suj-01.png';
import suj02 from '../../assets/about/sujet/suj-02.png';
import suj03 from '../../assets/about/sujet/suj-03.png';
import eco01 from '../../assets/about/economy/eco-01.png';
import eco02 from '../../assets/about/economy/eco-02.png';
import eco03 from '../../assets/about/economy/eco-03.png';
import sec01 from '../../assets/about/secret/sec-01.png';
import sec02 from '../../assets/about/secret/sec-02.png';
import sec03 from '../../assets/about/secret/sec-03.png';

import s from './about.module.css';

const anturage = [ant01, ant02, ant03];
const sujet = [suj01, suj02, suj03];
const economy = [eco03, eco01, eco02];
const secret = [sec02, sec01, sec03];

export function About(): JSX.Element {
  return (
    <div className={s.container}>
      <Chapter chapter='О мероприятии' />
      <div className={s.listContainer}>
        <div>Название: <b>Темные века: Цена свободы</b></div>
        <div>Дата: <b>1-4 октября 2025</b></div>
        <div>Численность: <b>200+</b></div>
        <div>Полигон: <b>Крым</b></div>
        <div>Оружие: <b>мягкое</b></div>
        <div>Сеттинг: <b>по мотивам манги "Берсерк" за авторством Кентаро Миура</b></div>
        <div>Стилистика мира: <b>Европа 15-16 веков. Минимум магии</b></div>
      </div>
      
      <div className={s.label}>Расписание мероприятия</div>
      <div className={s.listContainer}>
        <div><b>Вторник (30.09):</b> Заезд на полигон, установка локаций, предварительная регистрация, семинары</div>
        <div><b>Среда (01.10):</b> Регистрация, начало мероприятия</div>
        <div><b>Четверг (02.10):</b> Полный игровой день. Боевка дневная и вечерняя</div>
        <div><b>Пятница (03.10):</b> Полный игровой день. Боевка дневная и вечерняя</div>
        <div><b>Суббота (04.10):</b> Игровой день до полудня. После полудня торги и вечерняя битва. Финальное построение</div>
        <div><b>Воскресенье (05.10):</b> Сбор лагерей, сдача локаций, уборка полигона, разъезд</div>
      </div>

      <div className={s.label}>Общее</div>
      <div className={s.listContainer}>
        <div className={s.pick}>
          <div className={s.textBlock}>
            <b>Высокие требования:</b> Мы стремимся визуализировать все происходящее вокруг и хотим этого же от игроков.
          </div>
          <ImagesAdaptive images={anturage} isNoAdaptive />
        </div>

        <div className={s.pick}>
          <div className={s.textBlock}>
            <b>Сюжет без остановок:</b> Любые сюжетные моменты фиксируются, никаких "мастер-стопов" или "откатов".
          </div>
          <ImagesAdaptive images={sujet} isNoAdaptive />
        </div>

        <div className={s.pick}>
          <div className={s.textBlock}>
            <b>Игровая экономика:</b> Игровые ресурсы и деньги влияют на все.
          </div>
          <ImagesAdaptive images={economy} isNoAdaptive />
        </div>

        <div className={s.pick}>
          <div className={s.textBlock}>
            <div><b>Скрытые механики:</b> Часть игровых механик работают тайно, исследовать их - часть игрового опыта.</div>
          </div>
          <ImagesAdaptive images={secret} isNoAdaptive />
        </div>
      </div>
    </div>
  )
}