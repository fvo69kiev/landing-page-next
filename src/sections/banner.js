/** @jsx jsx */
import {jsx, Container, Box, Heading, Text, Image, Button } from 'theme-ui'

import { Link } from 'react-scroll'
import Carousel from 'react-multi-carousel'
import ButtonGroup from "components/button-group"

import BgBanner from 'assets/banner/banner.jpg'

import Home from 'assets/banner/home.svg'
import Relax from 'assets/banner/relax.svg'
import Office from 'assets/banner/office.svg'
import Warehouse from 'assets/banner/warehouse.svg'
import Cafe from 'assets/banner/cafe.svg'
import Tools from 'assets/banner/tools.svg'
import Bytovka from 'assets/banner/bytovka.svg'


const data = [
  {id: 1, title: 'дом', img: Home},
  {id: 2, title: 'дача', img: Relax},
  {id: 3, title: 'офис', img: Office},
  {id: 4, title: 'склад', img: Warehouse},
  {id: 5, title: 'кофейня', img: Cafe},
  {id: 6, title: 'мастерская', img: Tools},
  {id: 7, title: 'бытовка', img: Bytovka},
]

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1619 },
    items: 4,
    slidesToSlide: 4, // optional, default to 1.
  },
  laptop: {
    breakpoint: { max: 1619, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
}

const carouselParams = {
  additionalTransfrom: 1,
  arrows: false,
  autoPlaySpeed: 3000,
  centerMode: false,
  className: "",
  containerClass: "carousel-container",
  customButtonGroup: <ButtonGroup />,
  dotListClass: "",
  draggable: true,
  focusOnSelect: false,
  infinite: true,
  itemClass: "",
  keyBoardControl: true,
  minimumTouchDrag: 80,
  renderButtonGroupOutside: true,
  renderDotsOutside: false,
  responsive: responsive,
  showDots: false,
  sliderClass: "",
  slidesToSlide: 1,
  items: 3,
}


export default function Banner() {

  return (
    <section sx={styles.banner} id='home'>
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox}>
          <Heading as='h1' variant='heroPrimary' style={{color: 'white'}}>
            Дом из морских контейнеров
          </Heading>
          <Text as='p' variant='heroSecondary' style={{color: 'white'}}>
            под ключ за 1 месяц
          </Text>
          <Box  >
            <Carousel {...carouselParams}>
              {data.map((item) => (
                  <Box key={item.id} style={{marginRight: '10px'}}>
                    <Image src={item.img} alt={item.title} width={100} height={75} />
                    <Text as='p' style ={{color: 'white', marginTop: '-15px', textAlign: 'center'}}>{item.title}</Text>
                  </Box>
              ))}
            </Carousel>
          </Box>
          <Link
              to='form-order'
              spy={true}
              smooth={true}
              offset={-70}
              duration={700}
          >
            <Button
                variant='primary'
                style={{border: '1px white solid'}}
            >
              Подать заявку
            </Button>
          </Link>
        </Box>
      </Container>
    </section>
  )
}

const styles = {
  banner: {
    pt: ['140px', '145px', '155px', '170px', null, null, '180px', '215px'],
    pb: [2, null, 0, null, 2, 0, null, 5],
    position: 'relative',
    zIndex: 2,
    backgroundImage: `url(${BgBanner})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
      container: {
      minHeight: 'inherit',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      },
      contentBox: {
        width: ['100%', '90%', '535px', null, '57%', '60%', '68%', '60%'],
        mx: 'auto',
        textAlign: 'center',
        mb: ['40px', null, null, null, null, 7],
      },
  },
}