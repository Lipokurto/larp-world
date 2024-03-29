import { Item } from "../../type";

export const explainRepair: Item = {
  label: 'Пояснение ремонта',
  element:
    <>
      <h3>Разница в методах ремонта</h3>
      <div>Всего известно три метода лечения, каждый из которых имеет свои плюсы и минусы</div>
      <li><b>Кузница:</b> не тратит ресурсы, тратит время, но требует наличие самой кузни и мастера</li>
      <li><b>Ремкомплект:</b> одноразовый, можно применять самостоятельно, тратит время, имеет вес, но позволяет отремонтировать броню даже из сломанного состояния без кузница</li>
      <li><b>Оружейное масло:</b> одноразовая, можно применять самостоятельно, не тратит время, не имеет веса, но может отремонтировать броню только из поврежденного состояния</li>

      <div>Таким образом игроки получают три возможности ремонта, которые можно сопроводить богатым отыгрышем</div>
      <div><b>ПРИМЕЧАНИЕ:</b> По цифрам и методам схемы лечения и ремонта почти идентичны, для простоты восприятия этих процессов игроками</div>
    </>
}