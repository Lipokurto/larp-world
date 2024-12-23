import { Item } from '../rules-text/type';

import vallatoriaCoat from '../assets/coats/vallatoria.png';

import s from './history.module.css';

export const vallatoriaHistory: Item = {
  label: 'Герцогство Валлатория',
  element: (
    <>
      <div className={s.info}>
        <div className={s.coat}>
          <img src={vallatoriaCoat} alt='' />
        </div>

        <div className={s.text}>
          <div><i>Правитель: </i>герцог Саглохад</div>
          <div><i>Столица: </i>город Строрд</div>
          <div><i>Герб: </i>Красный грифон на золотом поле</div>
          <div><i>Цвета: </i>Красный и золотой</div>
        </div>
      </div>

      <div className={s.block2}>
        <h3>Краткая история</h3>
        <div>Состоит в союзнических отношениях с королевством Мидленд и герцогством Моргар</div>
        <div>После битвы при Фазиевом ущелье, которая закончилась уверенной победой Кушан, был заключен мир на имперских условиях</div>
        <div>Часть территорий герцогства с тех пор перешло во владения империи, в том время как Кушаны останавливают дальнейшую экспансию на запад</div>
        <div>Славится своей легкой конницей "Крылатые копья"</div>
        <br />
        <div>Является одним из откровеннейших центров борьбы с политеизмом, активно сотрудничает со Святым Престолом</div>
      </div>
    </>
  ),
}