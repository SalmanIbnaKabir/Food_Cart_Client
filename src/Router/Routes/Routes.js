import AddService from "../../Pages/AddService/AddService";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/LoginAll/Login/Login";
import SignUp from "../../Pages/LoginAll/SignUp/SignUp";
import MyReview from "../../Pages/MyReview/MyReview";
import AllServices from "../../Pages/Services/AllServices/AllServices";
import ServiceDetails from "../../Pages/Services/ServiceDetails.js/ServiceDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../Layout/Main");

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      },
      {
        path: '/services',
        element: <AllServices></AllServices>
      },
      {
        path: '/services/:id',
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) => fetch(`https://assignment-11-server-mocha.vercel.app/services/${params.id}`)
      },
      {
        path: '/services/services/:id',
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) => fetch(`https://assignment-11-server-mocha.vercel.app/services/${params.id}`)
      },
      {
        path: '/myreview',
        element: <PrivateRoute><MyReview></MyReview></PrivateRoute>
      },
      {
        path: '/addservice',
        element: <PrivateRoute><AddService></AddService></PrivateRoute>
      }

    ]
  },
  {
    path:'*',
    element: <div className="text-warning text-center mt-10">No Page Found || 404</div>
  }
])


export default router;


