import './App.css';
import {Route, Routes} from "react-router-dom";
import {Topic} from "./Pages/Topic/Topic";
import {createTheme, ThemeProvider} from "@mui/material";
import {routes} from "./Routes/routes";
import {useSelector} from "react-redux";
import {AppStateType} from "./redux/store";
import {Footer} from "./Pages/Footer/Footer";
import Box from "@mui/material/Box";

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
        background: {
            paper: '#f4a384'
        }
    },
    components: {
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    backgroundColor: '#F7C3B1',
                    color: '#00203FFF'
                },
                arrow: {
                    color: '#F7C3B1'
                },
            },
        },
    },
});


function App() {
    const authData = useSelector((state: AppStateType) => state.auth.authData)

    return (
        <ThemeProvider theme={theme} >
            <div className="App">
                <Box sx={{mb: '30px'}}>
                    <Topic/>
                    <Routes>
                        {
                            routes.map(({path, element, needAuth}, key) => {
                                if(needAuth && !authData) {
                                    return <Route path={'/'} element={element} key={key}/>
                                }
                                return <Route path={path} element={element} key={key}/>
                            })
                        }
                    </Routes>
                </Box>
                <Footer/>
            </div>
        </ThemeProvider>
    );
}

export default App;
