import owner01 from '../../../assets/rules/man/owner/01.jpg';
import owner02 from '../../../assets/rules/man/owner/02.jpg';
import owner03 from '../../../assets/rules/man/owner/03.jpg';

import { ImagesAdaptive } from '../../../components';
import { Item } from '../../type';

import s from './char.module.css';

const images = [owner01, owner02, owner03];

export const owner: Item = {
  label: 'Хозяин',
  player: 'Игрок',
  desc: 'Глава увеселительного заведения',
  element: 
    <>      
      <div>      
        <ImagesAdaptive images={images} />
      </div>

      <div className={s.label}><i>Описание</i></div>
      <div>Может выполнять действие  <b>"Отдых"</b>, <b>"Контроль качества"</b>.</div>

      <div className={s.label}><i>Требования</i></div>
      <div className={s.listContainer}>
        <li>Хорошо знает разделы: основы, локации, ресурсы, психозы.</li>
        <li>Понимает строение феодального общества.</li>
        <li>Ответственный подход к отыгрышу и организации локации.</li>
      </div>

      <div className={s.label}><i>Рекомендации</i></div>
      <div className={s.listContainer}>
        <li>Умение понимать желания игроков и требования хронистов.</li>
      </div>
    </>
}