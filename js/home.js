"use strict";

window.oncontextmenu = ()=>{
    return false;
};

document.getElementById("searchInput").onclick =() =>{
    document.getElementById("public").style.display ="block";
    document.getElementById("lineOne").style.display ="block";
}