import { AccountBalanceWallet, Store } from "@mui/icons-material";
import MenuItem from "../Sidebar/MenuItem";

const AdminMenu = () => {
   return (
      <>
         <MenuItem address="/dashboard/salesummary" icon={AccountBalanceWallet} label="Sale Summery"></MenuItem>
         <MenuItem address="/dashboard/manage-shops" icon={Store} label="Manage Shops"></MenuItem>
         {/* <MenuItem address="/dashboard/manage-users" icon={Home} label="Manage Users"></MenuItem> */}
      </>
   );
};

export default AdminMenu;