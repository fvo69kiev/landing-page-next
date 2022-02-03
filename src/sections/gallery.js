/** @jsx jsx */
import {jsx, Container, Box, Image, Button} from 'theme-ui'
import {Link} from 'react-scroll'
import lgZoom from 'lightgallery/plugins/zoom'
import dynamic from 'next/dynamic'

import BgGallery from 'assets/gallery/bgGallery.jpg'

import Marking from 'assets/gallery/1-marking.jpg'
import Checking from 'assets/gallery/1-checking.jpg'
import Delivery from 'assets/gallery/2-delivery.jpg'
import Preparing from 'assets/gallery/3-preparing.jpg'
import Cutting from 'assets/gallery/4-cutting.jpg'
import Welding from 'assets/gallery/4-welding.jpg'
import Crate from 'assets/gallery/5-crate.jpg'
import Light from 'assets/gallery/6-light.jpg'
import Warming from 'assets/gallery/7-warming.jpg'
import Plumbing from 'assets/gallery/8-plumbing.jpg'
import Floor from 'assets/gallery/9-floor.jpg'
import FloorPlitka from 'assets/gallery/10-floor-plitka.jpg'
import Sheathing from 'assets/gallery/11-sheathing.jpg'
import WallPlitka from 'assets/gallery/12-wall-plitka.jpg'
import Door from 'assets/gallery/14-door.jpg'
import Wind from 'assets/gallery/15-wind.jpg'
import Ceil from 'assets/gallery/16-ceil.jpg'
import Window from 'assets/gallery/17-window.jpg'
import BathRoom from 'assets/gallery/20-bathRoom.jpg'
// import LivingRoom from 'assets/gallery/20-livingRoom.jpg'
import DivanTrans from 'assets/gallery/20-divan-trans.jpg'
import BedTrans from 'assets/gallery/20-bed-trans.jpg'


const items = [
    {id: 1, title: 'Покупка. Проверка маркировки контейнера по международному реестру учета', img: Marking},
    {id: 2, title: 'Покупка. Проверка контейнера на радиоационную и химическую безопасность', img: Checking},
    {id: 3, title: 'Доставка. Транспортировка контейнера из порта к нашей локации производства', img: Delivery},
    {id: 4, title: 'Подготовка. Удаление пола, ржавчины, выравнивание неровностей', img: Preparing},
    {id: 5, title: 'Проемы. Вырезание проемов под двери и окна', img: Cutting},
    {id: 6, title: 'Устройство консолей для крепления каркасов внутренней обшивки (наваривание закладных)', img: Welding},
    {id: 7, title: 'Обрешетка. Устройство обрешетки каркаса контейнера', img: Crate},
    {id: 8, title: 'Электромонтаж. Устройство электропроводки', img: Light},
    {id: 9, title: 'Утепление. Напыление теплоизоляцией', img: Warming},
    {id: 10, title: 'Сантехника. Устройство водоснабжения, канализации и т.д', img: Plumbing},
    {id: 11, title: 'Теплый пол. Устройство теплого пола', img: Floor},
    {id: 12, title: 'Плитка. Устройство напольной плитки', img: FloorPlitka},
    {id: 13, title: 'Обшивка. Устройство бшивки стен гипсокартонными листами', img: Sheathing},
    {id: 14, title: 'Плитка. Устройство настенной плитки', img: WallPlitka},
    {id: 15, title: 'Дверь. Установка металлической входной двери', img: Door},
    {id: 16, title: 'Вентиляция. Установка/подключение кондиционера, системы вентиляции', img: Wind},
    {id: 17, title: 'Потолок. Монтаж подвесных потолков', img: Ceil},
    {id: 18, title: 'Окна. Монтаж оконных систем', img: Window},
    {id: 19, title: 'Интерьер. Ванная комната', img: BathRoom},
    // {id: 19, title: 'Интерьер. Жилая комната', img: LivingRoom},
    {id: 20, title: 'Интерьер. Диван-трансформер', img: DivanTrans},
    {id: 21, title: 'Интерьер. Кровать-трансформер', img: BedTrans},

]

const LightGallery = dynamic (
    () => import('lightgallery/react'),
    {ssr: false},
)

export default function Gallery() {
    return (
        <section sx={styles.gallery}>
            <Container>
                <LightGallery
                    mode="lg-fade"
                    plugins={[lgZoom]}
                >
                    {items.map((item) => (
                        <a
                            key={item.id}
                            data-lg-size="900-600"
                            className="gallery-item"
                            data-src={item.img}
                            title={item.title}
                            data-sub-html={`<h3>${item.title}</h3>`}
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
                <Link
                    to='form-contact'
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={700}
                >
                    <Box sx={styles.contentBoxer}>
                        <Button
                            className='donate__btn'
                            variant='secondary'
                            arial-label='Get consultation'
                        >
                            Получить консультацию
                        </Button>
                    </Box>
                </Link>
            </Container>
        </section>
    )
}

const styles = {
    gallery: {
        pt: [3, 4, 5, 6, 7],
        backgroundImage: `url(${BgGallery})`,
        backgroundRepeat: `no-repeat`,
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        textAlign: 'center',
        'a:hover': {
            transition: 'all .75s ease-out',
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