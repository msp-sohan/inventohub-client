import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import { Login, PersonAdd } from '@mui/icons-material';
import useAuth from '../../../hooks/useAuth';
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';
import ToogleTheme from '../../ToogleTheme/ToogleTheme';
import { useState } from 'react';

const userIcon = 'https://i.ibb.co/6HtdFTk/585e4bf3cb11b227491c339a.png';

const DashboardNavbar = ({ handleDrawerToggle }) => {
   const { user, logOut } = useAuth();

   const [anchorElUser, setAnchorElUser] = useState(null);

   const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
   };

   const handleCloseUserMenu = () => {
      setAnchorElUser(null);
   };

   return (
      <AppBar sx={{ backgroundColor: '', zIndex: '-0', position: 'absolute' }}>
         <Container maxWidth={'xl'} sx={{display: 'flex', justifyContent: 'end', alignItems: 'center', gap: '0px'}}>
            <ToogleTheme/>
            <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'end' }}>
               <Box sx={{ flexGrow: 1 }}>
                  <Toolbar>
                     <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ display: { sm: 'none' } }}
                     >
                        <MenuIcon />
                     </IconButton >
                  </Toolbar>
               </Box>
               <Box sx={{ flexGrow: 0 }}>
                  <Tooltip title="Open Profile">
                     <IconButton onClick={handleOpenUserMenu}>
                        <Avatar sx={{ width: 48, height: 48 }} alt="Remy Sharp" src={user?.photoURL ? user?.photoURL : userIcon} />
                     </IconButton>
                  </Tooltip>
                  <Menu
                     sx={{ mt: '45px' }}
                     id="menu-appbar"
                     anchorEl={anchorElUser}
                     anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                     }}
                     keepMounted
                     transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                     }}
                     open={Boolean(anchorElUser)}
                     onClose={handleCloseUserMenu}
                  >
                     {user && user?.email ? (
                        <MenuItem sx={{ display: 'block' }} onClick={handleCloseUserMenu}>
                           <Typography
                              sx={{
                                 paddingLeft: '5px',
                                 display: 'flex',
                                 justifyContent: 'center',
                                 alignItems: 'center',
                              }}
                              textAlign="center"
                           >
                              <PersonIcon /> <span className='pl-3'>{user?.displayName}</span>
                           </Typography>
                           <Button
                              onClick={logOut}
                              sx={{
                                 display: 'flex',
                                 justifyContent: 'start',
                                 alignItems: 'center',
                                 color: 'red',
                                 fontWeight: '600',
                                 width: '100%',
                                 '&:hover': {
                                    backgroundColor: '#001B79',
                                 },
                                 marginTop: '5px',
                              }}
                           >
                              <LogoutIcon />
                              <span className='pl-2'>LogOut</span>
                           </Button>
                        </MenuItem>
                     ) : (
                        <MenuItem sx={{ display: 'grid' }} onClick={handleCloseUserMenu}>
                           <Link to="/login" className='hover:bg-[#001B79] rounded-md'>
                              <Button sx={{ ":hover": { color: 'white' } }}>
                                 <Login sx={{ mr: 1 }} />
                                 Login
                              </Button>
                           </Link>
                           <Link to="/signup" className='hover:bg-[#001B79] rounded-md'>
                              <Button sx={{ ":hover": { color: 'white' } }}>
                                 <PersonAdd sx={{ mr: 1 }} />
                                 Register
                              </Button>
                           </Link>
                        </MenuItem>
                     )}
                  </Menu>
               </Box>
            </Toolbar>
         </Container>
      </AppBar>
   );
};

export default DashboardNavbar;
