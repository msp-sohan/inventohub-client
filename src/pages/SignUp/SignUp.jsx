import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { NavLink, useNavigate } from "react-router-dom";
import SocialLogin from "../Login/SocialLogin";
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
import { imageUpload } from "../../api/utilities";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { getToken, saveUser } from "../../api/auth";
import Helmat from "../../components/Helmat/Helmat";

const SignUp = () => {
   const { createUser, updateUserProfile } = useAuth()
   const navigate = useNavigate()

   const [showPassword, setShowPassword] = useState(false);
   const handleClickShowPassword = () => setShowPassword((show) => !show);

   const handleSubmit = async (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      const name = data.get("name")
      const image = data.get('image')
      const email = data.get("email")
      const password = data.get("password")

      const lengthError = /^.{6,}$/;
      const spError = /[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]/;
      const capitalError = /^[^A-Z]*$/;

      if (!lengthError.test(password)) {
         toast.error('Password is less than 6 Characters.');
         return;
      } else if (capitalError.test(password)) {
         toast.error('Password has no Capital Letter.');
         return;
      } else if (!spError.test(password)) {
         toast.error('Password has no Special Characters.');
         return;
      }

      try {
         // Upload image
         const imageData = await imageUpload(image)
         // User Registration
         const result = await createUser(email, password)

         await updateUserProfile(name, imageData?.data?.display_url)

         //  save user Data in database
         await saveUser(result?.user, name, imageData?.data?.display_url)

         // get token
         await getToken(result?.user?.email)
         navigate('/')
         toast.success('Sign up Successfull')
      } catch (error) {
         console.log(error)
         toast.error(error.message)
      }
   };

   return (
      <>
         <Helmat title="InventoHub | Sign Up" />
         <Container component="main" maxWidth="sm">
            <Box
               sx={{
                  boxShadow: 3,
                  borderRadius: 2,
                  px: 4,
                  py: 6,
                  marginBottom: 8,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
               }}
            >
               <Typography component="h1" variant="h5">
                  Sign Up
               </Typography>
               <Box component="form" onSubmit={handleSubmit} required sx={{ mt: 1 }}>
                  <TextField
                     margin="normal"
                     required
                     fullWidth
                     id="name"
                     label="Full Name"
                     name="name"
                     autoComplete="name"
                     autoFocus
                  />
                  <TextField
                     margin="normal"
                     type="file"
                     required
                     fullWidth
                     id="image"
                     name="image"
                     autoComplete="image"
                     autoFocus
                  />
                  <TextField
                     margin="normal"
                     required
                     fullWidth
                     id="email"
                     label="Email Address"
                     name="email"
                     autoComplete="email"
                     autoFocus
                  />
                  <FormControl margin="normal" fullWidth variant="outlined">
                     <InputLabel htmlFor="outlined-adornment-password">Password*</InputLabel>
                     <OutlinedInput
                        required
                        fullWidth
                        name="password"
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                           <InputAdornment position="end">
                              <IconButton
                                 aria-label="toggle password visibility"
                                 onClick={handleClickShowPassword}
                                 // onMouseDown={handleMouseDownPassword}
                                 edge="end"
                              >
                                 {showPassword ? <VisibilityOff /> : <Visibility />}
                              </IconButton>
                           </InputAdornment>
                        }
                        label="Password"
                     />
                  </FormControl>
                  <Grid container alignItems={"center"}>
                     <Grid item xs>
                        <FormControlLabel
                           control={<Checkbox value="remember" color="primary" />}
                           label="Remember me"
                        />
                     </Grid>
                  </Grid>
                  <Button
                     type="submit"
                     fullWidth
                     variant="contained"
                     sx={{ mt: 3, mb: 1, fontSize: '18px', ":hover": { backgroundColor: '#001B79', scale: '1.01' } }}
                  >
                     Sign Up
                  </Button>
                  <Typography component="h5" variant="p" sx={{ display: "flex", justifyContent: 'center' }}>
                     OR
                  </Typography>
                  <SocialLogin />
                  <Grid container>
                     <Grid item xs>
                     </Grid>
                     <Grid item sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography>Already have an account?</Typography>
                        <NavLink to="/login" className="ml-2 font-bold text-blue-800" variant="body2" sx={{ fontSize: '16px', ml: 1 }}>Login</NavLink>
                     </Grid>
                  </Grid>
               </Box>
            </Box>
         </Container>
      </>
   );
}

export default SignUp;