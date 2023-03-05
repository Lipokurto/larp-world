import Carousel from 'better-react-carousel';

import ob01 from '../../../assets/rules/monsters/obsessed/01.jpg';
import ob02 from '../../../assets/rules/monsters/obsessed/02.jpg';
import ob03 from '../../../assets/rules/monsters/obsessed/03.jpg';
import ob04 from '../../../assets/rules/monsters/obsessed/04.jpg';

import s from './obsessed.module.css';

export const obsessed = {
  label: 'Внешний вид',
  text: 
    <>      
      <div>      
        <div className={s.container}>
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
                <img src={ob01} alt='Monsters' />
              </Carousel.Item>
              <Carousel.Item>
                <img src={ob02} alt='Monsters' />
              </Carousel.Item>
              <Carousel.Item>
                <img src={ob03} alt='Monsters' />
              </Carousel.Item>
              <Carousel.Item>
                <img src={ob04} alt='Monsters' />
              </Carousel.Item>
            </Carousel>
        </div>
      </div>

      <h3>Описание</h3>
      <div>Одержимые - безвольные слуги чудовища, они больше не могут стать людьми</div>
      <div>В образе одержимого должна прослеживаться общая схожесть стилистики чудовища, который порадил этого одержимого</div>
      <div>Количество хитов одержимого будет определятся его образом, чем он крупнее и гротескнее тем больше хитов получит одержимый</div>
    </>
}