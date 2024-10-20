import './index.css'
import {Link} from 'react-router-dom'

const AddToCartModel=(props)=>{
    const {closeOpp}= props
    return (
        <div className="cart-bg-cont">
            <p className='cart-top-heading'>Your Cart</p>
            <hr className='hori' />
            <h1 className='congrants'>Congratulations <br/>
               Order Placed!
            </h1>
            <img className='order-img' src='https://res.cloudinary.com/dkvptcm7q/image/upload/v1729416881/plant_1_yymyph.png' alt='ordered'/>
            <p className='order-text'>Thank you for choosing Chaperone services. <br />
            We will soon get in touch with you!</p>
            <Link to='/' className='link'><button type='button' onClick= {() => closeOpp()} className='shopping'>CONTINUE SHOPPING</button></Link> 
        </div>
    )
}

export default AddToCartModel