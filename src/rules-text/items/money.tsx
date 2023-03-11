import React from 'react';

import icon from '../../assets/icons/items/money.png';

import { Item } from '../type';

import s from './items.module.css';

export const money: Item = {
  label: 'Деньги',
  icon: icon,
  element:
    <>
      <div className={s.icon}><img src={icon} alt='' /></div>
      <h2>Эффекты</h2>
        <div>Универсальный способ обмена товаров</div>
      <h2>Вес: 0</h2>
      <h2>Ограничения:</h2>
        <li>Представлены тремя номиналами: золото, серебро, медь</li>
        <li>Обменный курс: Золото -1 = Серебро - 5 = медь - 10</li>
        <li>Игровой предмет</li>
      
      <h2>Моделируется:</h2>
        <div>Монеты разного наминала</div>
    </>
}