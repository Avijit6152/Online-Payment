
  document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Your validation logic goes here
    let isValid = validateForm();

    if (isValid) {
      // If the form is valid, you can submit it or perform any other action
      alert('Form submitted successfully!');
      // this.submit(); // Uncomment this line to submit the form
    } else {
      alert('Please fill out all required fields.');
    }
  });

  function validateForm() {
    // Perform validation here, return true if the form is valid, false otherwise
    let fullname = document.getElementById('fullname').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let paymentMethod = document.getElementById('payment-method').value;
    let cardNumber = document.getElementById('card-number').value;
    let nameOnCard = document.getElementById('name-on-card').value;
    let expiryDate = document.getElementById('expiry-date').value;
    let cvv = document.getElementById('cvv').value;

    if (fullname.trim() === '' || email.trim() === '' || phone.trim() === '' || paymentMethod === '' || cardNumber.trim() === '' || nameOnCard.trim() === '' || expiryDate.trim() === '' || cvv.trim() === '') {
      return false; // If any required field is empty, return false
    }

    // Additional validation logic can be added here

    return true; // If all validations pass, return true
  }




  document.getElementById("payment-form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    var month = document.getElementById("expMonth").value;
    var year = document.getElementById("expYear").value;
  
    var expirationDate = month + "/" + year;
    alert("Expiration Date: " + expirationDate);
  });

  // op.js

document.addEventListener("DOMContentLoaded", function() {
  // Get amount input and total amount span
  var amountInput = document.getElementById('amount');
  var totalAmountSpan = document.getElementById('total-amount');

  // Add event listener to amount input
  amountInput.addEventListener('input', function() {
    // Get the entered amount
    var amount = parseFloat(amountInput.value);
    
    // Check if amount is a valid number
    if (!isNaN(amount)) {
      // Display the total amount
      totalAmountSpan.textContent = '$' + amount.toFixed(2);
    } else {
      // If amount is not a valid number, display $0.00
      totalAmountSpan.textContent = '$0.00';
    }
  });
});
