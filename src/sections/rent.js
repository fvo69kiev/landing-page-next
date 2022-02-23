/** @jsx jsx */
import {jsx, Container, Heading, Box, Image, Button} from 'theme-ui'
import Slogan from 'components/slogan'
import List from 'components/list'
import Rating from 'components/rating'
import ButtonGroup from 'components/button-group'
import {Link} from 'react-scroll'
import Carousel from 'react-multi-carousel'

import {IoIosPin, IoIosConstruct, IoMdReturnRight, IoIosHammer} from "react-icons/io"
import BgRent from 'assets/pricing/bg-rent.jpg'
import OnePerson from 'assets/pricing/one-person.svg'
import TwoPerson from 'assets/pricing/two-persons.svg'
import FourPerson from 'assets/pricing/four-persons.svg'


const locationWorks = {
  location: [
    {
      id: 1,
      title: 'Место установки дома',
      icon: <IoIosPin />,
      text: 'Частный сектор',
      isAvailable: true,
    },
    {
      id: 2,
      title: 'Место установки дома',
      icon: <IoIosPin />,
      text: 'Дачный участок',
      isAvailable: true,
    },
    {
      id: 3,
      title: 'Место установки дома',
      icon: <IoIosPin />,
      text: 'Вариант временного домика',
      isAvailable: false,
    },
    {
      id: 4,
      title: 'Место установки дома',
      icon: <IoIosPin />,
      text: 'Огород возле дома, пустырь',
      isAvailable: true,
    },
  ],
  works: [
    {
      id: 1,
      title: 'Необходимые работы',
      icon: <IoIosConstruct />,
      text: 'Обоснование фундамента',
      isAvailable: true,
    },
    {
      id: 2,
      title: 'Необходимые работы',
      icon: <IoMdReturnRight />,
      text: 'Подключение коммуникаций',
      isAvailable: true,
    },
    {
      id: 3,
      title: 'Необходимые работы',
      icon: <IoIosHammer />,
      text: 'Обустройство терассы',
      isAvailable: true,
    },
  ],
}

const data = [
  {
    id: 1,
    review: 4,
    title: 'Бюджет (15 кв.м.)',
    location: locationWorks.location,
    works: locationWorks.works,
    avatar: OnePerson,
    price: '$200/месяц',
  },
  {
    id: 2,
    review: 5,
    title: 'Эконом (15 кв.м.)',
    location: locationWorks.location,
    works: locationWorks.works,
    avatar: OnePerson,
    price: '$300/месяц',
  },
  {
    id: 3,
    review: 5,
    title: 'Комфорт (30 кв.м.)',
    location: locationWorks.location,
    works: locationWorks.works,
    avatar: TwoPerson,
    price: '$400/месяц',
  },
  {
    id: 4,
    review: 4,
    title: 'Премиум (60 кв.м.)',
    location: locationWorks.location,
    works: locationWorks.works,
    avatar: FourPerson,
    price: '$500/месяц',
  },
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
  additionalTransfrom: 0,
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

export default function RentCard() {

  return (
   <section id='rent' sx={styles.rent}>
     <Container>
       <Slogan
          slogan='Сколько стоит'
          title='Аренда домов'
       />
     <Box sx={styles.carouselWrapper}>
       <Carousel {...carouselParams}>
         {data.map((item) => (
             <Box sx={styles.reviewCard} key={item.id}>
               <Rating rating={item.review} />
               <Heading as='h3' sx={styles.title}>
                 {item.title}
               </Heading>
               <List items={item.location} childStyle={styles.listItem} />
               <List items={item.works} childStyle={styles.listItem} />
               <div className='card-footer'>
                 <div className='image'>
                   <Image src={item.avatar} alt='Client Image' />
                 </div>
                 <div className='reviewer-info'>
                   <Heading as='h4' sx={styles.heading}>
                     {item.price}
                   </Heading>
                 </div>
               </div>
               <Link
                   to='form-order'
                   spy={true}
                   smooth={true}
                   offset={-70}
                   duration={700}
               >
                 <Box style={{textAlign: 'center', paddingTop: '35px',}}>
                   <Button
                       variant='primary'
                       arial-label=''
                       sx={styles.buttonRent}
                   >
                     Подать заявку
                   </Button>
                 </Box>
               </Link>
             </Box>
         ))}
       </Carousel>
     </Box>
     </Container>
   </section>
  )
}

const styles = {
  rent: {
    pt: [8, null, 9, null, null, 10],
    pb: [4, null, 4, null, null, 7],
    backgroundImage: `url(${BgRent})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
  },
  carouselWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'column',
    alignItems: 'flex-end',
    mt: '-30px',
    px: '15px',
    '.carousel-container': {
      width: '100%',
      maxWidth: [
        '100%',
        null,
        null,
        '750px',
        '1000px',
        '1180px',
        null,
        'calc(50% + 865px)',
      ],
      mr: ['auto', null, null, null, null, null, null, '-220px'],
      ml: 'auto',
      '.react-multi-carousel-item': {
        transition: 'all 0.25s',
      },
      '.react-multi-carousel-item--active:nth-of-type(4n)': {
        opacity: '0.5',
        '@media screen and (max-width: 1620px)': {
          opacity: 1,
        },
      },
    },
  },
  reviewCard: {
    boxShadow: '0px 0px 1px rgba(38, 78, 118, 0.35)',
    transition: 'all 0.3s',
    borderRadius: '20px',
    opacity: .85,
    p: [
      '20px 10px 25px',
      '20px 15px 25px',
      '20px 10px 25px',
      '25px 20px 30px 30px',
      '20px 20px 25px',
      '25px 20px 30px 30px',
    ],
    bg: 'white',
    textAlign: 'left',
    m: [
      '18px 5px 20px 5px',
      '18px 10px 30px 10px',
      '18px 15px 20px 10px',
      '18px 15px 20px 10px',
      '20px 10px 30px',
    ],
    '&:hover': {
      boxShadow: '0px 4px 25px rgba(234,58,96, 0.45)',
      opacity: 1,
    },
    '.rating': {
      mb: [1, null, null, 2],
      ul: {
        pl: 0,
        listStyle: 'none',
        mb: 0,
        display: 'flex',
      },
      svg: {
        marginRight: '2px',
        '&:last-of-type': {
          marginRight: 0,
        },
      },
      '.star': {
        color: 'primary',
        mr: '1px',
      },
      '.star-o': {
        color: '#ddd',
        mr: '1px',
      },
    },
    '.card-footer': {
      display: 'flex',
      alignItems: 'center',
      marginTop: [5, null, null, '33px'],
      '.image': {
        flexShrink: 0,
        mr: [3, null, null, 4],
        display: 'flex',
        img: {
          width: '55px',
          height: '55px',
          borderRadius: '50%',
          objectFit: 'cover',
        },
      },
    },
  },
  title: {
    fontSize: [2, 4],
    fontWeight: 700,
    mb: [3, null, null, '22px'],
    color: 'text',
    lineHeight: 1.6,
  },
  description: {
    fontSize: [1, null, null, 2],
    fontWeight: 'normal',
    color: 'text',
    lineHeight: [1.85, null, 2],
  },
  heading: {
    fontSize: [2, null, null, 4],
    fontWeight: 700,
    mb: '3px',
    color: 'text',
    lineHeight: 1.3,
  },
  designation: {
    color: 'primary',
    fontWeight: '500',
    fontSize: 1,
    lineHeight: 1.4,
  },
  listItem: {
    // fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: [1, 2],
    lineHeight: [1.75, 1.6],
    mb: 3,
    alignItems: 'flex-start',
    color: 'text',
    '&.closed': {
      opacity: 0.55,
      button: {
        color: 'primary',
      },
    },
  },
  buttonRent: {
    border: '1px primary solid',
    backgroundColor: 'primary_dark',
    transition: 'all .7s',
    '&:hover': {
      color: 'primary',
      backgroundColor: 'background',
    },
  },

  // buttonGroup: {
  //   textAlign: 'center',
  //   mt: ['30px', null, null, null, '35px'],
  //   '.free__trail': {
  //     color: 'secondary',
  //     width: '100%',
  //     justifyContent: 'center',
  //     fontWeight: 700,
  //     fontSize: ['14px', 1],
  //     p: '20px 0 0',
  //   },
  // },
}