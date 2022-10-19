import './App.css';
import {LogInPage} from "./Components/Login/SignIn/LogInPage";
import {Navigate, Route, Routes} from "react-router-dom";
import {MainPage} from "./Components/Blog/MainPage";
import {Topic} from "./Components/Topic/Topic";
import {Footer} from "./Components/Footer/Footer";
import HorizontalLinearStepper from "./Components/Login/SignUp/SingUpPage";
import {createTheme, ThemeProvider} from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: '#f4a384'
        },
        secondary: {
            main: '#00203FFF'
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
                    <Route path='/login' element={<LogInPage/>}/>
                    <Route path='/blog' element={<MainPage/>}/>
                    <Route path='/register' element={<HorizontalLinearStepper/>}/>
                    <Route path='*' element={<div><b>404 not Found</b></div>}/>
                    <Route path='/' element={<Navigate to="/login"/>}
                    />
                </Routes>
                <Footer/>
            </div>
        </ThemeProvider>
    );
}

export default App;
