"use strict";

window.oncontextmenu =()=>{
    return false;
}

// document.getElementById("signup").onclick =()=>{
//     document.getElementById("signup").style.display ="none";
//     document.getElementById("loading").style.display ="block";

//     alert("Please login with your credentials")

//     window.location.href ="/index.html"
// }
document.getElementById("close").onclick =()=>{
    window.location.href = "/html/signUp2.html";
}