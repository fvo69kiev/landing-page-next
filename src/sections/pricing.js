/** @jsx jsx */
import { jsx, Container, Box, Flex } from 'theme-ui'
import { keyframes } from '@emotion/core'
import React, { useState } from 'react'
import Carousel from 'react-multi-carousel'
import PriceCard from 'components/price-card'
// import ButtonGroup from 'components/button-group'
import Slogan from 'components/slogan'
import { IoIosCheckmarkCircle, IoIosCloseCircle, IoMdRainy, IoIosBed, IoMdRestaurant, IoMdShirt, IoMdBed, IoIosAddCircleOutline } from 'react-icons/io'
import BgPricing from 'assets/pricing/bg-pricing.jpg'

import Ft20 from 'assets/pricing/ft-20.svg'
import Ft40 from 'assets/logo.svg'
import OnePerson from 'assets/pricing/one-person.svg'
import TwoPerson from 'assets/pricing/two-persons.svg'
import FourPerson from 'assets/pricing/four-persons.svg'

const packages = {
  base: [
    {
      id: 1,
      name: 'Бюджет (15 кв.м.)',
      imgDescription: `${Ft20}`,
      description: '20ft HC контейнер',
      priceWithUnit: 'от $9 500',
      buttonText: 'Подробнее',
      source: 'https://shop-nextjs-vik.herokuapp.com/product/61ca26ef55f77a001645fc7e',
      anotherOption: `${OnePerson}`,
      points: [
        {
          id: 1,
          icon: <IoMdRainy />,
          text: 'Ванная комната',
          isAvailable: true,
        },
        {
          id: 2,
          icon: <IoMdRestaurant />,
          text: "Компактная кухня",
          isAvailable: true,
        },
        {
          id: 3,
          icon: <IoMdShirt />,
          text: 'Гардероб',
          isAvailable: true,
        },
        {
          id: 4,
          icon: <IoIosBed />,
          text: 'Диван-трансформер',
          isAvailable: true,
        },
        {
          id: 5,
          icon: <IoIosCloseCircle />,
          text: 'Панорамные окна',
          isAvailable: true,
        },
      ],
    },
    {
      id: 2,
      name: 'Эконом (15 кв.м.)',
      imgDescription: `${Ft20}`,
      description: '20ft HC контейнер',
      priceWithUnit: 'от $11 414',
      buttonText: 'Подробнее',
      source: 'https://shop-nextjs-vik.herokuapp.com/product/61767dd55dd10f2088231db1',
      anotherOption: `${OnePerson}`,
      points: [
        {
          id: 1,
          icon: <IoMdRainy />,
          text: 'Ванная комната',
          isAvailable: true,
        },
        {
          id: 2,
          icon: <IoMdRestaurant />,
          text: "Компактная кухня",
          isAvailable: true,
        },
        {
          id: 3,
          icon: <IoMdShirt />,
          text: 'Гардероб',
          isAvailable: true,
        },
        {
          id: 4,
          icon: <IoIosBed />,
          text: 'Диван-трансформер',
          isAvailable: true,
        },
        {
          id: 5,
          icon: <IoIosCheckmarkCircle />,
          text: 'Панорамные окна',
          isAvailable: true,
        },
      ],
    },
    {
      id: 3,
      header: 'Популярный',
      headerIcon: <IoIosCheckmarkCircle />,
      name: 'Комфорт (30 кв.м.)',
      imgDescription: `${Ft40}`,
      description: '40ft HC контейнер',
      priceWithUnit: 'от $18 557',
      buttonText: 'Подробнее',
      source: 'https://shop-nextjs-vik.herokuapp.com/product/61767e985dd10f2088231db8',
      anotherOption: `${TwoPerson}`,
      points: [
        {
          id: 1,
          icon: <IoMdRainy />,
          text: 'Ванная комната',
          isAvailable: true,
        },
        {
          id: 2,
          icon: <IoMdRestaurant />,
          text: "Полноценная кухня",
          isAvailable: true,
        },
        {
          id: 3,
          icon: <IoMdShirt />,
          text: 'Прихожая с гардеробом',
          isAvailable: true,
        },
        {
          id: 4,
          icon: <IoIosBed />,
          text: 'Столовая',
          isAvailable: true,
        },
        {
          id: 5,
          icon: <IoMdBed />,
          text: 'Спальная комната',
          isAvailable: true,
        },
      ],
    },
    {
      id: 4,
      name: 'Премиум (60 кв.м.)',
      imgDescription: `${Ft40}`,
      description: '40ft HC контейнера',
      priceWithUnit: 'от $32 842',
      buttonText: 'Подробнее',
      source: 'https://shop-nextjs-vik.herokuapp.com/product/61767f575dd10f2088231dc7',
      anotherOption: `${FourPerson}`,
      points: [
        {
          id: 1,
          icon: <IoMdRainy />,
          text: 'Ванная комната',
          isAvailable: true,
        },
        {
          id: 2,
          icon: <IoMdRestaurant />,
          text: "Кухня с барной стойкой",
          isAvailable: true,
        },
        {
          id: 3,
          icon: <IoMdShirt />,
          text: 'Шкаф-купе - 2 шт',
          isAvailable: true,
        },
        {
          id: 4,
          icon: <IoIosBed />,
          text: 'Столовая и зона отдыха',
          isAvailable: true,
        },
        {
          id: 5,
          icon: <IoMdBed />,
          text: 'Просторная спальня - 2 шт',
          isAvailable: true,
        },
      ],
    },
  ],
  lux: [
    {
      id: 1,
      name: 'Бюджет (15 кв.м.)',
      imgDescription: `${Ft20}`,
      description: '20ft HC контейнер',
      priceWithUnit: 'от $12 500',
      buttonText: 'Подробнее',
      source: 'https://shop-nextjs-vik.herokuapp.com/product/61ca26ef55f77a001645fc7e',
      anotherOption: `${OnePerson}`,
      points: [
        {
          id: 1,
          icon: <IoMdRainy />,
          text: 'Ванная комната',
          isAvailable: true,
        },
        {
          id: 2,
          icon: <IoMdRestaurant />,
          text: "Компактная кухня",
          isAvailable: true,
        },
        {
          id: 3,
          icon: <IoMdShirt />,
          text: 'Гардероб',
          lux: <IoIosAddCircleOutline />,
          isAvailable: true,
        },
        {
          id: 4,
          icon: <IoIosBed />,
          text: 'Диван-трансформер',
          lux: <IoIosAddCircleOutline />,
          isAvailable: true,
        },
        {
          id: 5,
          icon: <IoIosCloseCircle />,
          text: 'Панорамные окна',
          isAvailable: true,
        },
      ],
    },
    {
      id: 2,
      name: 'Эконом (15 кв.м.)',
      imgDescription: `${Ft20}`,
      description: '20ft HC контейнер',
      priceWithUnit: 'от $15 000',
      buttonText: 'Подробнее',
      source: 'https://shop-nextjs-vik.herokuapp.com/product/61767dd55dd10f2088231db1',
      anotherOption: `${OnePerson}`,
      points: [
        {
          id: 1,
          icon: <IoMdRainy />,
          text: 'Ванная комната',
          isAvailable: true,
        },
        {
          id: 2,
          icon: <IoMdRestaurant />,
          text: "Компактная кухня",
          isAvailable: true,
        },
        {
          id: 3,
          icon: <IoMdShirt />,
          text: 'Гардероб',
          lux: <IoIosAddCircleOutline />,
          isAvailable: true,
        },
        {
          id: 4,
          icon: <IoIosBed />,
          text: 'Диван-трансформер',
          lux: <IoIosAddCircleOutline />,
          isAvailable: true,
        },
        {
          id: 5,
          icon: <IoIosCheckmarkCircle />,
          text: 'Панорамные окна',
          isAvailable: true,
        },
      ],
    },
    {
      id: 3,
      header: 'Популярный',
      headerIcon: <IoIosCheckmarkCircle />,
      name: 'Комфорт (30 кв.м.)',
      imgDescription: `${Ft40}`,
      description: '40ft HC контейнер',
      priceWithUnit: 'от $25 000',
      buttonText: 'Подробнее',
      source: 'https://shop-nextjs-vik.herokuapp.com/product/61767e985dd10f2088231db8',
      anotherOption: `${TwoPerson}`,
      points: [
        {
          id: 1,
          icon: <IoMdRainy />,
          text: 'Ванная комната',
          lux: <IoIosAddCircleOutline />,
          isAvailable: true,
        },
        {
          id: 2,
          icon: <IoMdRestaurant />,
          text: "Полноценная кухня",
          lux: <IoIosAddCircleOutline />,
          isAvailable: true,
        },
        {
          id: 3,
          icon: <IoMdShirt />,
          text: 'Прихожая с шкафом-купе',
          isAvailable: true,
        },
        {
          id: 4,
          icon: <IoIosBed />,
          text: 'Столовая',
          isAvailable: true,
        },
        {
          id: 5,
          icon: <IoMdBed />,
          text: 'Спальная комната',
          isAvailable: true,
        },
      ],
    },
    {
      id: 4,
      name: 'Премиум (60 кв.м.)',
      imgDescription: `${Ft40}`,
      description: '40ft HC контейнера',
      priceWithUnit: 'от $39 000',
      buttonText: 'Подробнее',
      source: 'https://shop-nextjs-vik.herokuapp.com/product/61767f575dd10f2088231dc7',
      anotherOption: `${FourPerson}`,
      points: [
        {
          id: 1,
          icon: <IoMdRainy />,
          text: 'Ванная комната',
          lux: <IoIosAddCircleOutline />,
          isAvailable: true,
        },
        {
          id: 2,
          icon: <IoMdRestaurant />,
          text: "Кухня с барной стойкой",
          isAvailable: true,
        },
        {
          id: 3,
          icon: <IoMdShirt />,
          text: 'Шкаф-купе - 2 шт',
          isAvailable: true,
        },
        {
          id: 4,
          icon: <IoIosBed />,
          text: 'Столовая и зона отдыха',
          lux: <IoIosAddCircleOutline />,
          isAvailable: true,
        },
        {
          id: 5,
          icon: <IoMdBed />,
          text: 'Просторная спальня - 2 шт',
          lux: <IoIosAddCircleOutline />,
          isAvailable: true,
        },
      ],
    },
  ],
}

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    draggable: false,
  },
  tablet: {
    breakpoint: { max: 1023, min: 640 },
    items: 2,
    draggable: true,
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
    draggable: true,
  },
}

export default function Pricing() {
  const { base, lux } = packages
  const [state, setState] = useState({
    active: 'base',
    pricingPlan: base,
  })

  const handlePricingPlan = (plan) => {
    if (plan === 'lux') {
      setState({
        active: 'lux',
        pricingPlan: lux,
      })
    } else {
      setState({
        active: 'base',
        pricingPlan: base,
      })
    }
  }

  const sliderParams = {
    additionalTransfrom: 0,
    arrows: false,
    autoPlaySpeed: 3000,
    centerMode: false,
    className: '',
    slidesToSlide: 1,
    items: 3,
    containerClass: 'carousel-container',
    // customButtonGroup: <ButtonGroup />,
    dotListClass: '',
    focusOnSelect: false,
    infinite: false,
    keyBoardControl: false,
    itemClass: '',
    minimumTouchDrag: 80,
    renderButtonGroupOutside: true,
    renderDotsOutside: false,
    responsive: responsive,
    showDots: true,
    sliderClass: '',
  }

  return (
    <section id='pricing' sx={styles.pricing}>
      <Container>
        <Slogan
          slogan='Какая стоимость'
          title='Продажа домов'
        />
        <Flex sx={styles.buttonGroup}>
          <Box sx={styles.buttonGroupInner}>
            <button
              className={state.active === 'base' ? 'active' : ''}
              type='button'
              aria-label='Base'
              onClick={() => handlePricingPlan('base')}
            >
              Базовый
            </button>
            <button
                className={state.active === 'lux' ? 'active' : ''}
                type='button'
                aria-label='Lux'
                onClick={() => handlePricingPlan('lux')}
            >
              Люкс
            </button>
          </Box>
        </Flex>
        <Box sx={styles.pricingWrapper} className='pricing__wrapper'>
          <Carousel {...sliderParams}>
            {state.pricingPlan.map((packageData) => (
                <Box sx={styles.pricingItem} key={packageData.id}>
                  <PriceCard data={packageData} />
                </Box>
            ))}
          </Carousel>
        </Box>
      </Container>
    </section>
  )
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const fadeIn2 = keyframes`
  from {
    transform: translateY(50%);
    opacity: 0;
  }
  to {
		transform: translateY(0);
    opacity: 1;
  }
`;
const styles = {
  pricing: {
    pt: [8, null, 9, null, null, 10],
    pb: [8, null, 9, null, null, 10],
    backgroundImage: `url(${BgPricing})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
  },
  pricingWrapper: {
    mb: '-40px',
    mt: '-40px',
    mx: -3,
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    '&.pricing__wrapper .package__card': {
      '.package__header': {
        animation: `${fadeIn} 0.8s ease-in`,
      },
      'ul > li': {
        animation: `${fadeIn2} 0.7s ease-in`,
      },
      '.package__price': {
        animation: `${fadeIn2} 0.9s ease-in`,
      },
      button: {
        animation: `${fadeIn2} 1s ease-in`,
      },
    },
    '.carousel-container': {
      width: '100%',
      '> ul > li ': {
        display: 'flex',
      },
    },
    '.button__group': {
      display: ['flex', null, null, null, 'none'],
      mb: [4, null, null, null, 0],
    },
  },
  pricingItem: {
    mx: 3,
    display: 'flex',
    flexShrink: 0,
    flex: '1 1 auto',
  },
  buttonGroup: {
    justifyContent: 'center',
    mb: '7',
    mt: ['-15px', '-35px'],
    position: 'relative',
    zIndex: 2,
  },
  buttonGroupInner: {
    display: 'flex',
    padding: '10px',
    margin: '0 auto',
    borderRadius: '10px',
    backgroundColor: '#F7F8FB',
    button: {
      border: 0,
      padding: ['15px 20px', '15px 35px'],
      borderRadius: '10px',
      color: 'text',
      fontSize: [1, 2],
      lineHeight: 1.2,
      fontWeight: 500,
      backgroundColor: 'transparent',
      cursor: 'pointer',
      fontFamily: 'body',
      letterSpacing: '-0.24px',
      transition: 'all 0.3s',
      '&:hover': {
        boxShadow: '0 4px 6px rgba(43,43,43, 0.3)',
      },
      '&.active': {
        color: 'primary',
        backgroundColor: '#ffffff',
        boxShadow: '0 4px 6px rgba(43,43,43, 0.3)',
      },
      '&:focus': {
        outline: 0,
      },
    },
  },
}