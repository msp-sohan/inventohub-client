import Helmat from "../../components/Helmat/Helmat";


const WatchDemo = () => {
   return (
      <>
         <Helmat title="InventoHub || Watch Demo" />
         <div className="py-20">
            <div className="flex justify-center items-center">
               <iframe width="560" height="315" src="https://www.youtube.com/embed/jk8L4_Wx40U?si=Hv3R6362K0_9rX7A" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
         </div>
      </>
   );
};

export default WatchDemo;