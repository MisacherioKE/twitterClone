"use strict";

window.oncontextmenu = ()=>{
    return false;
};


// Sign In

document.getElementById("signIn").onclick =()=>{
    let email = document.getElementById("email").value;
    let password = document.getElementById("pass").value;

    // Invoke Firebase

    firebase.auth().signInWithEmailAndPassword(email,password)
    .then((userCredentials)=>{
        alert("Login Sucessful")

        let user = userCredentials.user

        window.location.href ="/html/home.html"
    }).catch((error)=>{
        alert("Invalid Username or Password")
        console.log(error.message);
    })
}


// Reset Button

document.getElementById("resetWindow").onclick =()=>{
    window.location.href ="/html/resetPass.html";
}