import { useState } from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import axios from "axios";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { Container, Input, } from "@mui/material";

const Footer2 = () => {
   const [btnLoader, setBtnLoader] = useState(false);
   const [formData, setFormData] = useState({
      firstName: "",
      lastName: "",
      phoneNo: "",
      email: "",
      message: "",
   });

   if (btnLoader) {
      return <div>Loading.....</div>
   }

   const showToast = () => {
      toast.success("Message Sent");
   };

   const errorToast = (res, status) => {
      toast({
         title: res,
         status: status,
         duration: 2000,
         isClosable: true,
         position: "top",
         containerStyle: {
            zIndex: 9999,
         },
      });
   };


   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
   };

   const handleSubmit = (e) => {
      e.preventDefault()
      const errors = validateForm(formData);

      if (errors === false) {
         setBtnLoader(true);
         axios
            .post("https://homyz-server.vercel.app/contact", formData)
            .then((response) => {
               console.log(response)
               showToast();
               setFormData({
                  firstName: "",
                  lastName: "",
                  phoneNo: "",
                  email: "",
                  message: "",
               });
               setBtnLoader(false);
            })
            .catch((error) => {
               setBtnLoader(false);
               errorToast(error.message, "error");
               console.error("Error submitting form:", error);
            });
      }
   };

   const isValidEmail = (email) => {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(email);
   };

   const validateForm = (data) => {
      let _error;
      if (
         data.firstName &&
         data.firstName.trim() &&
         data.lastName &&
         data.lastName.trim() &&
         data.email &&
         data.email.trim() &&
         isValidEmail(data.email.trim()) &&
         data.phoneNo &&
         data.phoneNo.trim() &&
         data.message &&
         data.message.trim()
      ) {
         _error = false;
      } else {
         if (
            !data.firstName &&
            !data.firstName.trim() &&
            !data.lastName &&
            !data.lastName.trim() &&
            !data.email &&
            !data.email.trim() &&
            !isValidEmail(data.email.trim()) &&
            !data.phoneNo &&
            !data.phoneNo.trim() &&
            !data.message &&
            !data.message.trim()
         ) {
            errorToast("Fill the fields first!", "error");
         } else if (!data.firstName || !data.firstName.trim()) {
            errorToast("Enter the firstName!", "error");
         } else if (!data.lastName || !data.lastName.trim()) {
            errorToast("Enter the lastName!", "error");
         } else if (!data.email || !data.email.trim()) {
            errorToast("Enter the email!", "error");
         } else if (!isValidEmail(data.email.trim())) {
            errorToast("Enter the valid  email!", "error");
         } else if (!data.phoneNo || !data.phoneNo.trim()) {
            errorToast("Enter the phone no!", "error");
         } else if (!data.message || !data.message.trim()) {
            errorToast("Enter the message!", "error");
         }
      }
      return _error;
   };

   const scrollToTop = () => {
      window.scrollTo({ top: 0 });
   };

   return (
      <div className="bg-blue-500  ">
         <Container maxWidth="xl">
            <footer className="mx-auto flex justify-between gap-20 max-lg:flex-col py-10 max-sm:px-5">
               <div className="flex flex-col items-start h-auto justify-between gap-16 w-2/4 max-lg:w-full pr-10 max-sm:pr-0">
                  <div className="flex flex-col text-lg items-start  justify-between gap-10 ">
                     <a href="/">
                        <img src="https://i.ibb.co/PFhTpK2/Invebto-Hub-2.png" className="w-[35%] md:w-[25%] lg:w-[35%] bg-white rounded-lg" alt="" />
                     </a>
                     <p style={{ color: "white" }}>
                        Empowering Businesses, Simplifying Management
                     </p>
                     <div className="flex text-xl justify-start items-center gap-10 text-white ">
                        <Link target="_blank" to={"https://facebook.com"}>
                           <FaFacebookF className="hover:text-red-500" />
                        </Link>
                        <Link target="_blank" to={"https://instagram.com"}>
                           <FaInstagram className="hover:text-red-500" />
                        </Link>
                        <Link target="_blank" to={"https://twitter.com"}>
                           <FaTwitter className="hover:text-red-500" />
                        </Link>
                     </div>
                     <ul className="text-white text-lg flex justify-start items-center flex-wrap gap-x-8 gap-y-4">
                        <Link
                           onClick={scrollToTop}
                           className="hover:text-red-500 transition-all"
                           to="/"
                        >
                           Home
                        </Link>
                        <Link
                           onClick={scrollToTop}
                           className="hover:text-red-500 transition-all"
                           to="/services"
                        >
                           Services
                        </Link>
                        <Link
                           onClick={scrollToTop}
                           className="hover:text-red-500 transition-all"
                           to="/about"
                        >
                           About Us
                        </Link>
                        <Link
                           onClick={scrollToTop}
                           className="hover:text-red-500 transition-all"
                           to="/contact"
                        >
                           Contact Us
                        </Link>
                     </ul>
                  </div>
                  <p style={{ color: "white" }}>© InventoHub. All Rights Reserved 2023.</p>
               </div>

               <div id="contact" className="w-2/4 border max-lg:w-full flex flex-col h-auto justify-between items-start gap-10">
                  <h1 className="text-3xl text-white">Get in Touch</h1>
                  <div className="text-white mt-3 ">
                     <Input
                        label="First Name"
                        className="w-full"
                        sx={{ color: "white" }}
                        placeholder="First Name"
                        name="firstName"
                        maxLength={20}
                        value={formData.firstName}
                        onChange={handleChange}
                     />
                     <Input
                        className="w-full"
                        sx={{ color: "white" }}
                        placeholder="Last Name"
                        name="lastName"
                        maxLength={20}
                        value={formData.lastName}
                        onChange={handleChange}
                     />
                  </div>
                  <div className="">
                     <Input
                        sx={{ color: "white" }}
                        placeholder="Email Address"
                        className="w-full"
                        name="email"
                        maxLength={40}
                        value={formData.email}
                        onChange={handleChange}
                     />
                     <Input
                        className="w-full"
                        sx={{ color: "white" }}
                        type="number"
                        placeholder="Phone No"
                        name="phoneNo"
                        value={formData.phoneNo}
                        onChange={handleChange}

                     />
                  </div>
                  <Input
                     sx={{ color: "white" }}
                     placeholder="Message"
                     className=" text-white"
                     name="message"
                     value={formData.message}
                     onChange={handleChange}
                  />
                  <button onClick={handleSubmit} className="max-lg:w-72 max-sm:w-full text-white border py-2 px-4 rounded-md font-semibold hover:bg-blue-800">
                     Submit
                  </button>
               </div>
            </footer>
         </Container>
      </div>
   );
};

export default Footer2;
