import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { TbFidgetSpinner } from 'react-icons/tb'
import { useState } from "react";
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { getToken } from "../../api/auth";
import Helmat from "../../components/Helmat/Helmat";
import useRole from "../../hooks/useRole";

export default function Login() {
   const { signIn, loading } = useAuth()
   const navigate = useNavigate()
   const location = useLocation()
   const from = location?.state?.from?.pathname || '/'
   const { role } = useRole()

   const [showPassword, setShowPassword] = useState(false);
   const handleClickShowPassword = () => setShowPassword((show) => !show);

   const handleSubmit = async (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);

      const email = data.get("email")
      const password = data.get("password")
      try {

         // User Registration
         const result = await signIn(email, password)
         // get token
         await getToken(result?.user?.email)

         if (role === 'user') {
            navigate('/create-store')
         } else if (role === 'manager' || role === 'admin') {
            navigate('/dashboard')
         } else {

            navigate(from, { replace: true })
         }

         toast.success('Login Successfull')
      } catch (error) {
         toast.error(error.message)
      }
   }

   return (
      <>
         <Helmat title="InventoHub | Login" />
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
                  Sign in
               </Typography>
               <Box component="form" onSubmit={handleSubmit} required sx={{ mt: 1 }}>
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
                     <Grid item>
                        <Link href="#" variant="body2">
                           Forgot password?
                        </Link>
                     </Grid>
                  </Grid>
                  <Button
                     type="submit"
                     fullWidth
                     variant="contained"
                     sx={{ mt: 3, mb: 1, fontSize: '18px', ":hover": { backgroundColor: '#001B79', scale: '1.01' } }}
                  >

                     {loading ? <TbFidgetSpinner className='animate-spin mx-auto' /> : "Sign In"}
                  </Button>
                  <Typography component="h5" variant="p" sx={{ display: "flex", justifyContent: 'center' }}>
                     OR
                  </Typography>
                  <SocialLogin></SocialLogin>
                  <Grid container>
                     <Grid item xs>
                     </Grid>
                     <Grid item sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography>Do not have an account?</Typography>
                        <NavLink to="/signup" className="ml-2 font-bold text-blue-800" variant="body2" sx={{ fontSize: '16px', ml: 1 }}>Sign Up</NavLink>
                     </Grid>
                  </Grid>
               </Box>
            </Box>
         </Container>
      </>
   );
}