import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import router from './Router/router.jsx';
import AuthProvider from './Components/AuthProvider.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      
   <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>,
)