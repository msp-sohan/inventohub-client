import { Navigate } from "react-router-dom";
import Loader from "../components/Shared/Loader";
import useRole from "../hooks/useRole";

const ManagerRoute = ({ children }) => {
   const { role, isLoading } = useRole()

   if (isLoading) return <Loader></Loader>
   if (role === 'manager') return children

   return <Navigate to='/dashboard'></Navigate>
};
export default ManagerRoute;