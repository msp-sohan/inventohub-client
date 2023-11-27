import Helmat from "../../components/Helmat/Helmat";


const WatchDemo = () => {
   return (
      <>
         <Helmat title="InventoHub || Watch Demo" />
         <div className="py-20">
            <div className="flex justify-center items-center">
               <iframe width="860" height="515" src="https://www.youtube.com/embed/ZMvZaxRkHmY?si=B3y0mLtnIRdeYryc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
         </div>
      </>
   );
};

export default WatchDemo;