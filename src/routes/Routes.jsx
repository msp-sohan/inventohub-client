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
// import SaleSummary from '../pages/Dashboard/Admin/SaleSummary'
import ManageShops from '../pages/Dashboard/Admin/ManageShops'
import ManageUsers from '../pages/Dashboard/Admin/ManageUsers'
import ManageProduct from '../pages/Dashboard/ShopManager/ManageProduct'
import AddProduct from '../pages/Dashboard/ShopManager/AddProduct'
import SalesCollection from '../pages/Dashboard/ShopManager/SalesCollection'

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
         // {
         //    index: true,
         //    element: <SaleSummary></SaleSummary>
         // },
         {
            path: 'manage-shops',
            element: <ManageShops></ManageShops>
         },
         {
            path: 'manage-users',
            element: <ManageUsers></ManageUsers>
         },
         {
            path: 'manage-product',
            element: <ManageProduct></ManageProduct>
         },
         {
            path: 'add-product',
            element: <AddProduct></AddProduct>
         },
         {
            path: 'sales-collection',
            element: <SalesCollection></SalesCollection>
         }

      ]
   }

])