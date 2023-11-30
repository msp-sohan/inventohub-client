import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../components/Shared/Loader';
import useRole from '../hooks/useRole';

const ProtectedRoute = ({ children }) => {
   const { user, loading } = useAuth();

   const { role, isLoading } = useRole()

   const location = useLocation();

   if (loading || isLoading) return <Loader />;

   if (user && (role === 'admin' || role === 'manager')) {
      return children;
   }

   return <Navigate to='/' state={{ from: location }} replace={true} />;
};

export default ProtectedRoute;
