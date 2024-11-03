import './index.css'
import {useState} from 'react'
import { FaInstagram, FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebook, FaYoutube, FaLinkedin } from "react-icons/fa";

const Footer =()=>{
    const [email, setEmail]= useState('')

    const onEmail=(event)=>{
        setEmail(event.target.value)
    }

    return (
        <div className='footer-bg-cont'>
            <div className='footer-cont1'>
                <div className='cont-footer1'>
                    <h1 className='sub-heading'>SUBSCRIBE TO OUR NEWSLETTER</h1>
                    <p className='para-footer'>Lorem ipsum dolor sit amet. 
                        Aut ipsam<br/> illum et nostrum quidem aut necesbus enim
                    </p>
                    <input 
                        type='text' 
                        value={email} 
                        className='email-inp' 
                        onChange={onEmail} 
                        placeholder='Enter Your Email Address' 
                    />
                    <button className='subs-btn'>SUBSCRIBE</button>
                </div>
                <div className='cont-footer2'>
                    <h1 className='sub-heading'>ABOUT US</h1>
                    <p className='para-footer'>Our Story</p>
                    <p className='para-footer'>Blogs</p>
                    <p className='para-footer'>Careers</p>
                    <p className='para-footer'>Contact Us</p>
                    <p className='para-footer'>Help & Support</p>
                </div>
                <div className='cont-footer3'>
                    <h1 className='sub-heading'>Our Services</h1>
                    <p className='para-footer'>Book Maali</p>
                    <p className='para-footer'>Plant Day Care</p>
                    <p className='para-footer'>Rent Plants</p>
                    <p className='para-footer'>Plants & Pots</p>
                    <p className='para-footer'>Gardening Tools</p>
                </div>
                <div className='cont-footer4'>
                    <h1 className='sub-heading'>USEFUL LINKS</h1>
                    <p className='para-footer'>My Account</p>
                    <p className='para-footer'>Orders & Returns</p>
                    <p className='para-footer'>Track Order</p>
                    <p className='para-footer'>Terms & Conditions</p>
                    <p className='para-footer'>Privacy Policy</p>
                    <p className='para-footer'>Return, Refund & Replacement Policy</p>
                        
                </div>
                <div className='cont-footer5'>
                    <h1 className='sub-heading'>GET IN TOUCH</h1>
                    <p className='para-footer'>Address: F-262, First Floor,<br/> Sushant Lok Phase-III,<br/> Sector-57, Gurgaon,<br/> Haryana, 
                        India 122003</p>
                    <p className='para-footer'>Call:<br/>
                        +919958287272</p>
                    <p className='para-footer'>Email:<br/> care@chaperoneplants.com</p>
                </div>
            </div>
            <div className='footer-cont2'>
                <h1 className='sub-heading'>CHAPERONE</h1>
                <p className='para-footer2'>Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut 
                    necessitatibus enim ut internos accusantium a numquam autem ab rerum omnis. Non molestiae 
                    ratione et laborum doloribus aut molestiae voluptates ut porro excepturi sit molestiae obcaecati 
                    qui quis beatae est voluptatem eius. Et architecto nihil id labore omnis hic iste deleniti et 
                    porro aspernatur.
                </p>
            </div>
            <div>
                <h1 className='sub-heading'>Foolw us on</h1>
                <FaInstagram className='icons' />
                <FaFacebook className='icons' />
                <FaSquareXTwitter className='icons' />
                <FaYoutube className='icons' />
                <FaLinkedin className='icons' />
            </div>
            <hr/>
            <p className='botmline'>© 2023, chaperone.com All rights reserved.</p>
        </div>
    )
}

export default Footer 