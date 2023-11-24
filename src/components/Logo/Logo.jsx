import { Box } from "@mui/material";
import { NavLink } from "react-router-dom";

const Logo = ({ logo }) => {
   return (
      <>
         <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <NavLink to="/">
               <img src={logo} className='' alt="Your Logo" style={{ height: '35px', marginRight: '8px', backgroundColor: 'white', borderRadius: '5px' }} />
            </NavLink>
         </Box>
      </>
   );
};

export default Logo;