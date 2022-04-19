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