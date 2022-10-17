import './List.css'
import {Card} from "../common/Card";
import image from '../../assets/cardsImg/img.png'
import image_1 from '../../assets/cardsImg/img_1.png'
import image_2 from '../../assets/cardsImg/img_2.png'
import image_3 from '../../assets/cardsImg/img_3.png'

export const List = () => {
  return(
      <div className="trend">
          <div className="titles">
              <div className="trendTitle1">
                  Popular Destinations
              </div>
              <div className="trendTitle2">
                  Vacations to make your experience enjoyable in Indonesia!
              </div>
          </div>
          <div className="listCards">
              <Card img={image} location={'Manggarai Barat'}
                    duration={'3 Days'}
                    desc={'Flores Road Trip 3D2N'}
                    price={'Rp 6.705.000/orang'}
              />
              <Card img={image_1} location={'Bogor'}
                    duration={'1 Day'}
                    desc={'Forrester Glamping Co Bogor'}
                    price={'Rp 1.205.000/malam'}
              />
              <Card img={image_2} location={'Jakarta'}
                    duration={'Jakarta Bali'}
                    desc={'Paket Tiket Pesawat'}
                    price={'Rp 605.000 /person'}
              />
              <Card img={image_3} location={'Kota Semarang'}
                    duration={'14 Days'}
                    desc={'Desa Wisata Kandri'}
                    price={'Rp 1.400.000/person'}
              />
          </div>
      </div>
  )
}