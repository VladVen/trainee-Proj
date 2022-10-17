import './StartJourney.css'
import googlePlay from '../../assets/googlePLay.png'
import appStore from '../../assets/appStore.png'
import illus from '../../assets/illus.png'


export const StartJourney = () => {
  return (
      <div className="hero">
        <div className="heroContainer">
          <div className="textLeft">
            <div className="titleBody">
              <div className="text1">
                Start your journey
                by one click, explore beautiful world!
              </div>
              <div className="text2">
                Plan and book your perfect trip with expert advice, travel tips, destination information and inspiration
                from us!
              </div>
            </div>
            <div className="download">
              <img src={googlePlay} alt="Google Play" />
                <img src={appStore} alt="App Store" />
            </div>
          </div>
          <div className="illus">
            <img src={illus} alt="illustration" />
          </div>
        </div>
      </div>
  )
}