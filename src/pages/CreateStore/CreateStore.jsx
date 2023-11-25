import * as React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { Box, Button, Container } from '@mui/material';
import useAuth from '../../hooks/useAuth';
import toast from 'react-hot-toast';
import { imageUpload } from '../../api/utilities';
import { useNavigate } from 'react-router-dom';
import { addShop } from '../../api/shop';

const CreateStore = () => {
   const { user } = useAuth()
   const navigate = useNavigate()

   const handleSubmit = async (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      const shopName = data.get("shopName")
      const shopInfo = data.get("shopInfo")
      const shopLocation = data.get("shopLocation")
      const shopOwnerEmail = user?.email
      const shopOwnerName = user?.displayName
      const image = data.get('shopLogo')


      try {
         // Upload image
         const imageData = await imageUpload(image)

         const shopData = {
            shopName,
            shopInfo,
            shopLocation,
            shopOwnerEmail,
            shopOwnerName,
            shopLogo: imageData?.data?.display_url
         }

         //  save shop Details in database
         await addShop(shopData)

         navigate('/')
         toast.success('Create Shop Successfully')
      } catch (error) {
         console.log(error)
         toast.error(error.message)
      }
   };

   return (
      <React.Fragment>
         <SectionTitle title="Create a Shop" subtitle="Stats your Journey" width="80%" />

         <Container maxWidth="md" sx={{ backgroundColor: '#F1EFEF', mb: 6 }}>
            <Box component="form" onSubmit={handleSubmit} required sx={{ mt: 1 }}>
               <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                     <TextField item xs={12} sm={6}
                        required
                        id="shopName"
                        name="shopName"
                        label="Shop Name"
                        fullWidth
                        variant="outlined"
                     />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                     <TextField
                        focused
                        type='file'
                        required
                        id="shopLogo"
                        name="shopLogo"
                        label="Shop Logo"
                        fullWidth
                        variant="outlined"
                     />
                  </Grid>
                  <Grid item xs={12}>
                     <TextField
                        required
                        id="shopInfo"
                        name="shopInfo"
                        label="Shop Info"
                        fullWidth
                        multiline
                        minRows={3}
                        variant="outlined"
                     />
                  </Grid>
                  <Grid item xs={12}>
                     <TextField
                        required
                        id="shopLocation"
                        name="shopLocation"
                        label="Shop Location"
                        fullWidth
                        variant="outlined"
                     />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                     <TextField
                        focused
                        required
                        id="shopOwnerEmail"
                        name="shopOwnerEmail"
                        value={"shopOwnerEmail"}
                        label="Shop Owner Email"
                        fullWidth
                        variant="outlined"
                     />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                     <TextField
                        focused
                        required
                        id="shopOwnerName"
                        name="shopOwnerName"
                        value="shopOwnerName"
                        label="Shop Owner Name"
                        fullWidth
                        variant="outlined"
                     />
                  </Grid>
                  <Grid item xs={12}>
                     <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 3, fontSize: '18px', ":hover": { backgroundColor: '#1640D6', scale: '1.01' } }}
                     >
                        Create Shop
                     </Button>
                  </Grid>
               </Grid>
            </Box>
         </Container>
      </React.Fragment>
   );
}

export default CreateStore;