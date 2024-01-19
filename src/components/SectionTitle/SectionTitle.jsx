
const SectionTitle = ({ title, subtitle, width }) => {
   return (
      <header className="text-center pt-5 pb-12 text-white">
         <p className="text-gray-400 my-3 flex items-center justify-center font-medium uppercase tracking-wider">-------<span className="px-3">{subtitle}</span>-------</p>
         <div style={{ width: `${width}` }} className={`border-y-2  mx-auto mt-3 border-yellow-400 py-px`}>
            <h1 className="text-2xl md:text-3xl pt-1 pb-3 lg:text-[40px] font-bold text-black dark:text-white">{title}</h1>
         </div>
      </header>
   );
};

export default SectionTitle;

