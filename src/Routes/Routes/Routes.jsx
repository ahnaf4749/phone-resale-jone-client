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
import Signup from "../../Pages/Signup/Signup";
import AdminRoute from "../Adminroute/Adminroute";
import Privateroute from "../Privateroute/Privateroute";
const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../Layout/Main/Main");
const { default: Home } = require("../../Pages/Home/Home/Home");
const { default: Login } = require("../../Pages/Login/Login");

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
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
                loader: ({ params }) => fetch(`http://localhost:5000/allProducts/${params?.name}`)
            },
        ]
    },
    {
        path: '/dashboard',
        element: <Privateroute><Dashboardlayout></Dashboardlayout></Privateroute>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/dashboard/addproducts',
                element: <Addproducts></Addproducts>
            },
            {
                path: '/dashboard/allusers',
                element: <Allusers></Allusers>
            },
            {
                path: '/dashboard/allsellars',
                element: <Allsellars></Allsellars>
            },
            {
                path: '/dashboard/myproducts',
                element: <Myproducts></Myproducts>
            },
            {
                path: '/dashboard/myorder',
                element: <Myorder></Myorder>
            },
            {
                path: '/dashboard/payment/:id',
                element: <Payment></Payment>,
                loader: ({ params }) => fetch(`http://localhost:5000/bookings/${params.id}`)
            },
        ]
    }
])