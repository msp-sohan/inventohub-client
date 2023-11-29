import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const style = {
   position: 'absolute',
   top: '50%',
   left: '50%',
   transform: 'translate(-50%, -50%)',
   width: 400,
   bgcolor: 'background.paper',
   border: '2px solid #000',
   boxShadow: 24,
   p: 4,
};

export default function NoticeModal({ open, handleClose, singleShop }) {
   const form = useRef();
   const sendEmail = (e) => {
      e.preventDefault();

      emailjs.sendForm('service_sohan', 'template_sohan', form.current, 'SUpNFkY5B48OoqbKg')
         .then((result) => {
            console.log(result.text);
            Swal.fire({
               position: "center",
               icon: "success",
               title: "Notice Send Successfully",
               showConfirmButton: false,
               timer: 1500
            });
         }, (error) => {
            console.log(error.text);
         });
      form.current.reset()
      handleClose()
   };

   return (
      <div>
         <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
         >
            <Box sx={style}>
               <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-2'>
                  <div className='text-center mb-5'>
                     <h3 className='bg-blue-400 text-white py-2 text-lg font-semibold'>Send Your Message To Shop Admin</h3>
                  </div>
                  <div className={`${!singleShop?.shopName && 'hidden'}`}>
                     <label>Shop Name</label>
                     <input type="text" name="to_name" placeholder={singleShop?.shopName} className="border rounded p-2 outline-none" readOnly />
                  </div>
                  <label>Email Address</label>
                  <input type="email" placeholder={singleShop?.shopOwnerEmail} name="user_email" className='border rounded visible p-2' />
                  <label className='text-xs'>Type Valid Email For Check</label>
                  <label>Message</label>
                  <textarea name="message" placeholder='Type Your Message' className='border rounded pl-2' />
                  <input type="submit" value="Send" className='border rounded mt-8 bg-blue-500 text-white text-lg py-1 hover:bg-blue-900  cursor-pointer ' />
               </form>
            </Box>
         </Modal>
      </div>
   );
}
