/** @jsx jsx */
import {jsx, Container, Grid, Box, Heading, Text, Image, Button} from 'theme-ui'
import Slogan from 'components/slogan'
import {Link} from 'react-scroll'

import PatternBG from 'assets/patternBG.png'
import ArrowOdd from 'assets/arrowOdd.svg'
import ArrowEven from 'assets/arrowEven.svg'

import Apply from 'assets/work/apply.svg'
import Contract from 'assets/work/contract.svg'
import Building from 'assets/work/building.svg'
import House from 'assets/work/house.svg'

const data = [
  {
    id: `${Apply}`,
    title: 'Заявка',
    text: 'Вы подаёте заявку на этом сайте',
  },
  {
    id: `${Contract}`,
    title: 'Договор',
    text: 'Мы Вас консультируем, помогаем с проектом и заключаем договор',
  },
  {
    id: `${Building}`,
    title: 'Подготовка',
    text: 'Мы строим для Вас дом или готовим к продаже, аренде',
  },
  {
    id: `${House}`,
    title: 'Готово',
    text: 'Вы получаете дом с интерьером "под ключ"',
  },
]

export default function HowWeWork() {
  return (
    <section sx={styles.workflow}>
      <Container>
        <Slogan
          slogan='Как мы работаем?'
          title='Порядок действий'
          isWhite={true}
        />
        <Grid sx={styles.grid}>
          {data.map((item) => (
              <Box sx={styles.card} key={item.id}>
                <Box sx={styles.iconBox}>
                  <Image sx={styles.img} src={item.id}  alt={item.title} />
                </Box>
                <Box sx={styles.wrapper}>
                  <Heading sx={styles.wrapper.title}>{item.title}</Heading>
                  <Text sx={styles.wrapper.subTitle}>{item.text}</Text>
                </Box>
              </Box>
          ))}
        </Grid>
        <Link
            to='form-order'
            spy={true}
            smooth={true}
            offset={-70}
            duration={700}
        >
          <Box sx={styles.contentBox}>
            <Button
                variant='primary'
                sx={styles.buttonHowWeWork}
            >
              Подать заявку
            </Button>
          </Box>
        </Link>
      </Container>
    </section>
  )
}

const styles = {
  workflow: {
    backgroundColor: 'primary',
    backgroundImage: `url(${PatternBG})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    position: 'relative',
    py: [8, null, 9, null, null, 10],
  },
  grid: {
    pb: -1,
    pt: 0,
    gridGap: [
      '35px 0',
      null,
      '45px 30px',
      null,
      '50px 25px',
      null,
      null,
      '50px 65px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
    ],
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    textAlign: ['center', null, 'left'],
    width: ['100%', '80%', '100%'],
    mx: ['auto'],
    px: [4, null, null, 0],
    '&::before': {
      position: 'absolute',
      content: '""',
      top: 0,
      left: [0, null, null, null, null, 80, null, 90],
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'center center',
      width: 215,
      height: 60,
      '@media screen and (max-width:1220px)': {
        display: 'none',
      },
    },
    '&:nth-of-type(2n-1)::before': {
      backgroundImage: `url(${ArrowOdd})`,
    },
    '&:nth-of-type(2n)::before': {
      backgroundImage: `url(${ArrowEven})`,
      top: 17,
    },
    '&:last-child::before': {
      display: 'none',
    },
  },
  iconBox: {
    width: ['50px', null, '60px', null, null, '80px'],
    height: ['50px', null, '60px', null, null, '80px'],
    flexShrink: 0,
    borderRadius: [15, null, 23, null, null, 30],
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    mb: [5, null, null, null, null, 6],
    mx: ['auto', null, 0],
    fontSize: [6, null, 7, null, null, '30px'],
    fontWeight: 700,
    justifyContent: 'center',
    color: '#234582',
  },
  img: {
    width: '65px',
    height: '65px',
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    mt: '-5px',
    title: {
      fontSize: [3, null, 4, null, null, 5],
      color: 'white',
      lineHeight: [1.4, null, null, null, null, 1.55],
      pr: [0, null, null, null, null, 2],
      mb: [2, 3],
    },
    subTitle: {
      fontSize: 2,
      fontWeight: 400,
      lineHeight: [1.5, null, null, 1.6, 1.7],
      color: 'white',
      opacity: 0.75,
      pr: [0, null, null, null, null, 5],
    },
  },
  contentBox: {
    width: ['100%', '90%', '535px', null, '57%', '60%', '68%', '60%'],
    mx: 'auto',
    textAlign: 'center',
    pt: '50px',
    mb: '-30px',
  },
  buttonHowWeWork: {
    border: '1px white solid',
    backgroundColor: 'primary_dark',
    transition: 'all .7s',
    '&:hover': {
      color: 'heading',
      backgroundColor: 'background',
    }
  },
}
