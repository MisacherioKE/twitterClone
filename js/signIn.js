"use strict";

window.oncontextmenu = ()=>{
    return false;
};


// Sign In

document.getElementById("signIn").onclick =()=>{

   

    let email = document.getElementById("email").value;
    let password = document.getElementById("pass").value;

    if(email ==""){
        alert("Empty field!");
        document.getElementById("email").style.border ="solid red";
        document.getElementById("pass").style.border ="solid gray";
    }else if(password ==""){
        alert("Empty field!");
        document.getElementById("pass").style.border ="solid red";
        document.getElementById("email").style.border ="solid gray";
    }else{
        document.getElementById("email").style.border ="solid gray";
        document.getElementById("pass").style.border ="solid gray";

        document.getElementById("signIn").style.display ="none";
        document.getElementById("loading").style.display ="block";

           // Invoke Firebase

    firebase.auth().signInWithEmailAndPassword(email,password)
    .then((userCredentials)=>{
        alert("Login Sucessful")

        let user = userCredentials.user

        window.location.href ="/html/home.html"
    }).catch((error)=>{
        alert("Invalid Username or Password")
        console.log(error.message);
        document.getElementById("signIn").style.display ="block";
        document.getElementById("loading").style.display ="none";
    })
    
}
    }

 


// Reset Button

document.getElementById("resetWindow").onclick =()=>{
    window.location.href ="/html/resetPass.html";
}
// Sign in with Google
document.getElementById("google").onclick = ()=>{
  
    let provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

   firebase.auth().signInWithPopup(provider)
    
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var credential = result.credential
        var token = credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        window.location.href ="/html/home.html";
      }).catch((error) => {
          alert(error.message);
    
      });
    
}

// Sign in With Apple
document.getElementById("apple").onclick =()=>{
    var provider = new firebase.auth.OAuthProvider("https://www.apple.com/");
    provider.addScope('email');
provider.addScope('name');

  firebase.auth().signInWithPopup(provider)
  .then((result)=>{
  var credential = result.credential;
  var user = result.user;

  var acessToken = credential.accessToken;
  var idToken = credential.idToken;
  window.location.href ="/html/home.html";
  }).catch((error)=>{
      alert(error.message);
  })
}

// sign in with phone number
// document.getElementById("phone").onclick =()=>{
//    let phoneNumber = document.getElementById("email").value;
//    let appVerifier = window.recaptchaVerifier;


//     window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('phone', {
//         'size': 'invisible',
//         'callback': (response) => {
//           // reCAPTCHA solved, allow signInWithPhoneNumber.
//           onSignInSubmit();
//         }
//       });
   
//       const recaptchaResponse = grecaptcha.getResponse(recaptchaWidgetId);
    
//     firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
//         .then((confirmationResult) => {
//           // SMS sent. Prompt user to type the code from the message, then sign the
//           // user in with confirmationResult.confirm(code).
//           window.confirmationResult = confirmationResult;
        
//         }).catch((error) => {
//           // Error; SMS not sent
//           alert(error.message)
        
//         });
    
//         grecaptcha.reset(window.recaptchaWidgetId);
    
//     // Or, if you haven't stored the widget ID:
//     window.recaptchaVerifier.render().then(function(widgetId) {
//       grecaptcha.reset(widgetId);
//     });
    
//     const code = getCodeFromUserInput();
//     confirmationResult.confirm(code).then((result) => {
//       // User signed in successfully.
//       const user = result.user;
//       // ...
//     }).catch((error) => {
//         alert(error.message);
//       // User couldn't sign in (bad verification code?)
//       // ...
//     });
// }
