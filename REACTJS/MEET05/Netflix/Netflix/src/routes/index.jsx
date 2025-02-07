import { createBrowserRouter } from 'react-router-dom';
import Index from "../pages/Index";
import Layout from "../pages/Layout";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Index />,
            },
            
        ]
    }
])
