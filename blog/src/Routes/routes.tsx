import { SignIn } from '../Pages/Login/SignIn/SignIn';
import { BlogPage } from '../Pages/Blog/BlogPage';
import { SingUp } from '../Pages/Login/SignUp/SingUp';
import { ErrorPath } from '../Pages/ErrorPath/ErrorPath';
import { Settings } from '../Pages/Settings/Settings';
import { Users } from '../Pages/Users/Users';
import { Posts } from '../Pages/Posts/Posts';

export const routes = [
  {
    path: '/',
    element: <SignIn />,
    privatePage: false,
  },
  {
    path: '/blog',
    element: <BlogPage />,
    privatePage: true,
  },
  {
    path: '/blog/*',
    element: <BlogPage />,
    privatePage: true,
  },
  {
    path: '/settings',
    element: <Settings />,
    privatePage: true,
  },
  {
    path: '/users',
    element: <Users />,
    privatePage: true,
  },
  {
    path: '/posts',
    element: <Posts />,
    privatePage: true,
  },
  {
    path: '/signup',
    element: <SingUp />,
    privatePage: false,
  },
  {
    path: '/signin',
    element: <SignIn />,
    privatePage: false,
  },
  {
    path: '*',
    element: <ErrorPath />,
    privatePage: false,
  },
];
