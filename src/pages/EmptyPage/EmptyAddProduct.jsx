import { Link } from "react-router-dom";

const EmptyAddProduct = () => {
   return (
      <>
         <section
            className="h-[50vh] bg-center bg-no-repeat bg-cover bg-gradient-to-r dark:from-gray-800 dark:to-gray-800 from-blue-500 via-blue-400 to-green-200 dark:form-gray-500bdark: font-poppins">
            <div className="flex flex-col justify-center items-center h-[50vh]">
               <div className="container relative justify-center px-4 mx-auto text-center">
                  <h2 className="mb-8 text-2xl font-semibold text-gray-100 lg:text-4xl dark:text-gray-400">Sorry, You don{"'"}t add any Product Yet.
                  </h2>
               </div>
               <Link to="/dashboard/add-product" className="bg-blue-500 hover:bg-blue-900 px-3 py-2 rounded-md text-white font-semibold">Add a Product</Link>
            </div>
         </section>
      </>
   );
};

export default EmptyAddProduct;