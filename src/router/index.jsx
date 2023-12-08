import { createHashRouter } from 'react-router-dom'
import Home from '../page/Home.jsx';
import AdminLayout from '../page/layout/AdminLayout.jsx'
import { Dashboard } from '../page/dashboard/Dashboard.jsx';
import { HttpDemo } from '../page/obfetch/HttpDemo.jsx';

const router = createHashRouter([
    {
        path: "/",
        element: <AdminLayout/>,
        children: [
            {
                path: 'home',
                element: <Home/>,
            },
            {
                path: 'dashboard',
                element: <Dashboard/>,
            },
            {
                path: 'http',
                element: <HttpDemo/>,
            }
        ]
    },
    {
        path: "about",
        element: <div>About</div>,
    },
]);

export {router}