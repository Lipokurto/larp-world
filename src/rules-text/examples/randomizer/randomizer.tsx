import { Item } from '../../type';

import s from './randomizer.module.css';

export const randomizer: Item = {
  label: 'Рандомайзер',
  element: (
    <>
      <h3>Описание</h3>
      <div>Это механика способная определять случайным образом успешность действия. Игроки могут придумать свои типы «Рандомайзера», которые обязательно следует обсудить с мастерами, вот несколько простых примеров:</div>
      <div className={s.label}><b>Кубики</b></div>
      <div className={s.listContainer}>
        <li>Мастер, учитывая все модификаторы успеха, определяет во что для успеха игроку надо кинуть не меньше определенного значения</li>
        <li>Жрец в конце ритуала кидает кубики.</li>
        <li>Мастер исходя их брошенного жрецом значения определяет удался ритуал или нет.</li>
      </div>
      <div className={s.label}><b>Жребий</b></div>
      <div className={s.listContainer}>
        <li>Мастер, учитывая все модификаторы успеха, наполняет мешочек одинаковыми по форме шариками белого и черного цвета.</li>
        <li>Жрец во время ритуала тянет в слепую из мешочка шарик, если вытянул белый – успех, если черный – провал.</li>
      </div>
      <div className={s.label}><b>Карты</b></div>
      <div className={s.listContainer}>
        <li>Мастер, учитывая все модификаторы успеха, наполняет колоду картами, где определенный вид карт – успех, другие провал.</li>
        <li>Жрец во время ритуала в слепую тянет карту из колоды.</li>
      </div>
    </>
  ),
}