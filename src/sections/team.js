/** @jsx jsx */
import {jsx, Container, Grid } from 'theme-ui'
import Slogan from 'components/slogan'
import TeamCard from 'components/team-card'
import { FaFacebookF, FaTwitter, FaInstagram, FaPhone } from 'react-icons/fa'

import BgTeam from 'assets/team/bg-team.jpg'

import Viktor from 'assets/team/Viktor.jpg'
import Julia from 'assets/team/Julia.jpg'
import Oksana from 'assets/team/Oksana.jpg'
import Valentin from 'assets/team/Valentin.jpg'


const data = [
  {
    id: 1,
    imgSrc: Viktor,
    title: 'Виктор Форый',
    designation: 'Менеджер',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: '#',
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: 'twitter',
        path: '#',
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: 'instagram',
        path: '#',
        icon: <FaInstagram />,
      },
      {
        id: 4,
        name: 'phone',
        path: '+38(067)246-25-12',
        icon: <FaPhone />,
      },
    ],
  },
  {
    id: 2,
    imgSrc: Julia,
    title: 'Юлия Понежда',
    designation: 'Проект-дизайнер',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: '#',
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: 'twitter',
        path: '#',
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: 'instagram',
        path: '#',
        icon: <FaInstagram />,
      },
      {
        id: 4,
        name: 'phone',
        path: '+38(063)279-78-12',
        icon: <FaPhone />,
      },
    ],
  },
  {
    id: 3,
    imgSrc: Oksana,
    title: 'Оксана Понежда',
    designation: 'Проект-дизайнер',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: '#',
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: 'twitter',
        path: '#',
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: 'instagram',
        path: '#',
        icon: <FaInstagram />,
      },
      {
        id: 4,
        name: 'phone',
        path: '+38(093)981-50-70',
        icon: <FaPhone />,
      },
    ],
  },
  {
    id: 4,
    imgSrc: Valentin,
    title: 'Валентин Понежда',
    designation: 'Строитель-инженер',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: '#',
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: 'twitter',
        path: '#',
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: 'instagram',
        path: '#',
        icon: <FaInstagram />,
      },
      {
        id: 4,
        name: 'phone',
        path: '+38(093)893-41-01',
        icon: <FaPhone />,
      },
    ],
  },
]

export default function Team() {
  return (
    <section sx={styles.team} id='team'>
      <Container>
        <Slogan
          slogan='Как с нами связаться'
          title='Наши контакты'
        />
        <Grid sx={styles.grid}>
          {data.map((item) => (
              <TeamCard
                key={item.id}
                src={item.imgSrc}
                title={item.title}
                designation={item.designation}
                social={item.socialProfile}
              />
          ))}
        </Grid>
      </Container>
    </section>
  )
}

const styles = {
  team: {
    pt: [8, null, 9, null, null, 10],
    pb: [8, null, 9, null, null, 10],
    backgroundImage: `url(${BgTeam})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
  },
  grid: {
    mt: [0, null, -6, null, -4],
    gridGap: ['35px 0px', null, 0, null, null, '30px 35px'],
    gridTemplateColumns: [
      'repeat(2,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(2,1fr)',
    ],
  },
}
