import './index.css'
import {useState} from 'react'

const Footer =()=>{
    const [email, setEmail]= useState('')

    const onEmail=(event)=>{
        setEmail(event.target.value)
    }

    return (
        <div className='footer-bg-cont'>
            <div className='footer-cont1'>
                <div>
                    <h1 className='sub-heading'>SUBSCRIBE TO OUR NEWSLETTER</h1>
                    <p className='para-footer'>Lorem ipsum dolor sit amet. 
                        Aut ipsam illum et nostrum quidem aut necesbus enim
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
            </div>
        </div>
    )
}

export default Footer 