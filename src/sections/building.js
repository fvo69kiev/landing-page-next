/** @jsx jsx */
import {jsx, Container, Grid, Box, Heading, Text, Image, Button} from 'theme-ui'
import Slogan from 'components/slogan'
import {Link} from 'react-scroll'

import PatternBG from 'assets/patternBG.png'
import ArrowOdd from 'assets/arrowOdd.svg'
import ArrowEven from 'assets/arrowEven.svg'

import Purchase from 'assets/building/purchase.svg'
import Delivery from 'assets/building/delivery.svg'
import Preparing from 'assets/building/preparing.svg'
import Opening from 'assets/building/opening.svg'
import Lathing from 'assets/building/lathing.svg'
import Electricity from 'assets/building/electricity.svg'
import Spray from 'assets/building/spray.svg'
import Plumbing from 'assets/building/plumbing.svg'
import Floor from 'assets/building/floor.svg'
import Tiles from 'assets/building/tiles.svg'
import Spatula from 'assets/building/spatula.svg'
import TilesWall from 'assets/building/tiles-wall.svg'
import PaintRoller from 'assets/building/paint-roller.svg'
import Door from 'assets/building/door.svg'
import Fan from 'assets/building/fan.svg'
import Ceiling from 'assets/building/ceiling.svg'
import Window from 'assets/building/window.svg'
import Heating from 'assets/building/heating.svg'
import Furniture from 'assets/building/furniture.svg'
import HouseHand from 'assets/building/house-hand.svg'

const data = [
  {
    id: `${Purchase}`,
    title: 'покупка',
    text: 'Проверка контейнера на радиацинную и химическую безопасность, покупка у постоянных поставщиков',
  },
  {
    id: `${Delivery}`,
    title: 'доставка',
    text: 'Транспортировка контейнеровозом морского контейнера к месту строительства дома',
  },
  {
    id: `${Preparing}`,
    title: 'подготовка',
    text: 'Демонтаж старого пола. Рихтование, зачистка, ошкуривание и грунтование основания каркаса контейнера',
  },
  {
    id: `${Opening}`,
    title: 'проемы',
    text: 'Вырезание и укрепление проемов под двери и окна. Устройство консолей для крепления каркасов внутренней обшивки (наваривание закладных)',
  },
  {
    id: `${Lathing}`,
    title: 'обрешетка',
    text: 'Установка обрешетки на потолки и стены (брус 25х50 мм.,подготовка, монтаж)',
  },
  {
    id: `${Electricity}`,
    title: 'электромонтаж',
    text: 'Устройство электропроводки, работы включая материалы',
  },
  {
    id: `${Spray}`,
    title: 'утепление',
    text: 'Утепление стен напыляемой теплоизоляцией, материалом ППУ. Толщиной 30 мм',
  },
  {
    id: `${Plumbing }`,
    title: 'сантехника',
    text: 'Устройство холодного водоснабжения, горячего водоснабжения, канализации внутри помещения',
  },
  {
    id: `${Floor}`,
    title: 'теплый пол',
    text: 'Укладка утеплителя на черновой пол. Устройство теплого пола из сшитого полиэтилена. Заливка бетоном',
  },
  {
    id: `${Tiles}`,
    title: 'плитка',
    text: 'Укладка керамической плитки на пол',
  },
  {
    id: `${Spatula}`,
    title: 'обшивка',
    text: 'Устройство финишной обшивки стен гипсокартонными листами и их шпатлевка',
  },
  {
    id: `${TilesWall}`,
    title: 'плитка',
    text: 'Укладка керамической плитки на стены',
  },
  {
    id: `${PaintRoller}`,
    title: 'фасад',
    text: 'Грунтовка, окраска фасада',
  },
  {
    id: `${Door}`,
    title: 'дверь',
    text: 'Установка металлической входной двери с двусторонней окраской и обшивкой композитными панелями',
  },
  {
    id: `${Fan}`,
    title: 'вентиляция',
    text: 'Установка/подключение кондиционера, системы вентиляции',
  },
  {
    id: `${Ceiling}`,
    title: 'потолок',
    text: 'Монтаж подвесных потолков. Пропитка потолка антисептиком и установка пластиковых наличников',
  },
  {
    id: `${Window}`,
    title: 'окна',
    text: 'Монтаж оконных систем',
  },
  {
    id: `${Heating}`,
    title: 'отопление',
    text: 'Монтаж отопительного оборудования, адаптеров для подключения к внешним коммуникациям',
  },
  {
    id: `${Furniture}`,
    title: 'отделка',
    text: 'Стиль минимализма. Мебель трансформер для всех зон дома',
  },
  {
    id: `${HouseHand}`,
    title: 'готовность',
    text: 'Сдача дома заказчику',
  },
]

export default function Building() {
  return (
    <section sx={styles.building}  id='building'>
      <Container>
        <Slogan
          slogan='Как мы возводим дом'
          title='Этапы строительства'
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
    building: {
        backgroundColor: 'primary',
        backgroundImage: `url(${PatternBG})`,
        backgroundRepeat: `no-repeat`,
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        position: 'relative',
        py: [8, null, 9, null, null, 10],
    },
    grid: {
        mb: -1,
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
        justifyContent: 'center',
        mb: [5, null, null, null, null, 6],
        mx: ['auto', null, 0],
        fontSize: [6, null, 7, null, null, '14px'],
        fontWeight: 700,
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
            textTransform: 'uppercase',
            fontSize: [3, null, 4, null, null, 5],
            color: 'white',
            lineHeight: [1.4, null, null, null, null, 1.5],
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