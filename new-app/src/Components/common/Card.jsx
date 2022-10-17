import '../List/List.css'
import icon from '../../assets/cardsImg/location.png'


export const Card = ({img, location, desc, duration, price}) => {
    return (
        <div className="card">
            <img src={img} alt={location}/>
            <div>
                <img src={icon} alt="location"/>
                {location}
            </div>
            <div>
                <div>
                    <strong>{desc}</strong>
                </div>
                <div>
                    {duration}
                </div>
                <div className="price">
                    {price}
                </div>
            </div>
        </div>
    )
}