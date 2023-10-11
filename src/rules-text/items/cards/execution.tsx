import icon from '../../../assets/cards/icons/execution.png';

import { Item } from '../../type';

import s from '../items.module.css';

export const execution: Item = {
  label: 'Прощение',
  icon: icon,
  element:
    <>
      <div className={s.icon}><img src={icon} alt='' /></div>
      <div>Количество карт <b>"Прощение"</b> которые накопились за всю игру мастеров, через действия инквизиции будет влиять на фазу <b>"Затмение"</b> в финальной битве</div>
      <div>Передается казненным игроком вместе с меткой жертвы мастеру при посещении мертвяка.</div>
    </>
}