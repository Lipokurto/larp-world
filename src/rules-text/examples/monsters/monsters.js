import Carousel from 'better-react-carousel';

import mon01 from '../../../assets/rules/monsters/monsters/01.jpg';
import mon02 from '../../../assets/rules/monsters/monsters/02.jpg';
import mon03 from '../../../assets/rules/monsters/monsters/03.jpg';
import mon04 from '../../../assets/rules/monsters/monsters/04.jpg';

import s from './obsessed.module.css';

export const monsters = {
  label: 'Внешний вид',
  text: 
    <>      
      <div>      
        <div class={s.container}>
            <Carousel 
              cols={1}
              rows={1}
              gap={10}
              loop
              showDots
              mobileBreakpoint={[
                {
                  breakpoint: 800,
                  cols: 1,
                  rows: 1,
                  gap: 10,
                  loop: true,
                }
              ]}
            >
              <Carousel.Item>
                <img src={mon01} alt='Monsters' />
              </Carousel.Item>
              <Carousel.Item>
                <img src={mon02} alt='Monsters' />
              </Carousel.Item>
              <Carousel.Item>
                <img src={mon03} alt='Monsters' />
              </Carousel.Item>
              <Carousel.Item>
                <img src={mon04} alt='Monsters' />
              </Carousel.Item>
            </Carousel>
        </div>
      </div>

      <h3>Описание</h3>
      <div>Чудовища - это это порождения злой воли высших существ</div>
      <div>Они могут мыслить здраво, общаться в форме чудища, но их объеденяет одно - подчинение злым силам</div>
      <div>Внешний облик чудовищ крайне сильно искривлен и преобразован, и вряд ли вы встретите вдух одинаковых чудовищ</div>
    </>
}