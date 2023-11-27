import axios from "axios";

//   http://localhost:5000
//   https://b8a11-server-side-msp-sohan.vercel.app

const instance = axios.create({
   baseURL: 'http://localhost:5000',
   withCredentials: true
});
const useAxios = () => {
   return instance;
};
export default useAxios;