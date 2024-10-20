import './index.css'
import AddToCartModel from '../AddToCartModel'
import { IoHeart } from "react-icons/io5";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { LuIndianRupee } from "react-icons/lu";
import {useState} from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { IoMdClose } from "react-icons/io";

const PlantItem=(props)=>{
    const [isLiked, setLike]= useState(false)
    const {plantDetails}= props
    const { imageUrl, 
            name,
            plantDesc,
            rating,
            actualPrice,
            price}= plantDetails
    const onLike=()=>{
        setLike(! isLiked)
    }
    const likeClass= isLiked ? 'heart liked' : 'heart'
    const onAddCart=()=>{
        
    }
    return (
        <li className='nur-list'>
            <div className='plant-item-cont'>
                <div className='pla-img-cont'>
                    <IoHeart onClick={onLike} className={likeClass} />
                    <img src={imageUrl} className='plant-img' alt='plant' />
                    <button type='button' className='viewpro-btn'>View Product</button>
                </div>
                <div className='plant-item-cont mar'>
                    <h1 className='pla-name'>{name}</h1>
                    <p className='pla-text'>{plantDesc}</p>
                    <div className='rating-cont'>
                        <MdOutlineStarPurple500 className='star' />
                        <MdOutlineStarPurple500 className='star'/>
                        <MdOutlineStarPurple500 className='star'/>
                        <MdOutlineStarPurple500 className='star'/>
                        <MdOutlineStarPurple500 className='star'/>
                        
                        <p className='pla-text ra'>{rating}</p>
                    </div>
                    <div className='pri-cont'>
                        <LuIndianRupee className='act-pri' />
                        <p className='act-pri act'>{actualPrice}</p>
                    
                        <LuIndianRupee className='price ic'/>
                        <p className='price'>{price}</p>
                    </div>
                    <div className='plan-cont-butns'>
                        <div className='add-btn-cont'>
                            <p className='minus'>-</p>
                            
                            <Popup trigger=
                                {<button className='add-btn' onClick={onAddCart}>Add to cart  +</button>} 
                                modal nested>
                                {
                                    close => (
                                        <div className='modal popup'>
                                            <button className='close-icon' onClick= {() => close()}><IoMdClose /></button>
                                            <div className='content'>
                                                <AddToCartModel closeOpp={close} />
                                            </div>
                                            
                                        </div>
                                    )
                                }
                            </Popup>
                            
                        </div>
                        <button className='add-btn-cont btnbuy'>
                            Buy on Rent
                        </button>
                        
                    </div>
                </div>
            </div>
        </li>
    )
}

export default PlantItem