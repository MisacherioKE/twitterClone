"use strict";

window.oncontextmenu = ()=>{
    return false;
};

// signup Btn

document.getElementById("btnSignup").onclick =()=>{
    window.location.href = "/html/signUp2.html";
}

// Close button

document.getElementById("close").onclick =()=>{
    window.location.href = "/html/index.html";
}