// Step 1: add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function(){
    //  step 2: get the email address inside the email input field
    // always remember to use .value to get text from input field
    const emailField = document.getElementById('user-eamil');
    const email = emailField.value;

    // step 3: get passwprd
    //  1. set id on the html element
    //  2. get the element
    //  3. get the value from the element
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    // DANGER: DO NOT VERIFY email password on the client website
    if(email === 'hasib@me.com' && password === 'hasib'){
        window.location.href = "bank.html";
    }
    else{
        alert('Invalid Login Info');
    }

})