import { Navigate, useLocation } from "react-router-dom";

import Loader from "../components/Shared/Loader";
import useAuth from "../hooks/useAuth";
import useRole from "../hooks/useRole";

const AdminRoute = ({ children }) => {
   const { user, loading } = useAuth();
   const { role } = useRole()
   const location = useLocation();

   if (loading) {
      return <Loader></Loader>
   }
   if (user && role === 'manager') {
      return children
   }
   return <Navigate to="/forbidden" state={{ from: location }} replace></Navigate>
};
export default AdminRoute;