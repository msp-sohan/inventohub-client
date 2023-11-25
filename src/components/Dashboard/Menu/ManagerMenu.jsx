import { MenuBook } from "@mui/icons-material";
import MenuItem from "../Sidebar/MenuItem";
const ManagerMenu = () => {
   return (
      <>
         <>
            <MenuItem address="/dashboard/manage-product" icon={MenuBook} label="Manage Product"></MenuItem>
            <MenuItem address="/dashboard/add-product" icon={MenuBook} label="Add Product"></MenuItem>
            <MenuItem address="/dashboard/sales-collection" icon={MenuBook} label="Sales Collection"></MenuItem>
         </>
      </>
   );
};

export default ManagerMenu;