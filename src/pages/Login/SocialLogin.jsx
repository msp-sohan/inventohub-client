import { Google } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { getRole, getToken, saveUser } from "../../api/auth";

const SocialLogin = () => {
   const { signInWithGoogle } = useAuth()
   const navigate = useNavigate()

   const handleGoogleSignIn = async () => {
      try {
         // User Registration using google
         const result = await signInWithGoogle()
         //  save user Data in database
         await saveUser(result?.user)
         // get token
         await getToken(result?.user?.email)

         const role = await getRole(result?.user?.email)

         if (role === 'user') {
            navigate('/create-store')
         } else if (role === 'manager' || role === 'admin') {
            navigate('/dashboard')
         } else {
            navigate('/')
         }

         toast.success('Sign In Successful')
      } catch (error) {
         toast.error(error.message)
      }
   }

   return (
      <>
         <Box>
            <Button onClick={handleGoogleSignIn} fullWidth variant="outlined" sx={{ color: 'red', mt: 1, mb: 2, ":hover": { backgroundColor: '#333ddd' } }}><Google /><span className="ml-2 text-black font-bold hover:text-white">Continue With Google</span></Button>
         </Box>
      </>
   );
};

export default SocialLogin;
