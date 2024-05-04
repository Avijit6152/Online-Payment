// function navigate(option) {
//     var content = document.getElementById('content');
//     switch(option) {
//       case 'credit-debit':
//         content.innerHTML = "<h3>Credit Card / Debit Card Payment</h3><p>Enter your card details to proceed with the payment.</p>";
//         break;
//       case 'net-banking':
//         content.innerHTML = "<h3>Net Banking Payment</h3><p>Choose your bank and log in to your net banking account to complete the payment.</p>";
//         break;
//       case 'upi':
//         content.innerHTML = "<h3>UPI Payment</h3><p>Scan the QR code or enter the UPI ID to make the payment.</p>";
//         break;
//       case 'qr':
//         content.innerHTML = "<h3>QR Code Payment</h3><p>Scan the QR code using your mobile banking app to complete the payment.</p>";
//         break;
//       default:
//         content.innerHTML = "<p>Select an option from the navigation above.</p>";
//     }
//   }
  

  document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.section');
    const sidebarLinks = document.querySelectorAll('.sidebar a');
  
    sidebarLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetSection = this.getAttribute('data-section');
        sections.forEach(section => {
          if (section.id === targetSection) {
            section.style.display = 'block';
          } else {
            section.style.display = 'none';
          }
        });
      });
    });
  });
  