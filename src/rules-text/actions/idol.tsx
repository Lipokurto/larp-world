import { Item } from "../type";

import s from './actions.module.css';

export const idol: Item = {
  label: 'Призыв духа идола',
  element:
    <>
      <div>Доступно только роли "Чудовище"</div>
      <div>Создать больше идолов чем стартовое количество нельзя</div>
      <div className={s.label}>Механика:</div>
      <div className={s.listContainer}>
        <li>Чудовище должно быть в монструозной форме</li>
        <li>Здоровье чудовища падает до 3 хитов</li>
        <li>Ритуал длится минимум 15 минут</li>
        <li>По окончанию ритуала чудовище выбирает: кто-то должен перейти в состояние "Тяжело ранен", кто-то получить "Метку жертвы", кто-то остаться невредимым</li>
      </div>

      <div className={s.label}>Дополнительно:</div>
      <div className={s.listContainer}>
        <li>Если обнаруживается что у всех еретиков до ритуала была метка жертвы то ритуал провести невозможно</li>
        <li>До ритуала чудовище может определить какие из игроков имеют метку жертвы какие нет</li>
      </div>
    </>
}