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
import Helmat from '../../components/Helmat/Helmat';
import useRole from '../../hooks/useRole';

const CreateStore = () => {
   const { user } = useAuth()
   const { role } = useRole()
   const navigate = useNavigate()

   React.useEffect(() => {
      if (role === "admin" || role === "manager") {
         return navigate("/dashboard")
      }
   }, [role, navigate])

   const handleSubmit = async (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      const shopName = data.get("shopName")
      const shopDescription = data.get("shopDescription")
      const shopLocation = data.get("shopLocation")
      const image = data.get('shopLogo')

      try {
         // Upload image
         const imageData = await imageUpload(image)

         const shopData = {
            shopName,
            shopDescription,
            shopLocation,
            email: user?.email,
            name: user?.displayName,
            shopLogo: imageData?.data?.display_url
         }

         //  save shop Details in database
         await addShop(shopData)
         navigate('/dashboard/manage-product')
         toast.success('Create Shop Successfully')
      } catch (error) {
         toast.error(error.message)
      }
   };

   return (
      <React.Fragment>
         <Helmat title="InventoHub | Create Shop" />
         <SectionTitle title="Create a Shop" subtitle="Stats your Journey" width="80%" />

         <Container maxWidth="md" sx={{ backgroundColor: '#F1EFEF', mb: 6 }}>
            <Box component="form" onSubmit={handleSubmit} required sx={{ mt: 1 }}>
               <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                     <TextField item="true" xs={12} sm={6}
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
                        id="shopDescription"
                        name="shopDescription"
                        label="Shop Description"
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
                        value={user?.email}
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
                        value={user?.displayName}
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