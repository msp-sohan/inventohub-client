import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button, Grid, TextField } from '@mui/material';
import { useRef } from 'react';
import useGetProducts from '../../../../hooks/useGetProducts';
import { updateProduct } from '../../../../api/product';
import toast from 'react-hot-toast';
import { imageUpload } from '../../../../api/utilities';

const style = {
   position: 'absolute',
   top: '50%',
   left: '50%',
   transform: 'translate(-50%, -50%)',
   width: '100%',
   bgcolor: 'background.paper',
   border: '2px solid #000',
   boxShadow: 24,
   p: 4,
};

export default function UpdateModal({ open, handleClose, initialProduct }) {
   const formRef = useRef(null);
   const { refetch } = useGetProducts()
   const productId = initialProduct?._id

   const handleSubmit = async (event) => {
      event.preventDefault()
      const data = new FormData(event.currentTarget);
      const productName = data.get('productName')
      const image = data.get('productImage')
      const productQuantity = parseInt(data.get('productQuantity'))
      const productLocation = data.get('productLocation')
      const productionCost = parseInt(data.get('productionCost'))
      const profitMargin = parseInt(data.get('profitMargin'))
      const discount = parseInt(data.get('discount'))
      const productDescription = data.get('productDescription')

      try {
         const image_url = await imageUpload(image)

         const updatedProductData = {
            productName,
            productQuantity,
            productLocation,
            productionCost,
            profitMargin,
            discount,
            productDescription,
            productImage: image_url?.data?.display_url
         }

         await updateProduct({ productId, updatedProductData })

         toast.success('Product Updated Successfully')
      } catch (error) {
         toast.error(error.message)
      } finally {
         // Reset the form
         formRef.current.reset();
         refetch()
         handleClose()
      }
   }

   return (
      <div>
         <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
         >
            <Box maxWidth="md" sx={style}>
               <Box sx={{ marginTop: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <Typography sx={{ fontSize: 28, borderBottom: 2, borderColor: 'blue', mb: 5, fontWeight: 600 }}>
                     Update Your Product
                  </Typography>
                  <Box component="form" ref={formRef} required onSubmit={handleSubmit} sx={{ mt: 3 }}>
                     <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                           <TextField
                              name="productName"
                              required
                              focused
                              fullWidth
                              defaultValue={initialProduct?.productName}
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
                              focused
                              defaultValue={initialProduct?.productQuantity}
                              fullWidth
                              label="Product Quantity"
                              type="number"
                           />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                           <TextField
                              name="productLocation"
                              required
                              focused
                              defaultValue={initialProduct?.productLocation}
                              fullWidth
                              label="Product Location"
                           />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                           <TextField
                              name="productionCost"
                              required
                              fullWidth
                              focused
                              defaultValue={initialProduct?.productionCost}
                              type="number"
                              label="Buying Price"
                           />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                           <TextField
                              name="profitMargin"
                              required
                              fullWidth
                              focused
                              defaultValue={initialProduct?.profitMargin}
                              type="number"
                              label="Profit Margin"
                           />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                           <TextField
                              name="discount"
                              required
                              fullWidth
                              focused
                              defaultValue={initialProduct?.discount}
                              type="number"
                              label="Discount"
                           />
                        </Grid>
                        <Grid item xs={12}>
                           <TextField
                              name="productDescription"
                              required
                              focused
                              defaultValue={initialProduct?.productDescription}
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
                        Update Product
                     </Button>
                  </Box>
               </Box>
            </Box>
         </Modal>
      </div>
   );
}