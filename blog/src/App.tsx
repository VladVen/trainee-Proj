import './App.css';
import {Route, Routes} from "react-router-dom";
import {Topic} from "./Components/Topic/Topic";
import {Footer} from "./Components/Footer/Footer";
import {createTheme, ThemeProvider} from "@mui/material";
import {layout} from "./Layout/layout";

const theme = createTheme({
    palette: {
        primary: {
            main: '#f4a384'
        },
        secondary: {
            main: '#FFE5B4'
        },
        text: {
            primary: '#00203FFF',
        },
    },
});


function App() {
    return (
        <ThemeProvider theme={theme} >
            <div className="App">
                <Topic/>
                <Routes>
                    {
                        layout.map(({path, element}, key) => <Route path={path} element={element} key={key} />)
                    }
                </Routes>
                <Footer/>
            </div>
        </ThemeProvider>
    );
}

export default App;
