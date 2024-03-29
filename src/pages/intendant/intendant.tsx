import { Chapter } from '../../components';

import s from './intendant.module.css';

export function Intendant(): JSX.Element {
  return (
    <div className={s.container}>
      <Chapter chapter='Интендант' />
      <div className={s.listContainer}>
        <div>Интендант выбирается из состава команды, лагерь которой он курирует</div>
        <div>Интендант не игровой персонаж, поэтому он не может участвовать в боевых взаимодействиях или быть убитым</div>
        <div>Интендант не оплачивает игровой взнос в конце мероприятия он получает плату за свои труды, согласно объему проделанной работы и ее качеству</div>
        <div>Интендант должен обладать антуражем соответствующего лагеря, к которому привязан</div>
        <div>Интендант должен быть в относительно постоянном доступе внутри своего лагеря</div>
        <div>Интендант должен иметь возможность проконсультировать игроков по правилам</div>
      </div>
      
      <div className={s.label}>Инвентарь интенданта, выдаваемый хронистами</div>
      <div className={s.listContainer}>
        <div><b>Карты "Жертва":</b> Игротехнические карты указывающие на то что игрок имеет клеймо жертвы</div>
        <div><b>Игровые ресурсы:</b> Большое количество карт ресурсов под выдачу в случае создания или покупки через "Снабжение"</div>
        <div><b>Деньги:</b> Игровой пул денег из которых будет формироваться награда и жалование для лагеря</div>
        <div><b>Психозами:</b> Наклейки с психозами для вклеивания их в ДК игрока</div>
        <br />
        <div><b>Повязка:</b> Повязка интенданта, для того что бы гости лагеря могли однозначно определить интендант среди игроков</div>
        <div><b>Правила:</b> Печатный образец правил</div>
        <div><b>Описание психозов:</b> Список с полным описанием действия психозов</div>
        <div><b>Обязанности интенданта:</b> Список обязанностей и прав интенданта</div>
        <div><b>Таблица снабжения:</b> Цены на все товары в этом лагере, которые можно заказать</div>
        <div><b>Список контрактов:</b> Список контрактов доступных лагерю на начало игры</div>
        <div><b>Карта местности:</b> Карта со спутника с игровыми отметками</div>
        <div><b>Производственные схемы:</b> Заготовки предметов которые должны сделать мастера в производственных постройках</div>
        <br />
        <div><b>Рация:</b> Она будет служить для передачи данных на мастерский штаб</div>
        <div><b>Список игроков:</b> Список игроков привязанных к этому лагерю</div>
        <div><b>Список мастеров:</b> Список мастеров с описанием их зоны ответственности + номера телефонов или частоты рации</div>
        <div><b>Часы:</b> Небольшие настольные часы для отслеживания времени мертвяка</div>
        <div><b>Ручка и блокнот:</b> Ручка и блокнот для заметок</div>
      </div>

      <h3>Обязанности интенданта</h3>
      
      <div className={s.label}>Мертвяк</div>
      <div className={s.listContainer}>
        <div>Игрок пребывает в лагерь и заявляет что он умер</div>
        <div>Игрок кидает кубик если выпавшее значение меньше или равно текущему количеству смертей то интендант в закрытую выдает игроку карту "Психоза"</div>
        <div>Если у игрока уже была карта психоза то игрок тянет карту из следующего уровня психозов, заменяя текущий психоз вытянутой картой</div>
        <div>Интендант забирает у игрока ДК</div>
        <div>Изымает у игрока карты "Сожран" или "Прощение" если таковые имеются</div>
        <div>В случае если у игрока не было метки жертвы или карт "Сожран" или "Прощение" уточняет не желает ли игрок получить метку жертвы</div>
        <div>В случае отказа высчитывает 2 часа мертвяка и отмечает время выхода игрока, в случае согласия высчитывает 1 час мертвяка и вкладывает в ЖК карту "Жертвы" (отмечает в своих списках что этот игрок ее получил)</div>
        <div>Когда мертвяк окончен интендант, выдает ему обратно ДК. При этом за общим временем прохождения мертвяка следит сам игрок</div>
        <div>ПРИМЕЧАНИЕ</div>
        <li>Если игрок имеет карту "Пленник", то он без посещения мертвяка переходит в состояние "Тяжело ранен" и может продолжить играть</li>
        <li>Игроки в мертвяке могут находится внутри лагеря, но обязательно носить повязку "Мертв"</li>
      </div>

      <div className={s.label}>Выдача жалования</div>
      <div className={s.listContainer}>
        <div>При сертификации лагеря интенданту говорят о сумме которую на старте должен получить лагерь за свой антураж</div>
        <div>После построения интендант выдает указанную сумму капитану лагеря</div>
        <div>В течении игры интендант может самостоятельно понижать уровень жалования исходя из внешней антуражности лагеря</div>
        <div>Пониженное жалование вступит в силу с утра следующего дня, при этом Интендант должен оповестить об этом мастеров</div>
      </div>

      <div className={s.label}>Снабжение</div>
      <div className={s.listContainer}>
        <div>Капитан этого лагеря может запросить снабжение через интенданта</div>
        <div>Интендант совместно с капитаном составляют список требуемых лагерю ресурсов</div>
        <div>Интендант выставляет общую сумму капитану</div>
        <div>Капитан оплачивает ее</div>
        <div>Интендант отмеряет один час</div>
        <div>Интендант выдает запрошенное снабжение капитану лагеря</div>
      </div>

      <div className={s.label}>Воровство</div>
      <div className={s.listContainer}>
        <div>Игрок указывает интенданту у какого игрока и где хранится карта "воровство", подкинутая этим игроком</div>
        <div>Интендант подходит к игроку и просит найти соответствующую карту в указанном вором месте</div>
        <div>В случае обнаружения карты - интендант вытаскивает один из ресурсов из ДК игрока</div>
        <div>Карта "Воровство" забирается</div>
        <div>ПРИМЕЧАНИЕ</div>
        <li>Если ресурсов не оказалось - кража не состоялась</li>
        <li>Если карты "Воровство" не обнаружилось - ничего не происходит</li>
        <div>Интендант выдает вору ресурс</div>
        <div>В случае если вор хочет получить деньги интендант отдает ему деньги за этот ресурс, согласно таблице снабжения</div>
      </div>

      <div className={s.label}>Выкуп пленника</div>
      <div className={s.listContainer}>
        <div>Игрок приводит пленника, за которого он хочет получить выкуп</div>
        <div>У пленника подсчитывают максимальное количество броневых и живых хитов</div>
        <div>Интендант выдает пленителю указанную сумму средств</div>
        <div>Интендант выдает пленнику карту "Пленник", которая будет подтверждение того что игрок вернулся из плена</div>
        <div>Интендант выводит пленника из лагеря, проверяет что тот одел повязку "Мертв" и указывает что ему надо добраться до своего лагеря</div>
      </div>

      <div className={s.label}>Производство</div>
      <div className={s.listContainer}>
        <div>При сертификации лагеря мастерами будет выдан ранг каждому из экономических строений</div>
        <div>Согласно этому рангу интенданту будет выдан лимит на количество ресурсов которые может произвести эта постройка за день</div>
        <div>При заявке производства интендант выдает производственную заготовку</div>
        <div>При получении заготовки обратно, которая обработана по схеме, интендант выдает ресурсы согласно рейтингу постройки</div>
        <div>ПРИМЕЧАНИЕ</div>
        <li>Интендант может уменьшить количество выданных ресурсов, если производственная заготовка была плохого качества</li>
      </div>

      <div className={s.label}>Оборона лагеря</div>
      <div className={s.listContainer}>
        <div>При наличии штурмующей стороны, интендант должен встретить их и обозначить их место построения возле межевого столба лагеря</div>
        <div>Интендант в течении 15 минут контролирует построение обоих сторон согласно подготовленным лагерем укреплениям</div>
        <div>Все внешние боевые взаимодействия кроме присоединения к атакующей стороне в течении 15 минут должны присеваться интендантом</div>
        <div>Для штурмующих интендант должен обозначить: ширину штурмующей зоны, ответить на вопросы особенностей укрепления лагеря</div>
        <div>Интендант должен предупредить, что на период штурма не действую зелья, медкомплекта и ремкомплекты</div>
        <div>Дать четкий сигнал для начала штурма</div>
        <div>При этом проследить, что во время штурма ЛЮБЫЕ взаимодействия с не участниками штурма отсутствуют</div>
        <div>Однозначно определить победившую сторону</div>
        <div>После штурма дается 15 минут на решение спорных ситуаций через интенданта</div>
      </div>

      <div className={s.label}>Обыск лагеря</div>
      <div className={s.listContainer}>
        <div>Интендант определяет количество игроков участвующих в обыске лагеря</div>
        <div>Если лагерь не готов к обыску интендант вправе выдать все ценности накопленные лагерем</div>
        <div>Интендант описывает сыщикам правила проведения обыска внутри лагеря (определяются интендантом)</div>
        <div>Интендант следит за их исполнением, и вправе остановить обыск в случае несоблюдений указанных правил</div>
      </div>

      <div className={s.label}>Выступление</div>
      <div className={s.listContainer}>
        <div>В течении игры в лагере могут выступать различные артисты</div>
        <div>Артист должен сам согласовать свое выступление с капитаном или интендантом</div>
        <div>Интендант сам определяет качество проведенного выступления</div>
        <div>Максимально возможный показатель очков отдыха который может выдать интендант артисту - это количество слушателей</div>
        <div>ПРИМЕЧАНИЕ</div>
        <li>Если артистов несколько то плата выдается одна на всех, если они давали одно выступление</li>
        <li>Выступлением считается само мероприятие, а не каждая композиция/акт/фигура внутри него</li>

      </div>
    </div>
  )
}