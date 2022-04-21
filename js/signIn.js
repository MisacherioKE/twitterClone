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
// import { GoogleAuthProvider } from "firebase/auth";

// const provider = new GoogleAuthProvider();


// import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// const auth = getAuth();
document.getElementById("google").onclick = ()=>{
    // const auth = getAuth();
    // let provider = new GoogleAuthProvider();
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
        // Handle Errors here.
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // // The email of the user's account used.
        // const email = error.email;
        // // The AuthCredential type that was used.
        // const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
    
}

//   import { getAuth, signInWithRedirect } from "firebase/auth";

// const auth = getAuth();
// signInWithRedirect(auth, provider);