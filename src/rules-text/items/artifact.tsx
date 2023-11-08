import icon from '../../assets/icons/items/artefact.png';

import { Item } from '../type';

import s from './items.module.css';

export const artifact: Item = {
  label: 'Артефакт',
  icon: icon,
  weight: 0,
  element:
    <>
      <div className={s.icon}><img src={icon} alt='' /></div>
      <div className={s.label}>Эффекты</div>
        <div>Имеет игротехнические свойства</div>
      <div className={s.label}>Вес: 0</div>

      <div className={s.listContainer}>
        <li>Запрещается уничтожать</li>
        <li>Любой артефакт имеет лишь сюжетное назначение</li>
        <li>Игровой предмет</li>
      </div>
      
      <h2>Моделируется:</h2>
        <div>Игровой предмет с печатью мастеров</div>
      <br />
      <div>Любой артефакт можно продать мастерам за игровые деньги</div>
      <div>На игре не предусмотрено наличие артефактов дающих игротехнические преимущества</div>
    </>
}