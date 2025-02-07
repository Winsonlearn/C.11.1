import { createBrowserRouter } from 'react-router-dom';
import Index from '../pages/Index';
import Buy from '../pages/Buy';
import News from '../pages/News';
import Route404 from "../pages/404";
import Create from '../pages/Create';
import Details from "../pages/Details";
import Layout from '../pages/Layout';

import '../partials_style.css'
import '../index.css'
import '../buy-menu.css'
import '../news-menu.css'
import '../form.css'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Index />,
            },
            {
                path: '/buy-now',
                element: <Buy />,
            },
            {
                path: '/news',
                element: <News />,
            },
            {
                path: '/blogs/create',
                element: <Create />,
            },
            {
                path: '*',
                element: <Route404 />,
            },
            {
                path: '/blogs',
                element: <Details />,
            },
        ]
    }
])