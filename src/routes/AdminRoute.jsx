import { Navigate, useLocation, useNavigate } from "react-router-dom";

import Loader from "../components/Shared/Loader";
import useAuth from "../hooks/useAuth";
import useRole from "../hooks/useRole";

const AdminRoute = ({ children }) => {
   const { user, loading } = useAuth();
   const { role } = useRole()
   const navigate = useNavigate()
   const location = useLocation();

   if (loading) {
      return <Loader></Loader>
   }
   if (role !== 'admin') {
      navigate("/forbidden")
   }
   if (user && role === 'admin') {
      return children
   }
   return <Navigate to="/forbidden" state={{ from: location }} replace></Navigate>
};
export default AdminRoute;