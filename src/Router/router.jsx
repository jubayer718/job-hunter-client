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
import MyPostedJob from "../Pages/myPostedJob/MyPostedJob";
import ViewApplications from "../Pages/viwApplications/ViewApplications";

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
      }, {
        path: '/myPostedJob',
        element:<PrivateRoute><MyPostedJob></MyPostedJob></PrivateRoute>
      }, {
        path: '/viewApplication/jobs/:job_id',
        element: <PrivateRoute><ViewApplications></ViewApplications></PrivateRoute>,
        loader:({params})=>fetch(`http://localhost:3000/job_application/jobs/${params.job_id}`)
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