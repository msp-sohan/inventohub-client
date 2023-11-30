import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useAuth from './useAuth';
import { useEffect } from 'react';
import toast from 'react-hot-toast';

const axiosSecure = axios.create({
   baseURL: import.meta.env.VITE_API_URL,
   withCredentials: true,
});

const useAxiosSecure = () => {
   const { logOut } = useAuth();
   const navigate = useNavigate();

   useEffect(() => {
      axiosSecure.interceptors.response.use(
         (response) => {
            return response;
         },
         (error) => {
            console.log('Error Tracked in the Interceptor', error.response);
            if (error.response.status === 401) {
               console.log('Logout the user');
               logOut()
                  .then(() => {
                     toast.success('Logout')
                     navigate('/login');
                  })
                  .catch((error) => console.log(error));
            } else if (error.response.status === 403) {
               console.log('Navigate to /forbidden');
               navigate('/forbidden');
            }
            return Promise.reject(error);
         }
      );
   }, [logOut, navigate]);

   return axiosSecure;
};

export default useAxiosSecure;

