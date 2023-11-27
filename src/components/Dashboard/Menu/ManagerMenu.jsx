import { MenuBook, Subscriptions, Summarize } from "@mui/icons-material";
import MenuItem from "../Sidebar/MenuItem";
const ManagerMenu = () => {
   return (
      <>
         <>
            <MenuItem address="/dashboard/sale-summary" icon={Summarize} label="Sales Summary"></MenuItem>
            <MenuItem address="/dashboard/manage-product" icon={MenuBook} label="Manage Product"></MenuItem>
            <MenuItem address="/dashboard/add-product" icon={MenuBook} label="Add Product"></MenuItem>
            <MenuItem address="/dashboard/sales-collection" icon={MenuBook} label="Sales Collection"></MenuItem>
            <MenuItem address="/dashboard/checkout" icon={MenuBook} label="Check-Out"></MenuItem>
            <MenuItem address="/dashboard/subscription" icon={Subscriptions} label="Subscription"></MenuItem>
         </>
      </>
   );
};

export default ManagerMenu;