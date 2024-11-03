import './index.css'
import TopHeader from '../TopHeader'
import Header from '../Header'
import NurseryItems from '../NurseryItems'
import Footer from '../Footer'
import PlantItem from '../PlantItem'
import { CiSearch } from "react-icons/ci";
import {useState} from 'react'

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

const plantsData=[
    {
        plantId: 1,
        imageUrl: 'https://res.cloudinary.com/dkvptcm7q/image/upload/v1729351426/e1ce63ff429a0c018fd6e2e5dd614458_mhfwez.png',
        name: 'Monsterra',
        plantDesc: 'Indoor Plant, Low maintenence',
        rating: '4.9',
        actualPrice: '359',
        price: '299',
    },
    {
        plantId: 2,
        imageUrl: 'https://res.cloudinary.com/dkvptcm7q/image/upload/v1729352575/7973d62829a030074ad8b6ad34_ybfghn.png',
        name: 'Monsterra',
        plantDesc: 'Indoor Plant, Low maintenence',
        rating: '4.9',
        actualPrice: '359',
        price: '299',
    },
    {
        plantId: 3,
        imageUrl: 'https://res.cloudinary.com/dkvptcm7q/image/upload/v1729352621/daa994fdb511faa82ea79a5ef58fbb1a_epvngd.png',
        name: 'Monsterra',
        plantDesc: 'Indoor Plant, Low maintenence',
        rating: '4.9',
        actualPrice: '359',
        price: '299',
    },
    {
        plantId: 4,
        imageUrl: 'https://res.cloudinary.com/dkvptcm7q/image/upload/v1729351426/e1ce63ff429a0c018fd6e2e5dd614458_mhfwez.png',
        name: 'Monsterra',
        plantDesc: 'Indoor Plant, Low maintenence',
        rating: '4.9',
        actualPrice: '359',
        price: '299',
    },
    {
        plantId: 5,
        imageUrl: 'https://res.cloudinary.com/dkvptcm7q/image/upload/v1729352575/7973d62829a030074ad8b6ad34_ybfghn.png',
        name: 'Monsterra',
        plantDesc: 'Indoor Plant, Low maintenence',
        rating: '4.9',
        actualPrice: '359',
        price: '299',
    },
    {
        plantId: 6,
        imageUrl: 'https://res.cloudinary.com/dkvptcm7q/image/upload/v1729352621/daa994fdb511faa82ea79a5ef58fbb1a_epvngd.png',
        name: 'Monsterra',
        plantDesc: 'Indoor Plant, Low maintenence',
        rating: '4.9',
        actualPrice: '359',
        price: '299',
    },
    {
        plantId: 7,
        imageUrl: 'https://res.cloudinary.com/dkvptcm7q/image/upload/v1729351426/e1ce63ff429a0c018fd6e2e5dd614458_mhfwez.png',
        name: 'Monsterra',
        plantDesc: 'Indoor Plant, Low maintenence',
        rating: '4.9',
        actualPrice: '359',
        price: '299',
    },
    {
        plantId: 8,
        imageUrl: 'https://res.cloudinary.com/dkvptcm7q/image/upload/v1729352575/7973d62829a030074ad8b6ad34_ybfghn.png',
        name: 'Monsterra',
        plantDesc: 'Indoor Plant, Low maintenence',
        rating: '4.9',
        actualPrice: '359',
        price: '299',
    },
    {
        plantId: 9,
        imageUrl: 'https://res.cloudinary.com/dkvptcm7q/image/upload/v1729352621/daa994fdb511faa82ea79a5ef58fbb1a_epvngd.png',
        name: 'Monsterra',
        plantDesc: 'Indoor Plant, Low maintenence',
        rating: '4.9',
        actualPrice: '359',
        price: '299',
    },
    {
        plantId: 10,
        imageUrl: 'https://res.cloudinary.com/dkvptcm7q/image/upload/v1729351426/e1ce63ff429a0c018fd6e2e5dd614458_mhfwez.png',
        name: 'Monsterra',
        plantDesc: 'Indoor Plant, Low maintenence',
        rating: '4.9',
        actualPrice: '359',
        price: '299',
    },
    {
        plantId: 11,
        imageUrl: 'https://res.cloudinary.com/dkvptcm7q/image/upload/v1729352575/7973d62829a030074ad8b6ad34_ybfghn.png',
        name: 'Monsterra',
        plantDesc: 'Indoor Plant, Low maintenence',
        rating: '4.9',
        actualPrice: '359',
        price: '299',
    },
    {
        plantId: 12,
        imageUrl: 'https://res.cloudinary.com/dkvptcm7q/image/upload/v1729352621/daa994fdb511faa82ea79a5ef58fbb1a_epvngd.png',
        name: 'Monsterra',
        plantDesc: 'Indoor Plant, Low maintenence',
        rating: '4.9',
        actualPrice: '359',
        price: '299',
    },
    {
        plantId: 13,
        imageUrl: 'https://res.cloudinary.com/dkvptcm7q/image/upload/v1729351426/e1ce63ff429a0c018fd6e2e5dd614458_mhfwez.png',
        name: 'Monsterra',
        plantDesc: 'Indoor Plant, Low maintenence',
        rating: '4.9',
        actualPrice: '359',
        price: '299',
    },
    {
        plantId: 14,
        imageUrl: 'https://res.cloudinary.com/dkvptcm7q/image/upload/v1729352575/7973d62829a030074ad8b6ad34_ybfghn.png',
        name: 'Monsterra',
        plantDesc: 'Indoor Plant, Low maintenence',
        rating: '4.9',
        actualPrice: '359',
        price: '299',
    },
    {
        plantId: 15,
        imageUrl: 'https://res.cloudinary.com/dkvptcm7q/image/upload/v1729352621/daa994fdb511faa82ea79a5ef58fbb1a_epvngd.png',
        name: 'Monsterra',
        plantDesc: 'Indoor Plant, Low maintenence',
        rating: '4.9',
        actualPrice: '359',
        price: '299',
    }
]



const Home =()=> {
    const [sortBy, setSortBy]= useState('LowToHigh')
    const [isStickey, setSticky]= useState(false)

    const fixSticky = ()=>{
        if (window.scrollY >= 630){
            setSticky(true)
        }else{
            setSortBy(false)
        }
    }

    const onSortPrice= event =>{
        setSortBy(event.target.value)
    }

    window.addEventListener('scroll', fixSticky)

    const stickyClass= isStickey? 'stickey bg-filters-cont' : 'bg-filters-cont'
    return (
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
                <div className={stickyClass}>
                    <div className='filter-cont'>
                        <p className='filter-text'>Filter</p>
                        <p className='filter-text'>CLEAR ALL</p>
                    </div>
                    <div className='filter-cont'>
                        <p className='filter-text'>Type of Plants</p>
                        <p className='filter-text'>+</p>
                    </div>
                    <div className='filter-cont'>
                        <p className='filter-text'>Price</p>
                        <p className='filter-text'>+</p>
                    </div>
                    <div className='filter-cont'>
                        <p className='filter-text'>Nursery</p>
                        <p className='filter-text'>+</p>
                    </div>
                    <div className='filter-cont'>
                        <p className='filter-text'>Ideal Plants Location</p>
                        <p className='filter-text'>+</p>
                    </div>
                    <div className='filter-cont'>
                        <p className='filter-text'>Indoor / Outdoor</p>
                        <p className='filter-text'>+</p>
                    </div>
                    <div className='filter-cont'>
                        <p className='filter-text'>Maintenence</p>
                        <p className='filter-text'>+</p>
                    </div>
                    <div className='filter-cont'>
                        <p className='filter-text'>Plant Size</p>
                        <p className='filter-text'>+</p>
                    </div>
                    <div className='filter-cont'>
                        <p className='filter-text'>Water Schedule</p>
                        <p className='filter-text'>+</p>
                    </div>
                    <div className='filter-cont'>
                        <p className='filter-text'>Color</p>
                        <p className='filter-text'>+</p>
                    </div>
                    <div className='filter-cont'>
                        <p className='filter-text'>Seasonal</p>
                        <p className='filter-text'>+</p>
                    </div>
                    <div className='filter-cont'>
                        <p className='filter-text'>Light Efficient</p>
                        <p className='filter-text'>+</p>
                    </div>
                </div>
                <div className='body-cont-co'>
                    <div className='sort-cont'>
                        <p className='pro'>300 Products</p>
                        <select className='sortby' value={sortBy} onChange={onSortPrice} >
                            <option className='option'>SORT BY</option>
                            <option className='option' name='LowToHigh'>Low to High</option>
                            <option className='option' name='HighToLow'>High to Low</option>
                        </select>
                    </div>
                    <ul className='ul-nurs plants-ul'>
                        {plantsData.map(eachplant => <PlantItem key={eachplant.plantId} plantDetails={eachplant} />)}
                    </ul>
                </div>
            </div>
        </div>
        <Footer />
    </div>
)
}
export default Home