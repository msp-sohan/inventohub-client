import { Link } from "react-router-dom";
import Copyright from "./Copyright";
import { Container } from "@mui/material";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";

const Footer = () => {
   return (
      <>
         <footer className="px-4 divide-y bg-blue-500  dark:text-gray-100">
            <Container maxWidth="xl">
               <div className="container text-white flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
                  <div className="lg:w-1/3">
                     <Link rel="noopener noreferrer" to="/" className="flex justify-center space-x-3 lg:justify-start">
                        <img src="https://i.ibb.co/PFhTpK2/Invebto-Hub-2.png" className="w-[45%] md:w-[25%] lg:w-[45%] bg-white rounded-lg" alt="" />
                     </Link>
                     <div className="py-6 text-center lg:text-left ">
                        <p className="pb-6 text-[17px]">Empowering Businesses, Simplifying Management</p>
                     </div>
                  </div>
                  <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
                     <div className="space-y-3">
                        <h3 className="tracking-wider uppercase font-bold dark:text-gray-50 text-lg">Product</h3>
                        <ul className="space-y-1">
                           <li>
                              <a rel="noopener noreferrer" href="#">Features</a>
                           </li>
                           <li>
                              <a rel="noopener noreferrer" href="#">Integrations</a>
                           </li>
                           <li>
                              <a rel="noopener noreferrer" href="#">Pricing</a>
                           </li>
                           <li>
                              <a rel="noopener noreferrer" href="#">FAQ</a>
                           </li>
                        </ul>
                     </div>
                     <div className="space-y-3">
                        <h3 className="tracking-wider uppercase font-bold dark:text-gray-50 text-lg">Company</h3>
                        <ul className="space-y-1">
                           <li>
                              <a rel="noopener noreferrer" href="#">Privacy</a>
                           </li>
                           <li>
                              <a rel="noopener noreferrer" href="#">Terms of Service</a>
                           </li>
                        </ul>
                     </div>
                     <div className="space-y-3">
                        <h3 className="uppercase dark:text-gray-50 font-bold text-lg">Developers</h3>
                        <ul className="space-y-1">
                           <li>
                              <a rel="noopener noreferrer" href="#">Public API</a>
                           </li>
                           <li>
                              <a rel="noopener noreferrer" href="#">Documentation</a>
                           </li>
                           <li>
                              <a rel="noopener noreferrer" href="#">Guides</a>
                           </li>
                        </ul>
                     </div>
                     <div className="space-y-3">
                        <div className="uppercase dark:text-gray-50 font-bold text-lg">Social media</div>
                        <div className="flex justify-start space-x-3">
                           <a rel="noopener noreferrer" href="https://www.facebook.com" title="Facebook" className="flex items-center p-1">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                                 <Facebook />
                              </svg>
                           </a>
                           <a rel="noopener noreferrer" href="https://twitter.com" title="Twitter" className="flex items-center p-1">
                              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current">
                                 <Twitter />
                              </svg>
                           </a>
                           <a rel="noopener noreferrer" href="https://www.instagram.com" title="Instagram" className="flex items-center p-1">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="w-5 h-5 fill-current">
                                 <Instagram />
                              </svg>
                           </a>
                        </div>
                     </div>
                  </div>
               </div>
               <Copyright></Copyright>
            </Container>
         </footer>
      </>
   );
};

export default Footer;