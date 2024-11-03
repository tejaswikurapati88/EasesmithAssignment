import './index.css'

const Nursery=(props)=>{
    const {itemDetails}= props
    const {imgUrl, desc}= itemDetails
    return (
        <li className='nur-list'>
            <div className='nurs-list-cont'>
                <img src={imgUrl} alt='nursery-img' className='nursery-img'/>
                <p className='nurs-para'>{desc}</p>
            </div>
        </li>
    )
}

export default Nursery