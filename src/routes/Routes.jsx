import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import Home from '../pages/Home/Home/Home'
import Login from '../pages/Login/Login'
import SignUp from '../pages/SignUp/SignUp'
import DashboardLayout from '../layouts/DashboardLayout'
import WatchDemo from '../pages/WatchDemo/WatchDemo'
import CreateStore from '../pages/CreateStore/CreateStore'
import PrivateRoute from './PrivateRoute'
import SaleSummary from '../pages/Dashboard/Admin/SaleSummary'
import ManageShops from '../pages/Dashboard/Admin/ManageShops'
// import ManageUsers from '../pages/Dashboard/Admin/ManageUsers'
import ManageProduct from '../pages/Dashboard/ShopManager/ManageProduct'
import AddProduct from '../pages/Dashboard/ShopManager/AddProduct'
import SalesCollection from '../pages/Dashboard/ShopManager/SalesCollection'
import CheckOut from '../pages/Dashboard/ShopManager/CheckOut'
import Subscription from '../pages/Dashboard/ShopManager/Subscription'
import SalesSummary from '../pages/Dashboard/ShopManager/SalesSummary'
import AdminRoute from './AdminRoute'
import ManagerRoute from './ManagerRoute'

export const router = createBrowserRouter([
   {
      path: '/',
      element: <MainLayout />,
      errorElement: <ErrorPage />,
      children: [
         {
            path: '/',
            element: <Home />,
         },
         {
            path: '/login',
            element: <Login />
         },
         {
            path: '/signup',
            element: <SignUp />
         },
         {
            path: "/create-store",
            element: <PrivateRoute><CreateStore /></PrivateRoute>
         },
         {
            path: "/watch-demo",
            element: <WatchDemo></WatchDemo>
         }
      ],
   },
   {
      path: '/dashboard',
      element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
      children: [
         // Admin Routes
         {
            path: 'salesummary',
            element: <PrivateRoute><AdminRoute><SaleSummary></SaleSummary></AdminRoute></PrivateRoute>
         },
         {
            path: 'manage-shops',
            element: <PrivateRoute><AdminRoute><ManageShops></ManageShops></AdminRoute></PrivateRoute>
         },
         // {
         //    path: 'manage-users',
         //    element: <ManageUsers></ManageUsers>
         // },
         // Manager Routes
         {
            path: 'manage-product',
            element: <PrivateRoute><ManagerRoute><ManageProduct></ManageProduct></ManagerRoute></PrivateRoute>
         },

         {
            path: 'add-product',
            element: <PrivateRoute><ManagerRoute><AddProduct></AddProduct></ManagerRoute></PrivateRoute>
         },
         {
            path: 'sales-collection',
            element: <PrivateRoute><ManagerRoute><SalesCollection></SalesCollection></ManagerRoute></PrivateRoute>
         },
         {
            path: 'checkout',
            element: <PrivateRoute><ManagerRoute><CheckOut></CheckOut></ManagerRoute></PrivateRoute>
         },
         {
            path: 'subscription',
            element: <PrivateRoute><ManagerRoute><Subscription></Subscription></ManagerRoute></PrivateRoute>
         },
         {
            path: "sale-summary",
            element: <PrivateRoute><ManagerRoute><SalesSummary></SalesSummary></ManagerRoute></PrivateRoute>,
         }

      ]
   }

])