import icon from '../../assets/icons/items/artefact.png';

import { Item } from '../type';

import s from './items.module.css';

export const artifact: Item = {
  label: 'Артефакт',
  icon: icon,
  element:
    <>
      <div className={s.icon}><img src={icon} alt='' /></div>
      <h2>Эффекты</h2>
        <div>Имеет игротехнические свойства</div>
      <h2>Вес: 0</h2>
      <h2>Ограничения:</h2>
        <li>Запрещается уничтожать</li>
        <li>Любой артефакт имеет лишь сюжетное назначение</li>
        <li>Игровой предмет</li>
      <h2>Моделируется:</h2>
        <div>Игровой предмет с мастерской печатью</div>
      <br />
      <div>Любой артефакт можно продать мастерам за игровые деньги</div>
    </>
}