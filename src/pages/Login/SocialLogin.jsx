import { Google } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
   const { signInWithGoogle } = useAuth()
   const navigate = useNavigate()

   const handleGoogleSignIn = async () => {
      try {
         //2. User Registration using google
         const result = await signInWithGoogle()
         console.log(result.user)

         //4. save user data in database
         // const dbResponse = await saveUser(result?.user)
         // console.log(dbResponse)

         //5. get token
         // await getToken(result?.user?.email)
         navigate('/')
         toast.success('Signup Successful')
      } catch (err) {
         console.log(err)
         toast.error(err?.message)
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