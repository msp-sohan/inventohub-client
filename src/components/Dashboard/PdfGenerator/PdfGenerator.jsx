import jsPDF from 'jspdf';

function PdfGenerator({ checkouts, handleclick }) {
   function genPDF() {
      var doc = new jsPDF();
      doc.setFontSize(18);
      doc.text('Invoice', 20, 20);

      // Invoice Information
      doc.setFontSize(12);
      doc.text(`Invoice Number: ${checkouts[0]._id}`, 20, 30);
      doc.text(`Date: ${checkouts[0].customerName}`, 20, 40);

      // Customer Information
      doc.text(`Customer: ${checkouts[0].customerName}`, 20, 60);
      doc.text(`Email: ${checkouts[0].customerEmail}`, 20, 70);

      // Product Information
      doc.text('Product Details', 20, 90);
      doc.addImage(name, 'JPEG', 15, 100, 80, 80);
      doc.text(`Product Name: {checkout}`, 20, 200);
      doc.text(`Quantity: ${checkouts[0].customerName}`, 20, 210);
      doc.text(`Price: $${checkouts[0].customerName}`, 20, 220);

      // Total Amount
      doc.text(`Total: $${checkouts[0].customerName}`, 20, 240);

      // Additional Information
      doc.text('Thank you for your purchase!', 20, 260);

      // Save the PDF
      doc.save('invoice.pdf');
   }

   return (
      <div>
         <button className='mr-10' onClick={genPDF}>Download</button>
         <button onClick={() => handleclick(genPDF)}>Download</button>
      </div>
   );
}

export default PdfGenerator;


