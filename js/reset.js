"use strict";

window.oncontextmenu = ()=>{
    return false;
}

document.getElementById("reset").onclick = ()=>{

    let email = document.getElementById("email").value;

    if(!email){
        alert("Empty field!")
        document.getElementById("email").style.border ="solid red";
    }else{
        document.getElementById("email").style.border ="solid gray";

         // invoke firebase
    firebase.auth().sendPasswordResetEmail(email).then(()=>{
        alert("A reset link has been sent to your email");
    }).catch((error) =>{
        alert(error.message);

        console.log(error.message);
    })
    }

    // invoke firebase
    firebase.auth().sendPasswordResetEmail(email).then(()=>{
        alert("A reset link has been sent to your email");
    }).catch((error) =>{
        alert(error.message);

        console.log(error.message);
    })
}

// Close Button
document.getElementById("close").onclick =()=>{
    window.location.href ="/index.html";
}