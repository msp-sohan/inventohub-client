import axios from 'axios';
import { clearCookie } from '../api/auth';


const axiosSecure = axios.create({
   baseURL: import.meta.env.VITE_API_URL,
   withCredentials: true,
});

const useAxiosSecure = () => {

   //  Intercept response and check for unauthorized response
   axiosSecure.interceptors.response.use(
      (response) => response,
      async (error) => {
         console.log('Error in the inteceptor', error.response);
         if (error.response && (error.response.status === 401 || error.response.status === 403)) {
            await clearCookie();
            window.location.replace('/login');
         }
         return Promise.reject(error);
      },
   );
   return axiosSecure;
};
export default useAxiosSecure;
