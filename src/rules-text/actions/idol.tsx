import { Item } from "../type";

import s from './actions.module.css';

export const idol: Item = {
  label: 'Призыв духа',
  element:
    <>
      <div>Чудовище призывает из астрального мира дух, сплетая из его астрального тела мерзкий идол для поклонения темным силам.</div>
      <div className={s.label}><i>Механика</i></div>
      <ol className={s.listContainer}>
        <li>Чудовище в человеческой форме сообщает мастерам, что собирается проводить ритуал призыва духа (минимум за час)</li>
        <li>Чудовище описывает примерное место, где желает расположение идола.</li>
        <li>Мастера устанавливают в указанном месте идол, накрытый фиолетовой тканью.</li>
        <li>Чудовище в монструозной форме прибывает на указанное место.</li>
        <li>Чудовище в течении минимум <b>15 минут</b> призывает злые силы сотворить идол на этом месте.</li>
        <li>Идол отнимает у чудовища <b>половину</b> текущих хитов.</li>
        <li>Чудовище снимает фиолетовую ткань с идола, с этого момента идол считается установленным.</li>
      </ol>

      <div className={s.label}><i>Дополнительно</i></div>
      <ol className={s.listContainer}>
        <li>Создать больше идолов чем стартовое количество нельзя.</li>
        <li>Идол накрытый фиолетовой тканью нельзя перемещать или снимать с него эту ткань.</li>
      </ol>
    </>
}