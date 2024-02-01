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
import ManageProduct from '../pages/Dashboard/ShopManager/ManageProduct'
import AddProduct from '../pages/Dashboard/ShopManager/AddProduct'
import SalesCollection from '../pages/Dashboard/ShopManager/SalesCollection'
import CheckOut from '../pages/Dashboard/ShopManager/CheckOut'
import Subscription from '../pages/Dashboard/ShopManager/Subscription'
import SalesSummary from '../pages/Dashboard/ShopManager/SalesSummary'
import AdminRoute from './AdminRoute'
import ManagerRoute from './ManagerRoute'
import Forbidden from '../pages/Forbidden/Forbidden'
import ProtectedRoute from './ProtectedRoute'
import DashboardHome from '../pages/Dashboard/DashboardHome/DashboardHome'
import OurGoal from '../pages/OurGoal/OurGoal'
import MeetOurTeam from '../pages/MeetOurTeam/MeetOurTeam'
import FAQ from '../pages/FAQ/FAQ'


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
            path: "/create-store",
            element: <PrivateRoute><CreateStore /></PrivateRoute>
         },
         {
            path: "/watch-demo",
            element: <WatchDemo></WatchDemo>
         },
         {
            path: "/our-goal",
            element: <OurGoal />
         },
         {
            path: "/meetourteam",
            element: <MeetOurTeam />
         },
         {
            path: "/faq",
            element: <FAQ />
         },
      ],
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
      path: '/forbidden',
      element: <Forbidden></Forbidden>
   },
   {
      path: '/dashboard',
      element: <ProtectedRoute><DashboardLayout /></ProtectedRoute>,
      children: [
         {
            index: true,
            element: <DashboardHome />
         },
         // Admin Routes
         {
            path: 'salesummary',
            element: <PrivateRoute><AdminRoute><SaleSummary></SaleSummary></AdminRoute></PrivateRoute>
         },
         {
            path: 'manage-shops',
            element: <PrivateRoute><AdminRoute><ManageShops></ManageShops></AdminRoute></PrivateRoute>
         },

         // Manager Routes
         {
            path: 'manage-product',
            element: <ProtectedRoute><ManagerRoute><ManageProduct></ManageProduct></ManagerRoute></ProtectedRoute>
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