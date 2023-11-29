import { Link } from "react-router-dom";

const Copyright = () => {
   return (
      <>
         <div className="py-6 text-sm font-semibold text-center bg-blue-500 dark:text-gray-400">© {new Date().getFullYear()} <Link to="/" className="hover:text-white">InventoHub</Link>. All rights reserved.</div>
      </>
   );
};

export default Copyright;