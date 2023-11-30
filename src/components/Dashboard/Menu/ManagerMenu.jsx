import { AppRegistration, DomainAdd, HomeWork, Payment, PostAdd, ShoppingCartCheckout, Summarize } from "@mui/icons-material";
import MenuItem from "../Sidebar/MenuItem";
const ManagerMenu = () => {
   return (
      <>
         <>
            <MenuItem address="/dashboard" icon={HomeWork} label="Dashboard Home"></MenuItem>
            <MenuItem address="/dashboard/sale-summary" icon={Summarize} label="Sales Summary"></MenuItem>
            <MenuItem address="/dashboard/manage-product" icon={AppRegistration} label="Manage Product"></MenuItem>
            <MenuItem address="/dashboard/add-product" icon={PostAdd} label="Add Product"></MenuItem>
            <MenuItem address="/dashboard/sales-collection" icon={DomainAdd} label="Sales Collection"></MenuItem>
            <MenuItem address="/dashboard/checkout" icon={ShoppingCartCheckout} label="Proceed Checkout"></MenuItem>
            <MenuItem address="/dashboard/subscription" icon={Payment} label="Subscription"></MenuItem>
         </>
      </>
   );
};

export default ManagerMenu;