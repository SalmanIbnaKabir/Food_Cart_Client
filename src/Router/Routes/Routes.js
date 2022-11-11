import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/LoginAll/Login/Login";
import SignUp from "../../Pages/LoginAll/SignUp/SignUp";
import AllServices from "../../Pages/Services/AllServices/AllServices";

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
      }

    ]
  }
])


export default router;


