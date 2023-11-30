import useRole from "../../../hooks/useRole";
import AdminHome from "../Admin/AdminHome";
import ManagerHome from "../ShopManager/ManagerHome";

const DashboardHome = () => {
   const { role } = useRole()
   return (
      <>
         <div>
            {role === 'admin' && <AdminHome />}
            {role === 'manager' && <ManagerHome />}
         </div>
      </>
   );
};

export default DashboardHome;