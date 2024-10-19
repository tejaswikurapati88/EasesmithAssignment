import './index.css'
import {Link} from 'react-router-dom'
import { BsCart3 } from "react-icons/bs";

const Header=()=>{
    return (
        <div className="header-bg-cont">
            <Link to='/' className='link'>
                <div className='icon-cont'>
                    <img   
                        src='https://res.cloudinary.com/dkvptcm7q/image/upload/v1729316182/image_55_nekf6g.png' 
                        alt='icon'
                    />
                    <h1 className='icon-text'>Chaperone</h1>
                </div>
            </Link>
            <ul className='ul'>
                <li className='li-header'>Home</li>
                <li className='li-header'>Plants & Pots</li>
                <li className='li-header'>Tools</li>
                <li className='li-header'>Our Services</li>
                <li className='li-header'>Blog</li>
                <li className='li-header'>Our Story</li>
                <li className='li-header'>FAQs</li>
            </ul>
            <div className='last-cont-head'>
                <div className='cont-head'>
                    <img 
                        src='https://res.cloudinary.com/dkvptcm7q/image/upload/v1729317700/account_profile_l2ogbj.png'
                        alt='profile-img'
                    />
                    <p className='profile'>My Profile</p>
                </div>
                <div className='cont-head'>
                    <BsCart3 className='cart-icon' />
                    <p className='profile'>Cart</p>
                </div>
            </div>
        </div>
    )
}

export default Header