import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './pages/HomePage.jsx';
import BlogPage from './pages/BlogPage.jsx';
import AuthorsPage from './pages/AuthorsPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import SignUpPage from './pages/SignUpPage.jsx';
import ResourcePage from './pages/ResourcePage.jsx';

const router = createBrowserRouter([
  {
    path:"/", 
    element:<App />,  
    children: [
    {
      path:"/",
      element:<HomePage />,
    },
    {
      path:"/blogs",
      element:<BlogPage />,
    },  
    {
      path:"/resources",
      element:<ResourcePage />,
    },    
    {
      path:"/authors",
      element:<AuthorsPage />,
    },
    {
      path:"/contact",
      element:<ContactPage />,
    },  
    {
      path:"/login",
      element:<LoginPage />,
    },  
    {
      path:"/signup",
      element:<SignUpPage />,
    },        
   ]  
  }, 
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
