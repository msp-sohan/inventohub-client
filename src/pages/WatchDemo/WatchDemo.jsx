import Helmat from "../../components/Helmat/Helmat";


const WatchDemo = () => {
   return (
      <>
         <Helmat title="InventoHub || Watch Demo" />
         <div className="my-20">
            <div className="flex justify-center items-center">
               <iframe width="90%" height="640" src="https://www.youtube.com/embed/jk8L4_Wx40U?si=Hv3R6362K0_9rX7A" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullscreen></iframe>
            </div>
         </div>
         {/* <div
            className="embed-responsive embed-responsive-16by9 relative w-full overflow-hidden mt-20"
            style={{ paddingTop: '56.25%' }}>
            <iframe height="315"
               className="embed-responsive-item absolute bottom-0 left-0 right-0 top-0 h-[75%] w-full"
               src="https://www.youtube.com/embed/jk8L4_Wx40U?si=Hv3R6362K0_9rX7A"
               allowFullscreen=""
               data-gtm-yt-inspected-2340190_699="true"
               id="240632615"></iframe>
         </div> */}
      </>
   );
};

export default WatchDemo;