/** @jsx jsx */
import { jsx, Image, Box, Heading, Text } from 'theme-ui'

export default function AdvantCard({
  src,
  altText = 'default alt text',
  title,
  text,
}) {
  return (
      <Box sx={styles.card}>
        <Image src={src} altText={altText} sx={styles.img} />
        <Box sx={styles.wrapper}>
          <Heading sx={styles.wrapper.title}>{title}</Heading>
          <Text sx={styles.wrapper.subTitle}>{text}</Text>
        </Box>
      </Box>
  )
}

const styles = {
  card: {
    display: 'flex',
    alignItems: ['center', 'center'],
    flexDirection: 'column',
    textAlign: ['center', null, 'center'],
    px: [4, null, 2],
    py: [4, null, 2],
    backgroundColor: 'white',
    borderRadius: 20,
    webkitBoxShadow: '0px 0px 25px 12px rgba(154, 63, 0, 1)',
    mozBoxShadow: '0px 0px 25px 12px rgba(154, 63, 0, 1)',
    boxShadow: '0px 0px 25px 12px rgba(154, 63, 0, 1)',
  },
  img: {
    mx: ['auto', null, 0],
    ml: ['auto', null, '0'],
    width: ['80px', null, null, '100px', null, '150px'],
    pb: ['auto', null, 3],
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    title: {
      fontSize: 3,
      color: 'heading_secondary',
      lineHeight: 1.4,
      fontWeight: 700,
      mb: [2, null, 3],
    },
    subTitle: {
      fontSize: 2,
      fontWeight: 400,
      lineHeight: '1.5',
    },
  },
}