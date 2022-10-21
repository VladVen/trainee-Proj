import './App.css';
import {Route, Routes} from "react-router-dom";
import {Topic} from "./Pages/Topic/Topic";
import {Footer} from "./Pages/Footer/Footer";
import {createTheme, ThemeProvider} from "@mui/material";
import {routes} from "./Routes/routes";

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
    components: {
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    backgroundColor: '#F7C3B1',
                },
                arrow: {
                    color: '#F7C3B1'
                },
            },
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
                        routes.map(({path, element}, key) => <Route path={path} element={element} key={key} />)
                    }
                </Routes>
                <Footer/>
            </div>
        </ThemeProvider>
    );
}

export default App;
