document.addEventListener('DOMContentLoaded', function () {
  const signUpForm = document.querySelector('.signup form');
  const loginForm = document.querySelector('.login form');
  
 




  signUpForm.addEventListener('submit', function (event) {

    const userName = signUpForm.querySelector('input[name="txt"]').value.trim();
    const email = signUpForm.querySelector('input[name="email"]').value.trim();
    const password = signUpForm.querySelector('input[name="pswd"]').value.trim();
    
    if (!validateSignUpForm()) {
      event.preventDefault();
    } else {
      event.preventDefault();
      window.location.href = "homepage.html";

    }
  });     

  loginForm.addEventListener('submit', function (event) {
    if (!validateLoginForm()) {
      event.preventDefault();
    } else {
   
      event.preventDefault(); 
      console.log("valid check")
      fileWriter.readAndAppend(formData, 'Signup.txt');
      console.log("appended");
      window.location.href = "homepage.html"; 
    }
  });

  function validateSignUpForm() {
    const userName = signUpForm.querySelector('input[name="txt"]').value.trim();
    const email = signUpForm.querySelector('input[name="email"]').value.trim();
    const password = signUpForm.querySelector('input[name="pswd"]').value.trim();

    if (userName === '' || email === '' || password === '') {
      alert('All fields must be filled out');
      return false;
    }

    if (!isPasswordValid(password)) {
      alert('Password must contain at least one symbol, one number, one capital letter, and be at least 8 characters long');
      return false;
    }

    return true;
  }

  function validateLoginForm() {
    const email = loginForm.querySelector('input[name="email"]').value.trim();
    const password = loginForm.querySelector('input[name="pswd"]').value.trim();

    if (email === '' || password === '') {
      alert('All fields must be filled out');
      return false;
    }
    if (!isPasswordValid(password)) {
      alert('Password must contain at least one symbol, one number, one capital letter, and be at least 8 characters long');
      return false;
    }


    return true;
  }

  function isPasswordValid(password) {
    // Use a regular expression to check if the password meets the specified criteria
    const passwordRegex = /^(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-])(?=.*\d)(?=.*[A-Z]).{8,}$/;
    return passwordRegex.test(password);
  }


});

function checked() {
let chk = document.querySelector("#chk");
chk.checked = true;
}






















