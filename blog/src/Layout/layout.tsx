import {SignIn} from "../Components/Login/SignIn/SignIn";
import {MainPage} from "../Components/Blog/MainPage";
import {SingUp} from "../Components/Login/SignUp/SingUp";
import {ErrorPath} from "../Components/ErrorPath/ErrorPath";


export const layout = [
    {
        path: '/',
        element: <MainPage />
    },
    {
        path: '/signin',
        element: <SignIn />
    },
    {
        path: '/blog',
        element: <MainPage />
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

