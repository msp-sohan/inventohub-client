import { Box, Button, Grid, TextField } from "@mui/material";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAuth from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { addProduct } from "../../../api/product";
import { imageUpload } from "../../../api/utilities";
import Helmat from "../../../components/Helmat/Helmat";

const AddProduct = () => {
   const { user } = useAuth()
   const navigate = useNavigate()

   const handleSubmit = async (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      const productName = data.get('productName')
      const image = data.get('productImage')
      const productQuantity = parseInt(data.get('productQuantity'))
      const productLocation = data.get('productLocation')
      const productionCost = parseInt(data.get('productionCost'))
      const profitMargin = parseInt(data.get('profitMargin'))
      const discount = parseInt(data.get('discount'))
      const productDescription = data.get('productDescription')
      const userEmail = user?.email

      const image_url = await imageUpload(image)

      const productData = {
         productName,
         productQuantity,
         productLocation,
         productionCost,
         profitMargin,
         discount,
         productDescription,
         userEmail,
         productImage: image_url?.data?.display_url
      }

      try {
         const result = await addProduct(productData)
         console.log(result)
         toast.success('Product Added Successfully')
         navigate('/dashboard/manage-product')
      } catch (error) {
         console.log(error?.response?.data)
         toast.error(error.message)
      }
   };
   return (
      <>
         <Helmat title="InventoHub | Add Product" />
         <SectionTitle title="Add a Product" subtitle="Add Product" width="80%" />
         <Box maxWidth="md" sx={{ backgroundColor: '#EEF5FF', margin: 'auto', p: 2 }}>
            <Box sx={{ marginTop: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
               <Box component="form" required onSubmit={handleSubmit} sx={{ mt: 3 }}>
                  <Grid container spacing={3}>
                     <Grid item xs={12} sm={6}>
                        <TextField
                           name="productName"
                           required
                           fullWidth
                           label="Product Name"
                           autoFocus
                        />
                     </Grid>
                     <Grid item xs={12} sm={6}>
                        <TextField
                           type="file"
                           name="productImage"
                           required
                           focused
                           fullWidth
                           label="Product Image"
                        />
                     </Grid>
                     <Grid item xs={12} sm={6}>
                        <TextField
                           required
                           name="productQuantity"
                           fullWidth
                           label="Product Quantity"
                           type="number"
                        />
                     </Grid>
                     <Grid item xs={12} sm={6}>
                        <TextField
                           name="productLocation"
                           required
                           fullWidth
                           label="Product Location"
                        />
                     </Grid>
                     <Grid item xs={12} sm={4}>
                        <TextField
                           name="productionCost"
                           required
                           fullWidth
                           type="number"
                           label="Production Cost"
                        />
                     </Grid>
                     <Grid item xs={12} sm={4}>
                        <TextField
                           name="profitMargin"
                           required
                           fullWidth
                           type="number"
                           label="Profit Margin"
                        />
                     </Grid>
                     <Grid item xs={12} sm={4}>
                        <TextField
                           name="discount"
                           required
                           fullWidth
                           type="number"
                           label="Discount"
                        />
                     </Grid>
                     <Grid item xs={12}>
                        <TextField
                           name="productDescription"
                           required
                           fullWidth
                           label="Product Description"
                           multiline
                           minRows={2}
                           maxRows={4}
                        />
                     </Grid>

                  </Grid>
                  <Button
                     type="submit"
                     fullWidth
                     variant="contained"
                     sx={{ mt: 3, mb: 2, fontSize: 20 }}
                  >
                     Add Product
                  </Button>
               </Box>
            </Box>
         </Box>
      </>
   );
};

export default AddProduct;