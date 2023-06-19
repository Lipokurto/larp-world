import owner01 from '../../../assets/rules/man/owner/01.jpg';
import owner02 from '../../../assets/rules/man/owner/02.jpg';
import owner03 from '../../../assets/rules/man/owner/03.jpg';

import { ImagesAdaptive } from '../../../components';
import { Item } from '../../type';

import s from './char.module.css';

const images = [owner01, owner02, owner03];

export const owner: Item = {
  label: 'Хозяин',
  element: 
    <>      
      <div>      
        <ImagesAdaptive images={images} />
      </div>

      <div className={s.label}>Описание</div>
      <div className={s.listContainer}>
        <li>Глава локации, предоставляющей услуги</li>
        <li>Может использовать: "Отдых"</li>
      </div>

      <div className={s.label}>Требования</div>
      <div className={s.listContainer}>
        <li>Хорошо знает разделы: основы, локации, ресурсы, психозы</li>
        <li>Понимает строение феодального общества</li>
        <li>Ответственный подход к отыгрышу и организации локации</li>
      </div>

      <div className={s.label}>Рекомендации</div>
      <div className={s.listContainer}>
        <li>Умение понимать желания игроков и требования мастеров</li>
      </div>
    </>
}