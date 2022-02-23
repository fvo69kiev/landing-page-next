/** @jsx jsx */
import {jsx, Container, Box, Heading, Text, Image, Button} from 'theme-ui'
import { Link } from 'react-scroll'

import OnePerson from 'assets/banner/onePerson.svg'
import TwoPerson from 'assets/banner/twoPerson.svg'


export default function Banner() {
  return (
    <section sx={styles.banner} id='home'>
      <Container sx={styles.banner.container}>
        <Image src={OnePerson} width={200} height={200} alt='Дом' />
            <Heading as='h1' variant='heroPrimary' style={{color: 'white',}}>
              Дом из морских контейнеров
            </Heading>
        <Image src={TwoPerson} width={200} height={200} alt='Контейнер' />
      </Container>
            <Text as='p' variant='heroSecondary' style={{color: 'white'}}>
                  под ключ за 1 месяц
            </Text>
      <Box  style={{paddingBottom: '35px',}}>
        <Link
            to='form-order'
            spy={true}
            smooth={true}
            offset={-70}
            duration={700}
        >
          <Button sx={styles.buttonBanner}>
            Подать заявку
          </Button>
        </Link>
      </Box>
    </section>
  )
}

const styles = {
  banner: {
    pt: ['140px', '145px', '155px', '170px', null, null, '180px', '215px'],
    pb: [2, null, 0, null, 2, 0, null, 5,],
    position: 'relative',
    zIndex: 2,
    background: 'radial-gradient(circle, rgba(195,24,61,1) 31%, rgba(236,116,142,1) 100%)',
    mx: 'auto',
    textAlign: 'center',
    paddingBottom: '25px',
    // backgroundImage: `url(${House})`,
    // backgroundRepeat: `no-repeat`,
    // backgroundPosition: 'center center',
    // backgroundSize: 'cover',
      container: {
      minHeight: 'inherit',
      display: 'grid', gridTemplateColumns: '12% auto 12%',
      gap: '25px',
      justifyContent: 'center',
      alignItems: 'center',
      },
  },
  buttonBanner: {
    border: '1px white solid',
    backgroundColor: 'primary_dark',
    transition: 'all .7s',
    '&:hover': {
      color: 'primary',
      backgroundColor: 'background',
    }
  },
}