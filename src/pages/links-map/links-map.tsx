import { NavLink } from 'react-router-dom';
import { Chapter } from '../../components';

import s from './links-map.module.css';

export function LinksMap(): JSX.Element {
  return (
    <div className={s.container}>
      <Chapter chapter='Правила' />

      <div className={s.label}>Правила посещения мероприятия</div>
      <div>
        <div>В этом разделе вы познакомитесь с общими требованиями к пребыванию на мероприятии</div>
        <NavLink className={s.secondButton} replace to='/rules/general'>Перейти в раздел</NavLink>
      </div>

      <div className={s.label}>Допуски снаряжения</div>
      <div>
      <div>В этом разделе вы познакомитесь с техническими требованиями к броне, оружию и антуражу</div>
              <NavLink className={s.secondButton} replace to='/rules/tolerance'>Перейти в раздел</NavLink>
      </div>

      <div className={s.label}>Боевые взаимодействия</div>
      <div>
        <div>В этом разделе вы узнаете сколько хитов снимает ваше оружие, как рассчитать свои хиты, что требуется для их восстановления</div>
        <NavLink className={s.secondButton} replace to='/rules/battle'>Перейти в раздел</NavLink>
        <div style={{marginTop: 10}}>Для этого раздела мы подготовили материалы для упрощения понимания:</div>
        <div><NavLink className={s.secondButton} replace to='/help/char-calc'>Рассчитать свои хиты</NavLink></div>
        <div><NavLink className={s.secondButton} replace to='/help/heal-calc'>Как снимаются и восстанавливаются хиты</NavLink></div>
      </div>

      <div className={s.label}>Чудовища</div>
      <div>
        <div>В этом разделе вы сможете узнать о том каким правилам подчиняются чудовища и одержимые</div>
        <NavLink className={s.secondButton} replace to='/rules/monsters'>Перейти в раздел</NavLink>
        <div style={{marginTop: 10}}>Для этого раздела мы подготовили материалы для упрощения понимания:</div>
        <div><NavLink className={s.secondButton} replace to='/help/monster-calc'>Получение и восстановление хитов и создание и лечение одержимых</NavLink></div>
      </div>

      <div className={s.label}>Локации и производство</div>
      <div>
        <div>В этом разделе вы узнаете требования к локациям, как рассчитывается их эффективность и какие производственные цепочки являются основными</div>
        <NavLink className={s.secondButton} replace to='/rules/location'>Перейти в раздел</NavLink>
        <div style={{marginTop: 10}}>Для этого раздела мы подготовили материалы для упрощения понимания:</div>
        <div><NavLink className={s.secondButton} replace to='/help/build-calc'>Рассчитать время производства единицы товара</NavLink></div>
      </div>

      <div className={s.label}>Игровые ресурсы</div>
      <div>
        <div>В этом разделе вы узнаете какие предметы являются игровыми, как их отличить, сколько их можно носить за раз и сколько они весят</div>
        <NavLink className={s.secondButton} replace to='/rules/resources'>Перейти в раздел</NavLink>
      </div>

      <div className={s.label}>Игровые действия</div>
      <div>
        <div>В этом разделе вы узнаете какие игровые действия предусмотрены и как их нужно применять</div>
        <NavLink className={s.secondButton} replace to='/rules/actions'>Перейти в раздел</NavLink>
      </div>

      <div className={s.label}>Персонажи</div>
      <div>
        <div>В этом разделе вы узнаете о архетипах персонажа, увидите примеры внешнего вида, описания разных народностей, населяющих континент.</div>
        <div>Познакомитесь с религиозными верованиями разных народов</div>
        <NavLink className={s.secondButton} replace to='/world/characters'>Перейти в раздел</NavLink>
      </div>

      <div className={s.label}>Политика</div>
      <div>
        <div>В этом разделе вы узнаете о том какие державы делят между собой земли континента, за что идет война и как будет организована финальная битва</div>
        <NavLink className={s.secondButton} replace to='/world/politic'>Перейти в раздел</NavLink>
      </div>
    </div>
  )
}