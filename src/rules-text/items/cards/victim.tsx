import icon from '../../../assets/cards/icons/victim.png';

import { Item } from '../../type';

import s from '../items.module.css';

export const victim: Item = {
  label: 'Метка жертвы',
  icon: icon,
  element:
    <>
      <div className={s.icon}><img src={icon} alt='' /></div>
      <div>Игрок-человек может получить эту карту в мертвяке или по сюжету через мастера или интенданта.</div>
      <div>Никак не влияет на игромеханику самого игрока, нужна лишь для реакции на нее чудовищ и инквизиции.</div>
      <div>Чудовище может заменить ее на карту <b>"Сожран"</b>, инквизитор - на карту <b>"Прощение"</b>.</div>
      <div>Демонстрируется только при поедании чудовищем или в ходе <b>"Молитвы"</b> или добровольно.</div>
    </>
}