import './index.css'
import TopHeader from '../TopHeader'
import Header from '../Header'
import NurseryItems from '../NurseryItems'
import Filters from '../Filters'
import Footer from '../Footer'
import { CiSearch } from "react-icons/ci";

const nurseryData=[
    {
        id: 1,
        imgUrl: 'https://res.cloudinary.com/dkvptcm7q/image/upload/v1729331431/Ellipse_68_d3jeba.png',
        desc: 'Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum   '
    },
    {
        id: 2,
        imgUrl: 'https://res.cloudinary.com/dkvptcm7q/image/upload/v1729331537/Ellipse_69_taelqi.png',
        desc: 'Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum   '
    },
    {
        id: 3,
        imgUrl: 'https://res.cloudinary.com/dkvptcm7q/image/upload/v1729331580/Ellipse_70_czjzal.png',
        desc: 'Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum   '
    },
    {
        id: 4,
        imgUrl: 'https://res.cloudinary.com/dkvptcm7q/image/upload/v1729331618/Ellipse_71_bj0u31.png',
        desc: 'Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum   '
    },
    {
        id: 5,
        imgUrl: 'https://res.cloudinary.com/dkvptcm7q/image/upload/v1729331835/Ellipse_62_vat7hm.png',
        desc: 'Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum   '
    },
    {
        id: 6,
        imgUrl: 'https://res.cloudinary.com/dkvptcm7q/image/upload/v1729331752/Ellipse_63_tprfpe.png',
        desc: 'Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum   '
    },
    {
        id: 7,
        imgUrl: 'https://res.cloudinary.com/dkvptcm7q/image/upload/v1729331907/Ellipse_64_hdbuvs.png',
        desc: 'Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum   '
    }
]

const Home =()=> (
    <div>
        <TopHeader />
        <Header />
        <div className='home-cont'>
            <div className='search-cont'>
                <CiSearch />
                <input className='search' placeholder='Search Plant' type='search' />
                <img src='https://res.cloudinary.com/dkvptcm7q/image/upload/v1729330364/image_91_t87aqu.png' alt='leaf' className='leaf' />
            </div>
            <div className='buttons-cont'>
                <button className='plants-btn'>Plants</button>
                <button className='pots-btn'>Pots</button>
            </div>
            <p className='home-para'>Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut necessitatibus
                enim ut internos accusantium a numquam autem ab rerum omnis. Non molestiae ratione et laborum doloribus
                aut molestiae voluptates ut porro excepturi sit molestiae obcaecati qui quis beatae est voluptatem eius.
                Et architecto nihil id labore omnis hic iste deleniti et porro aspernatur.
            </p>
            <h1 className='nurs-heading'>Nursery</h1>
            <ul className='ul-nurs'>
                {nurseryData.map(each => <NurseryItems key={each.id} itemDetails={each} />)}
            </ul>
            <div className='home-body-cont'>
                <Filters />
            </div>
        </div>
        <Footer />
    </div>
)

export default Home