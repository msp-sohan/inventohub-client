import { Helmet } from 'react-helmet-async';
const Helmat = ({ title }) => {
   return (
      <>
         <Helmet>
            <title>{title}</title>
         </Helmet>
      </>
   );
};

export default Helmat;