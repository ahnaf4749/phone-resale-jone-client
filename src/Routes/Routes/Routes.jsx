import Dashboardlayout from "../../Layout/Dashboardlayout/Dashboardlayout";
import Allproducts from "../../Pages/Allproducts/Allproducts";
import Blog from "../../Pages/Blog/Blog";
import Addproducts from "../../Pages/Dashboard/Addproducts/Addproducts";
import Allsellars from "../../Pages/Dashboard/Allsellars/Allsellars";
import Allusers from "../../Pages/Dashboard/Allusers/Allusers";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import Myorder from "../../Pages/Dashboard/Myorder/Myorder";
import Myproducts from "../../Pages/Dashboard/Myproducts/Myproducts";
import Payment from "../../Pages/Dashboard/Payment/Payment";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Signup from "../../Pages/Signup/Signup";
import AdminRoute from "../Adminroute/Adminroute";
import Privateroute from "../Privateroute/Privateroute";
import Sellarroute from "../Sellarroute/Sellarroute";
const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../Layout/Main/Main");
const { default: Home } = require("../../Pages/Home/Home/Home");
const { default: Login } = require("../../Pages/Login/Login");

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'signup',
                element: <Signup></Signup>
            },
            {
                path: 'blog',
                element: <Blog></Blog>
            },
            {
                path: 'allProducts/:name',
                element: <Allproducts></Allproducts>,
                loader: ({ params }) => fetch(`https://resale-jone-servar.vercel.app/allProducts/${params?.name}`)
            },
        ]
    },
    {
        path: '/dashboard',
        element: <Privateroute><Dashboardlayout></Dashboardlayout></Privateroute>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/dashboard/addproducts',
                element: <Sellarroute><Addproducts></Addproducts></Sellarroute>
            },
            {
                path: '/dashboard/allusers',
                element: <AdminRoute><Allusers></Allusers></AdminRoute>
            },
            {
                path: '/dashboard/allsellars',
                element: <AdminRoute><Allsellars></Allsellars></AdminRoute>
            },
            {
                path: '/dashboard/myproducts',
                element: <Sellarroute><Myproducts></Myproducts></Sellarroute>
            },
            {
                path: '/dashboard/myorder',
                element: <Myorder></Myorder>
            },
            {
                path: '/dashboard/payment/:id',
                element: <Payment></Payment>,
                loader: ({ params }) => fetch(`https://resale-jone-servar.vercel.app/bookings/${params.id}`)
            },
        ]
    }

])