/** @jsx jsx */
import {jsx, Box, Card, Text, Heading, Button, Image} from 'theme-ui'
import List from './list'
import {useRouter} from "next/router"


export default function PriceCard({
    data: {
      id,
      header,
      name,
      imgDescription,
      description,
      source,
      priceWithUnit,
      buttonText = 'Подробнее',
      anotherOption,
      points,
    },
  })  {
  const router = useRouter()

  return (
      <Card
        className={header ? 'package__card active' : 'package__card'}
        sx={styles.pricingBox}
      >
        {header && <Text sx={styles.header}>{header}</Text>}
        <Box>
          <Box className='package__header' sx={styles.pricingHeader}>
            <Heading className='package__name' variant='title'>
              {name}
            </Heading>
            <Box sx={styles.description}>
              {id === 1 && <Image sx={styles.imgDescription} style={{marginRight: '5px'}} src={imgDescription} alt={name} />}
              {id === 2 && <Image sx={styles.imgDescription} style={{marginRight: '5px'}} src={imgDescription} alt={name} />}
              {id === 3 && <Image sx={styles.imgDescription} style={{marginRight: '10px'}} src={imgDescription} alt={name} />}
              {id === 4 && <>
                <Image sx={styles.imgDescription} style={{marginRight: '3px'}} src={imgDescription} alt={name} />
                <Image sx={styles.imgDescription} style={{marginRight: '10px'}} src={imgDescription} alt={name} />
              </>}
              <Text as='p'>{description}</Text>
            </Box>
          </Box>
          <List items={points} childStyle={styles.listItem} />
          <Box sx={styles.pricePerson}>
            <Image sx={styles.imgPerson} src={anotherOption}  alt={name} />
            <Text className='package__price' sx={styles.price}>
              {priceWithUnit}
            </Text>
          </Box>
            <Box style={{textAlign: 'center', paddingTop: '35px',}}>
              <Button
                  variant='primary'
                  sx={styles.buttonPrice}
                  arial-label={buttonText}
                  onClick={() => router.push(`${source}`)}
              >
                {buttonText}
              </Button>
            </Box>
        </Box>
      </Card>
  )
}

const styles = {
  pricingBox: {
    backgroundColor: 'white',
    borderRadius: 20,
    position: 'relative',
    transition: 'all 0.3s',
    opacity: .85,
    p: ['35px 25px', null, null, '40px'],
    width: ['100%', '75%', '100%'],
    mb: '40px',
    mt: '40px',
    mx: [0, 'auto', 0],
    '&:before': {
      position: 'absolute',
      content: "''",
      width: '100%',
      top: 0,
      left: 0,
      height: '100%',
      border: '1px solid rgba(38, 78, 118, 0.1)',
      borderRadius: 'inherit',
      transition: 'all 0.3s',
      zIndex: -1,
    },
    '&:hover': {
      boxShadow: '0px 4px 25px rgba(234,58,96, 0.45)',
      opacity: 1,
      '&:before': {
        opacity: 0,
      },
    },
  },
  header: {
    height: ['28px', null, null, '32px'],
    backgroundColor: 'yellow',
    borderRadius: '5px',
    fontWeight: 'bold',
    fontSize: 1,
    lineHeight: 1.2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    position: 'absolute',
    top: '-17px',
    letterSpacing: '-.14px',
    px: '12px',
  },
  description: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'start',
  },
  imgDescription: {
    width: '35px',
    height: '30px',
  },
  pricingHeader: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    mb: ['30px', null, null, null, '40px'],
    p: {
      fontSize: [1, 2],
      color: 'text',
      lineHeight: 'heading',
    },
    '.package__name': {
      marginBottom: [1, null, 2],
    },
  },
  price: {
    fontWeight: 500,
    fontSize: [4, null, 5, null, '30px'],
    lineHeight: 1,
    letterSpacing: '-0.55px',
    color: 'text',
    marginBottom: 2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    pt: [4, 6],
    '> span': {
      position: 'relative',
      pl: '3px',
      display: 'inline-block',
      fontSize: [1, 2],
      fontWeight: 'normal',
    },
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
        color: '#788FB5',
      },
    },
  },
  buttonPrice: {
    border: '1px primary solid',
    backgroundColor: 'primary_dark',
    transition: 'all .7s',
    '&:hover': {
      color: 'primary',
      backgroundColor: 'background',
    }
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
  //     Link: {
  //       target: '_blank',
  //     }
  //   },
  // },
  pricePerson: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgPerson: {
    width: '65px',
    height: '65px',
  }
}