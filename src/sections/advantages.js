/** @jsx jsx */
import {jsx, Container, Grid} from 'theme-ui'
import Slogan from 'components/slogan'
import AdvantCard from 'components/advant-card'

import BgAdvant from 'assets/advantages/bg-advant.jpg'
import Durability from 'assets/advantages/durability.svg'
import Assembly from 'assets/advantages/assembly.svg'
import Mobility from 'assets/advantages/mobility.svg'
import Modularity from 'assets/advantages/modularity.svg'

const data = [
  {
    id: 1,
    imgSrc: Durability,
    altText: 'Долговечность',
    title: 'Долговечность',
    text: 'Заводское производство морского контейнера дает гарантированную прочность каркаса дома',
  },
  {
    id: 2,
    imgSrc: Assembly,
    altText: 'Быстрая сборка',
    title: 'Быстрая сборка',
    text: 'Простая геометрия контейнера способствует изготовлению дома за 1 месяц',
  },
  {
    id: 3,
    imgSrc: Mobility,
    altText: 'Мобильность',
    title: 'Мобильность',
    text: 'В любой момент можно сменить место расположение дома',
  },
  {
    id: 4,
    imgSrc: Modularity,
    altText: 'Модульность',
    title: 'Модульность',
    text: 'Эксклюзивное модульное проектирование дома под заказчика',
  },
]

export default function ContainerAdvantages() {
  return (
    <section sx={styles.advant}>
      <Container>
        <Slogan
            slogan='Почему морской контейнер'
            title='Достоинства контейнера'
            bgAdvant={true}
        />
        <Grid sx={styles.grid}>
          {data.map((item) => (
              <AdvantCard
                  key={item.id}
                  src={item.imgSrc}
                  alt={item.altText}
                  title={item.title}
                  text={item.text}
              />
          ))}
        </Grid>
      </Container>
    </section>
  )
}

const styles = {
  advant: {
    pt: [8, null, 9, null, null, 10],
    pb: [8, null, 9, null, null, 10],
    backgroundImage: `url(${BgAdvant})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
  },
  grid: {
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: [
      '35px 0',
      null,
      '40px 40px',
      '50px 60px',
      '30px',
      '50px 40px',
      '55px 90px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
    ],
  },
}