import { ThemeProvider } from 'theme-ui'
import theme from 'theme'

import SEO from 'components/seo'
import Layout from 'components/layout'
import Banner from '../sections/banner'
import Advantages from '../sections/advantages'
import Building from '../sections/building'
import Gallery from '../sections/gallery'
import Pricing from '../sections/pricing'
import HowWeWork from "../sections/how-we-work"
import ShowRoom from '../sections/showroom'
import Team from '../sections/team'
import Rent from '../sections/rent'
import ScrollTop from '../components/scrollTop'


export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
        <Layout>
          <SEO />
          <Banner />
          <Advantages />
          <Building />
          <Gallery />
          <Pricing />
          <HowWeWork />
          <Rent />
          <ShowRoom />
          <Team />
          <ScrollTop />
        </Layout>
    </ThemeProvider>
  )
}