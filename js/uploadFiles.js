"use strict";

window.oncontextmenu = ()=>{
    return false;
}

firebase.auth().onAuthStateChanged((user)=>{
    if(user){

        document.getElementById("upload").onclick =()=>{

            // create a root ref
            let storageRef = firebase.storage().ref();

            // get file
            let file = document.getElementById("files").files[0];

            console.log(file);
            let uploadimg = storageRef.child("profilePics/").child(file.name).put(file);
        }

    }
    else{
        window.location.href ="index.html";
    }
})