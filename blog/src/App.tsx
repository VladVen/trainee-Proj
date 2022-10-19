import './App.css';
import {LogInPage} from "./Components/Login/LogInPage";
import {Navigate, Route, Routes} from "react-router-dom";
import {MainPage} from "./Components/Blog/MainPage";
import {Topic} from "./Components/Topic/Topic";
import {Footer} from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
        <Topic />
        <Routes>
            <Route path='/login' element={<LogInPage />}/>
            <Route path='/blog' element={<MainPage />}/>
            <Route path='*' element={<div><b>404 not Found</b></div>}/>
            <Route path='/' element={<Navigate to="/login" />}
            />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
