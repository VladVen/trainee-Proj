import {SignIn} from "../Pages/Login/SignIn/SignIn";
import {MainPage} from "../Pages/Blog/MainPage";
import {SingUp} from "../Pages/Login/SignUp/SingUp";
import {ErrorPath} from "../Pages/ErrorPath/ErrorPath";
import {Settings} from "../Pages/Settings/Settings";


export const routes = [
    {
        path: '/',
        element: <MainPage />
    },

    {
        path: '/blog',
        element: <MainPage />
    },
    {
        path: '/settings',
        element: <Settings />
    },
    {
        path: '/signup',
        element: <SingUp />
    },
    {
        path: '/signin',
        element: <SignIn />
    },
    {
        path: '*',
        element: <ErrorPath />
    },

]

