import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout/MainLayout";
import HomePage from "../Pages/Home/HomePage";
import Register from "../Pages/Register/Register";
import SignIn from "../Pages/SignIn/SignIn";
import JobDetails from "../Components/JobDetails/JobDetails";
import PrivateRoute from "./PriveteRoute/PrivateRoute";
import JobApply from "./Job/JobApply";
import MyApplication from "./MyApplication";
import AddNewJob from "../Pages/AddJob/AddNewJob";

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    errorElement:<h2>Route Not Found</h2>,
    children: [
      {
        path: '/',
        element:<HomePage></HomePage>
      }, {
        path: '/jobApply/:id',
        element:<JobApply></JobApply>
      },
      
      {
        path: '/jobs/:id',
        element:<PrivateRoute> <JobDetails></JobDetails></PrivateRoute>,
        loader:({params})=>fetch(`http://localhost:3000/jobs/${params.id}`)
      }
      , {
        path: '/myApplication',
        element:<PrivateRoute><MyApplication></MyApplication></PrivateRoute>,
        
      }, {
        path: '/addNewJob',
        element:<PrivateRoute><AddNewJob></AddNewJob></PrivateRoute>
      },
      {
        path: '/register',
        element:<Register></Register>
      }, {
        path: '/signIn',
        element:<SignIn></SignIn>
     }
   ]
  }
])

export default router