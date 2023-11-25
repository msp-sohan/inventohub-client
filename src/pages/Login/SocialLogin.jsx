import { Google } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { getToken, saveUser } from "../../api/auth";

const SocialLogin = () => {
   const { signInWithGoogle } = useAuth()
   const navigate = useNavigate()

   const handleGoogleSignIn = async () => {
      try {
         // User Registration using google
         const result = await signInWithGoogle()

         //  save user Data in database
         const dbResponse = await saveUser(result?.user)
         console.log(dbResponse)

         // get token
         await getToken(result?.user?.email)
         navigate('/')
         toast.success('Sign up Successfull')
      } catch (error) {
         console.log(error)
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