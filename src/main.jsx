import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home';
import Banner from './Components/Banner/Banner';
import Details from './Components/Details/Details';
import AppliedJobs from './Components/AppliedJobs/AppliedJobs';
import Error from './Components/Error/Error';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement:<Error></Error>,
    children:([
      {
        path: "/",
        element:<Banner></Banner>,
        loader:() => fetch('categories.json')
      },
      {
        path:"/details/:jobId",
        loader:() => fetch('jobs.json'),
        element:<Details></Details>
      },
      {
        path:"/appliedjobs",
        loader: () => fetch('jobs.json'),
        element:<AppliedJobs></AppliedJobs>
        
      }
    ])
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
