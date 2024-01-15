import Helmat from "../../../components/Helmat/Helmat";
import AboutUs from "../Components/AboutUs/AboutUs";
import Banner from "../Components/Banner/Banner";
import ContactUs from "../Components/ContactUs/ContactUs";
import NewsLetter from "../Components/NewsLetter/NewsLetter";
import PricingSection from "../Components/PricingSection/PricingSection";
import Testimonial from "../Components/Testimonial/Testimonial";
import TrustedCompany from "../Components/TrustedCompany/TrustedCompany";
import WhyChooseUs from "../Components/WhyChooseUs/WhyChooseUs";

const Home = () => {

   return (
      <div className="overflow-hidden">
         <Helmat title="InventoHub || Home" />
         <div className="mt-2">
            <Banner />
         </div>
         <div className="my-12">
            <WhyChooseUs />
         </div>
         <div>
            <AboutUs />
         </div>
         <div className="my-12">
            <PricingSection />
         </div>
         <div >
            <Testimonial />
         </div>
         <div className="my-12">
            <NewsLetter />
         </div>
         <div >
            <ContactUs />
         </div>
         <div className="my-12">
            <TrustedCompany />
         </div>
      </div>
   );
};

export default Home;