import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import 'swiper/css';
// bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
// fonts and icons
import '././assets/css/icofont.min.css';
import '././assets/css/animate.css';
import '././assets/css/style.min.css';


const router = createBrowserRouter([
  {
    path: "/", // home page path
    element:<App />, //homepage
  },
]);


createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
  )
