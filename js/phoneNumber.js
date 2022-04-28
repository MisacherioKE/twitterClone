"use strict";

window.oncontextmenu = ()=>{
    return false;
};


// // Sign In

// document.getElementById("signIn").onclick =()=>{

   

//     let email = document.getElementById("email").value;
//     let password = document.getElementById("pass").value;

//     if(email ==""){
//         alert("Empty field!");
//         document.getElementById("email").style.border ="solid red";
//         document.getElementById("pass").style.border ="solid gray";
//     }else if(password ==""){
//         alert("Empty field!");
//         document.getElementById("pass").style.border ="solid red";
//         document.getElementById("email").style.border ="solid gray";
//     }else{
//         document.getElementById("email").style.border ="solid gray";
//         document.getElementById("pass").style.border ="solid gray";

//         document.getElementById("signIn").style.display ="none";
//         document.getElementById("loading").style.display ="block";
//     }

// sign in with phone number
document.getElementById("signIn").onclick =()=>{

    firebase.auth().languageCode = "en";
  
   let appVerifier = window.recaptchaVerifier;


    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('signIn', {
        'size': 'invisible',
        'callback': (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
        //   onSignInSubmit();
        }
      });
   
recaptchaVerifier.render().then((widgetId) =>{
    window.recaptchaWidgetId = widgetId;
})

let phoneNumber = document.getElementById("email").value;
    
    firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
        .then((confirmationResult) => {
          // SMS sent. Prompt user to type the code from the message, then sign the
          // user in with confirmationResult.confirm(code).
          window.confirmationResult = confirmationResult;
          alert("code sent!");

          document.getElementById("pass").style.display ="block";
        
        }).catch((error) => {
          // Error; SMS not sent
          alert(error.message)
        
        });
    
        grecaptcha.reset(window.recaptchaWidgetId);
    
    // Or, if you haven't stored the widget ID:
    window.recaptchaVerifier.render().then(function(widgetId) {
      grecaptcha.reset(widgetId);
    });
    
   let code = document.getElementById("pass").value;
    confirmationResult.confirm(code).then((result) => {
      // User signed in successfully.
      alert("user signed in");
      let user = result.user;
      // ...
    }).catch((error) => {
        alert(error.message);
      // User couldn't sign in (bad verification code?)
      // ...
    });
}
