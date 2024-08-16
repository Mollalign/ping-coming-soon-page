
document.getElementById('emailForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  const emailInput = document.getElementById('email');
  const errorMessage = document.getElementById('error-message');
  const errorIcon = document.getElementById('error-icon-1');

  // Regular expression for validating an email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(emailInput.value)) {
    errorIcon.style.display = 'inline-block';
    errorMessage.style.display = 'block';
    emailInput.style.border = '1px solid hsl(354, 100%, 66%)';
       
    setTimeout(() => {
      errorIcon.style.display = 'none';
      errorMessage.style.display = 'none';
      emailInput.style.border = '1px solid hsl(0, 5%, 87%)';
    }, 2000);
      
       
  } else {
      errorMessage.style.display = 'none'; 
      alert('Email is valid!');
  }

  


  addEventListener("keydown", (event) => {
    if (event === 'enter') {
      if (!emailPattern.test(emailInput.value)) {
        errorIcon.style.display = 'inline-block';
        errorMessage.style.display = 'block';
        emailInput.style.border = '1px solid hsl(354, 100%, 66%)';
           
        setTimeout(() => {
          errorIcon.style.display = 'none';
          errorMessage.style.display = 'none';
          emailInput.style.border = '1px solid hsl(0, 5%, 87%)';
        }, 2000);
          
           
      } else {
          errorMessage.style.display = 'none'; 
          alert('Email is valid!');
      }
    }
  });

  
});