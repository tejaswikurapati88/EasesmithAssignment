import './index.css'

const PlantItem=(props)=>{
    const {plantDetails}= props
    const {plantId,
            imageUrl, 
            name,
            plantDesc,
            rating,
            actualPrice,
            price}= plantDetails
    return (
        <li className='nur-list'>plants</li>
    )
}

export default PlantItem