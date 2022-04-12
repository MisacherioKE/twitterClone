"use strict";

window.oncontextmenu = ()=>{
    return false;
}

document.getElementById("reset").onclick = ()=>{

    let email = document.getElementById("email").value;

    // invoke firebase
    firebase.auth().sendPasswordResetEmail(email).then(()=>{
        alert("A reset link has been sent to your email");
    }).catch((error) =>{
        console.log(error.message);
    })
}

// Close Button
document.getElementById("close").onclick =()=>{
    window.location.href ="/html/index.html";
}