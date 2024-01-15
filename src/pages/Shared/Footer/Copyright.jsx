import { FaArrowUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Copyright = () => {
   const [showArrow, setShowArrow] = useState(false);

   useEffect(() => {
      const handleScroll = () => {
         // Set showArrow to true when scrolled down, false when at the top
         setShowArrow(window.scrollY > 0);
      };

      // Add scroll event listener
      window.addEventListener("scroll", handleScroll);

      // Clean up the event listener when the component unmounts
      return () => {
         window.removeEventListener("scroll", handleScroll);
      };
   }, []);

   return (
      <div className="relative">
         <div className="py-6 text-sm font-semibold text-center bg-blue-500 dark:text-gray-400">
            © {new Date().getFullYear()} <Link to="/" className="hover:text-white">InventoHub</Link>. All rights reserved.
         </div>
         {showArrow && (
            <div className="fixed bottom-4 right-4">
               <FaArrowUp className="text-black dark:text-gray-400 text-4xl cursor-pointer hover:bg-gray-400 p-2 rounded-full" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
            </div>
         )}
      </div>
   );
};

export default Copyright;
