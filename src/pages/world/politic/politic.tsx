import { AccordionBlock, Chapter } from "../../../components";

import {
  baldenHistory, grantHistory, holyHistory, isKingdomHistory,
  kushanHistory,
  midlendHistory, morgarHistory, paneriaHistory, randelHistory,
  tudorHistory, vallatoriaHistory,
} from '../../../history';

import s from './politic.module.css';

export function Politic(): JSX.Element {
  return (
    <div className={s.container}>
      <Chapter chapter='ПОЛИТИКА' />
      
      <div>
        <i>Все мероприятие строится вокруг подготовки лагерей к битве. По факту вся игра - это несколько дней до начала битвы в которой каждая из стороны пытается занять более выгодные позиции на политической и тактической карте, в то время как простые крестьяне пытаются просто выжить</i>
        <br />
        <i>Все что описано ниже является общими знаниями почти любого персонажа</i>
        <br />
      </div>

      <AccordionBlock
        label='Крупнейшие государства континента'
        items={[
          {
            label: midlendHistory.label,
            element: midlendHistory.element,
          },
          {
            label: tudorHistory.label,
            element: tudorHistory.element,
          },
          {
            label: baldenHistory.label,
            element: baldenHistory.element,
          },
          {
            label: isKingdomHistory.label,
            element: isKingdomHistory.element,
          },
          {
            label: randelHistory.label,
            element: randelHistory.element,
          },
          {
            label: grantHistory.label,
            element: grantHistory.element,
          },
          {
            label: morgarHistory.label,
            element: morgarHistory.element,
          },
          {
            label: vallatoriaHistory.label,
            element: vallatoriaHistory.element,
          },
          {
            label: kushanHistory.label,
            element: kushanHistory.element,
          },
          {
            label: paneriaHistory.label,
            element: paneriaHistory.element,
          },
          {
            label: holyHistory.label,
            element: holyHistory.element,
          },
        ]}
      />

      <AccordionBlock
        label='Война'
        items={[
          {
            label: 'Финальная битва',
            element:
              <>
                <div>Каждый из отрядов может примкнуть к одной из враждующих сторон, при этом соблюдая контракты наемника и принадлежность орденов, нейтральные банды могут примкнуть по своему желанию</div>
        
                <div className={s.block2}>
                  <h3>Результат:</h3>
                    <li>Победившая сторона передает во владение это поселение и провинцию своему нанимателю</li>
                    <li>В случае ничьей, можно заявить образование своего королевства, как следствие дальше оно будет выступать стороной конфликта</li>
                    <li>Политическая карта перекрашивается</li>
                </div>

                <div className={s.block2}>
                  <h3>Условия успеха</h3>
                    <li>На поле боя должен остаться хотя бы один представитель из враждующих сторон</li>
                    <li>Если выжили нейтральные персонажи то они в праве передать победу одному из королевств или объявить ничью</li>
                </div>

                <div className={s.block2}>
                  <h3>Механика</h3>
                    <li>Главы всех отрядов приглашаются на стратегический совет</li>
                    <li>Капитаны должны явится со своими интендантами</li>
                    <li>Проводится аукциона порядка расстановки отрядов - кто победил тот выбирает очередность, под свою выгоду (ставка очками влияния или игровыми деньгами)</li>
                    <li>Расставив все отряды на поле боя, интенданты устанавливают знамена на местах оговоренных при совете. Бойцы соответствующих отрядов должны находится возле своего знамени</li>
                    <li>Выжившие после битвы сталкиваются с следующим этапом - ЗАТМЕНИЕ, при этом в затмении может участвовать инквизиция полным составом</li>
                </div>
              </>
          },
          {
            label: 'Затмение',
            element:
              <>
                <div>На затмении обязательно присутствие всех чудовищ и игроков с метками жертвы</div>
                <div>Все люди будут расположены в центре, чудовища размещаются кто как хочет, по сигналу начинается ЗАТМЕНИЕ, тот чудовище который съел больше всегда жертв и при этом остался жив - может улучшить свои характеристики, которые будут перенесены на сл проект</div>
                <br />
                <div>Вперед самим затмением чудовищеЫ решают как ослабить жертв, выбрав один из выделенных вариантов, при этом</div>
                <li><b>Паника:</b> Отсутствие какого-то либо вида оружия (например мечей/топоров/копий/щитов)</li>
                <li><b>Коррозийные пары:</b> Все элементы доспеха получившие хоть какой-то урон в броне хиты считаются полностью уничтоженным</li>
                <li><b>Беспорядок:</b> Жертвы пропускаются не все сразу а несколькими волнами</li>
                <li><b>Ярость:</b> Некоторые жертвы по определенном шаблону могут атаковать союзников</li>
                <li><b>Безумие:</b> Жертвы кидаются на чудовищ первыми</li>
              </>
          },
        ]}
        />
    </div>
  )
}