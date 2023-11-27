
const EmptyPage = () => {
   return (
      <>
         <section
            className="h-[50vh] bg-center bg-no-repeat bg-cover bg-gradient-to-r dark:from-gray-800 dark:to-gray-800 from-blue-500 via-blue-400 to-green-200 dark:form-gray-500bdark: font-poppins">
            <div className="flex items-center h-[50vh]">
               <div className="container relative justify-center px-4 mx-auto text-center">
                  <h2 className="mb-8 text-2xl font-semibold text-gray-100 lg:text-4xl dark:text-gray-400">Sorry, You dont have any Data.
                  </h2>
               </div>
            </div>
         </section>
      </>
   );
};

export default EmptyPage;