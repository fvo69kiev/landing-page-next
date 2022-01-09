import { useState } from 'react'
/** @jsx jsx */
import { jsx, Container, Box, Button, Image } from 'theme-ui'
import { keyframes } from '@emotion/core'
import Slogan from "../components/slogan"
import ModalVideo from 'react-modal-video'
import { IoIosPlay } from 'react-icons/io'

import ShowPlace from 'assets/video-showRoom.jpg'
import BgShowRoom from 'assets/bg-showRoom.jpg'


export default function ShowRoom() {
  const [videoOpen, setVideoOpen] = useState(false)

  const handleClick = (e) => {
    e.preventDefault()
    setVideoOpen(true)
  }

  return (
    <section sx={styles.showRoom} id='showroom'>
      <Slogan
          slogan='Где посмотреть дом'
          title='Шоу-рум 26 км от Киева'
      />
      <Container sx={styles.containerBox}>
        <Box sx={styles.videoBox}>
          <Image src={ShowPlace} alt='Show room' />
          <Button
            sx={styles.videoBtn}
            onClick={handleClick}
            arial-label='Play Button'
          >
            <span>
              <IoIosPlay />
            </span>
          </Button>
          <Box sx={styles.shapeBox}>
            <Image src={BgShowRoom} alt='Location Show Room' />
          </Box>
        </Box>
        <Box sx={styles.googleMap}>
          <iframe
              src="https://www.google.com/maps/embed?pb=!1m20!1m8!1m3!1d163139.22306281776!2d30.3286144!3d50.2909878!3m2!1i1024!2i768!4f13.1!4m9!3e0!4m3!3m2!1d50.3696675!2d30.4583904!4m3!3m2!1d50.246879!2d30.2379772!5e0!3m2!1sru!2sua!4v1640815347737!5m2!1sru!2sua"
              width='100%' height='100%' style={{border:0}} allowFullScreen="" loading="lazy">
          </iframe>
        </Box>
      </Container>
      <Box sx={styles.contentBoxer}>
        <Button
            className='donate__btn'
            variant='secondary'
            arial-label='Get consultation'
        >
          Заказать просмотр
        </Button>
      </Box>
      <ModalVideo
        channel='youtube'
        isOpen={videoOpen}
        videoId='xhDfzKqIt1c'
        onClose={() => setVideoOpen(false)}
      />
    </section>
  )
}

const playPluse = keyframes`
  from {
    transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1);
    opacity: 1;
  }
  to {
	transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1.5);
    opacity: 0;
  }
`;

const styles = {
  showRoom: {
    pt: [8, null, 8, '70px', null, 8, null, '125px'],
    pb: ['90px', null, 9, null, null, 10, null, '125px'],
    overflow: 'hidden',
  },
  containerBox: {
    display: 'flex',
    alignItems: ['flex-start', null, null, 'center'],
    justifyContent: ['flex-start', null, null, 'space-between'],
    flexDirection: ['column', null, null, 'row'],
    pb: [0, null, null, null, null, 7],
  },
  videoBox: {
    width: [310, 350, 450, 525],
    mr: ['auto', null, null, 6, 25, 25],
    order: [2, null, null, 0],
    ml: ['auto', null, null, 0],
    display: 'inline-flex',
    position: 'relative',
    '> img': {
      position: 'relative',
      borderRadius: '10px',
      zIndex: 1,
      height: [310, 'auto'],
    },
  },
  shapeBox: {
    position: 'absolute',
    bottom: -28,
    left: -160,
    zIndex: -1,
    display: ['none', null, null, null, null, 'inline-block'],
  },
  videoBtn: {
    zIndex: 2,
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    width: ['60px', null, '80px', null, '100px'],
    height: ['60px', null, '80px', null, '100px'],
    p: '0px !important',
    backgroundColor: 'transparent',
    '&::before': {
      position: 'absolute',
      content: '""',
      left: '50%',
      top: '50%',
      transform: 'translateX(-50%) translateY(-50%)',
      display: 'block',
      width: ['60px', null, '80px', null, '100px'],
      height: ['60px', null, '80px', null, '100px'],
      backgroundColor: 'primary',
      borderRadius: '50%',
      animation: `${playPluse} 1.5s ease-out infinite`,
      opacity: 0.5,
    },
    '> span': {
      backgroundColor: 'rgba(255,255,255,0.5)',
      width: 'inherit',
      height: 'inherit',
      textAlign: 'center',
      borderRadius: '50%',
      cursor: 'pointer',
      transition: 'all 0.5s',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      zIndex: 2,
    },
    svg: {
      fontSize: [40, null, 48, null, 62],
    },
  },
  googleMap: {
    width: [310, 350, 450, 525],
    height: [310, 350, 450, 525],
    flexShrink: 0,
    mb: [15, 15, null, 60, 0],
    textAlign: ['center', null, null, 'left'],
    margin: '0 auto',
  },
  grid: {
    pr: [2, 0, null, null, 6, '20px'],
    pl: [2, 0],
    pt: [2, null, null, null, 3],
    mx: 'auto',
    width: ['100%', 370, 420, '100%'],
    gridGap: ['15px 0', null, null, null, '30px 0'],
    gridTemplateColumns: ['repeat(1,1fr)'],
  },
  card: {
    display: 'flex',
    alignItems: 'flex-start',
    transition: 'all 0.3s',
  },

  icon: {
    width: ['45px', null, null, null, '55px'],
    height: 'auto',
    flexShrink: 0,
    mr: [3, null, null, null, 4],
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
    mt: '-5px',
    title: {
      fontSize: 4,
      color: 'heading_secondary',
      lineHeight: 1.4,
      fontWeight: 700,
      mb: [2, null, 3, 2, 3],
    },

    subTitle: {
      fontSize: [1, null, null, '14px', 1],
      fontWeight: 400,
      lineHeight: 1.9,
    },
  },
  videoWrapper: {
    maxWidth: '100%',
    position: 'relative',
    width: '900px',
    '&:before': {
      content: '""',
      display: 'block',
      paddingTop: '56.25%',
    },
  },

  contentBoxer: {
    width: ['100%', '90%', '535px', null, '57%', '60%', '68%', '60%'],
    mx: 'auto',
    textAlign: 'center',
    pt: '30px',
    mb: '-30px',
    transition: 'all .7s',
  },
}