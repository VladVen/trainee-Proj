import {SignIn} from "../Pages/Login/SignIn/SignIn";
import {MainPage} from "../Pages/Blog/MainPage";
import {SingUp} from "../Pages/Login/SignUp/SingUp";
import {ErrorPath} from "../Pages/ErrorPath/ErrorPath";
import {Settings} from "../Pages/Settings/Settings";
import {Users} from "../Pages/Users/Users";


export const routes = [
    {
        path: '/',
        element: <SignIn />,
        needAuth: false
    },

    {
        path: '/blog',
        element: <MainPage />,
        needAuth: true
    },
    {
        path: '/settings',
        element: <Settings />,
        needAuth: true
    },
    {
        path: '/users',
        element: <Users />,
        needAuth: true
    },
    {
        path: '/signup',
        element: <SingUp />,
        needAuth: false
    },
    {
        path: '/signin',
        element: <SignIn />,
        needAuth: false
    },
    {
        path: '*',
        element: <ErrorPath />,
        needAuth: false
    },

]

