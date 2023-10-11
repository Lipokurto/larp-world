import icon from '../../../assets/cards/icons/eaten.png';

import { Item } from '../../type';

import s from '../items.module.css';

export const eaten: Item = {
  label: 'Сожран',
  icon: icon,
  element:
    <>
      <div className={s.icon}><img src={icon} alt='' /></div>
      <div>Количество карт <b>"Сожран"</b> которые накопились за всю игру у мастеров, через поедания игроков чудовищами будет влиять на фазу <b>"Затмение"</b> в финальной битве.</div>
      <div>Передается сожранным игроком вместе с меткой жертвы мастеру при посещении мертвяка.</div>
    </>
}