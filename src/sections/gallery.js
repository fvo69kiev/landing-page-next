/** @jsx jsx */
import {jsx, Container, Box, Image, Button} from 'theme-ui'
import lgZoom from 'lightgallery/plugins/zoom'
import dynamic from 'next/dynamic'


import DemontazhPola from "../assets/gallery/1-demontazh-pola.jpg"
import RezkaProemov from "../assets/gallery/2-rezka-proemov.jpg"
import SvarkaZastavnyh from "../assets/gallery/3-svarka-zastavnyh.jpg"
import Obreshetka from "../assets/gallery/4-obreshetka.jpg"
import TeploIzoljazia from "../assets/gallery/5-teplo-izoljazia.jpg"
import WarmFloor from "../assets/gallery/6-uteplenie-pola-3.jpg"
import Interier from "../assets/gallery/9-room.jpg"


const items = [
    {
        id: 1,
        title: 'Демонтаж пола для подготовки каркаса контейнера',
        img: DemontazhPola,
    },
    {
        id: 2,
        title: 'Резка проемов под окна и двери',
        img: RezkaProemov,
    },
    {
        id: 3,
        title: 'Сварка заставных для укрепления каркаса',
        img: SvarkaZastavnyh,
    },
    {
        id: 4,
        title: 'Обрешетка для устройсва утепления',
        img: Obreshetka,
    },
    {
        id: 5,
        title: 'Гидро, тепло и звукоизоляция каркаса',
        img: TeploIzoljazia,
    },
    {
        id: 6,
        title: 'Устройство теплого пола',
        img: WarmFloor,
    },
    {
        id: 9,
        title: 'Внутренняя отделка дома',
        img: Interier,
    },
]

const LightGallery = dynamic (
    () => import('lightgallery/react'),
    {ssr: false}
)



export default function Gallery() {
    return (
        <section sx={styles.gallery}>
            <Container>
                <LightGallery mode="lg-fade" plugins={[lgZoom]}>
                    {items.map((item) => (
                        <a
                            key={item.id}
                            data-lg-size="900-600"
                            className="gallery-item"
                            data-src={item.img}
                            title={item.title}
                            data-sub-html={`<h4>${item.title}</h4>`}
                        >
                            <Image
                                className="img-responsive"
                                src={item.img}
                                width={375}
                                height={250}
                            />
                        </a>
                    ))}
                </LightGallery>
                <Box sx={styles.contentBoxer}>
                    <Button
                        className='donate__btn'
                        variant='secondary'
                        arial-label='Get consultation'
                    >
                        Получить консультацию
                    </Button>
                </Box>
            </Container>
        </section>
    )
}

const styles = {
    gallery: {
        pt: [3, 4, 5, 6, 7],
        textAlign: 'center',
        'a:hover': {
            transition: 'all 0.75s',
            cursor: 'pointer',
            opacity: .75,
        },
    },
    contentBoxer: {
        width: ['100%', '90%', '535px', null, '57%', '60%', '68%', '60%'],
        mx: 'auto',
        p: [3, 4, 5, 6, 7],
        textAlign: 'center',
        transition: 'all .7s',
    },
}