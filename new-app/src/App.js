import './App.css';
import {Header} from "./Components/Header/Header";
import {StartJourney} from "./Components/StartJourney/StartJourney";
import {List} from "./Components/List/List";
import {WhyUs} from "./Components/WhyUs/WhyUs";
import map from "./assets/map.png"
import footer from "./assets/footer.png"

function App() {
    return (
        <div className="background">
            <Header/>
            <div className="dottedLine">
                <StartJourney/>
                <List/>
            </div>
            <WhyUs />
            <div className="map">
                <img src={map} alt="map"/>
            </div>

            <footer>
                <img src={footer} alt={'footer'}/>
            </footer>
        </div>
    );
}

export default App;
