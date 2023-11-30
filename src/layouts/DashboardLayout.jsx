import * as React from 'react';
// import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Toolbar from '@mui/material/Toolbar';
import { Outlet, useNavigate } from 'react-router-dom';
import { Home, Logout } from '@mui/icons-material';
import useAuth from '../hooks/useAuth';
import DashboardNavbar from '../components/Dashboard/Navbar/DashboardNavbar';
import MenuItem from '../components/Dashboard/Sidebar/MenuItem';
import AdminMenu from '../components/Dashboard/Menu/AdminMenu';
import Copyright from '../pages/Shared/Footer/Copyright';
import ManagerMenu from '../components/Dashboard/Menu/ManagerMenu';
import Loader from '../components/Shared/Loader';
import Helmat from '../components/Helmat/Helmat';
import useRole from '../hooks/useRole';
import useAllShops from '../hooks/useAllShops';
import toast from 'react-hot-toast';

const drawerWidth = 240;
const shopLogo = 'https://i.ibb.co/PFhTpK2/Invebto-Hub-2.png'

const DashboardLayout = (props) => {
   const { user, logOut, loading } = useAuth()
   const { role } = useRole()
   const navigate = useNavigate()
   const { data } = useAllShops()
   const shopUser = data?.find(shop => shop?.email === user?.email)

   const { window } = props;
   const [mobileOpen, setMobileOpen] = React.useState(false);

   const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
   };

   const handleLogout = () => {
      logOut()
         .then(() => {
            toast.success('Logout Successfully ');
            navigate('/login');
         })
         .catch((error) => {
            toast.error(error.message);
         });
   };

   const drawer = (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', marginBottom: '20px' }}>
         {/* Remove the unnecessary Toolbar component here */}
         <img src={shopUser?.shopLogo ? shopUser?.shopLogo : shopLogo} alt="" className='w-[80%] max-h-16' />
         <Divider />
         <List sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            {role === 'manager' && <ManagerMenu />}
            {role === 'admin' && <AdminMenu />}
         </List>
         <Divider />
         <div style={{ flexGrow: 1 }}>
            <List sx={{ display: 'flex', flexDirection: 'column' }}>
               <MenuItem address='/' icon={Home} label="Home" />
            </List>
         </div>
         <div>
            <hr />
            <button onClick={handleLogout} className='flex items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300 hover:text-gray-700 transition-colors duration-300 transform'>
               <Logout className='w-5 h-5' />
               <span className='mx-4 font-medium'>Logout</span>
            </button>
         </div>
      </div>
   );

   // Remove this const when copying and pasting into your project.
   const container = window !== undefined ? () => window().document.body : undefined;

   if (loading) {
      return <Loader />
   }
   return (
      <>
         <Helmat title="InventoHub | Dashboard" />
         <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" sx={{ width: "full" }}>
               <DashboardNavbar handleDrawerToggle={handleDrawerToggle} />
            </AppBar>
            <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }} aria-label="mailbox folders" >
               {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
               <Drawer
                  container={container}
                  variant="temporary"
                  open={mobileOpen}
                  onClose={handleDrawerToggle}
                  ModalProps={{ keepMounted: true }}
                  sx={{ display: { xs: 'block', sm: 'none' }, '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth } }}>
                  {/* Small Device */}
                  {drawer}
               </Drawer>
               <Drawer
                  variant="persistent"
                  open
                  sx={{ display: { xs: 'none', sm: 'block' }, '& .MuiDrawer-paper': { boxSizing: 'border-box', } }} >
                  {/* Large Devie */}
                  {drawer}
               </Drawer>
            </Box>
            <Box component="main" sx={{ flexGrow: 1, width: { sm: '100%', md: `calc(100% - ${drawerWidth}px)` } }} >
               <Toolbar />
               <div className='min-h-[calc(100vh-16vh)] p-3 lg:p-6'>
                  <Outlet />
               </div>
               <Copyright></Copyright>
            </Box>
         </Box>
      </>
   );
}

export default DashboardLayout;