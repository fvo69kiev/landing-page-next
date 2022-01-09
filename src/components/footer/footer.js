/** @jsx jsx */
import { jsx, Box, Container, Text } from 'theme-ui'
import { Link } from 'components/link'
import data from './footer.data'

export default function Footer() {
  return (
    <footer sx={styles.footer} id='contacts'>
      <Container>
        <Box sx={styles.footer.footerBottomArea}>
          <Box sx={styles.footer.menus}>
            <nav>
              {data.menuItem.map((item, i) => (
                  <Link
                    path={item.path}
                    key={i}
                    label={item.label}
                    sx={styles.footer.link}
                  />
              ))}
            </nav>
          </Box>
          <Text sx={styles.footer.copyright}>
            Copyright by {new Date().getFullYear()} <span>House of shipping containers</span>
          </Text>
        </Box>
      </Container>
    </footer>
  )
}

const styles = {
  footer: {
    footerBottomArea: {
      borderTop: '1px solid',
      borderTopColor: 'border_color',
      display: 'flex',
      pt: [2, null, 3],
      pb: ['20px', null, '30px'],
      textAlign: 'center',
      flexDirection: 'column',
    },
    menus: {
      mt: [3, 4],
      mb: 2,
      nav: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
      },
    },

    link: {
      fontSize: [1, '15px'],
      color: 'text',
      fontWeight: '400',
      mb: 2,
      cursor: 'pointer',
      transition: 'all 0.35s',
      display: 'block',
      textDecoration: 'none',
      lineHeight: [1.5, null, 1.8],
      px: [2, null, 4],
      ':hover': {
        color: 'primary',
      },
    },
    copyright: {
      fontSize: [1, '15px'],
      width: '100%',
      span: {
        marginLeft: '5px',
        fontWeight: 500,
      },
    },
  },
}