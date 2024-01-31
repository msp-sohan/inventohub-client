import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar/Navbar";
import Footer from "../pages/Shared/Footer/Footer";
import { Container } from "@mui/material";

const MainLayout = () => {
   return (
      <>
         <Navbar></Navbar>
         <div className='min-h-[calc(100vh-377px)] dark:bg-gray-800'>
            <Container maxWidth="xl"><Outlet /></Container>
         </div>
         <Footer></Footer>
      </>
   );
};

export default MainLayout;