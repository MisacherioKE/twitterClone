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

            uploadimg.on("state_changed", (snapshot) =>{
                var progress = Math.floor(snapshot.bytesTransferred/snapshot.totalBytes)*100 ;
                console.log(progress);

            }, (error) =>{
                alert(error.message);
            }, ()=>{
                uploadimg.snapshot.ref.getDownloadURL().then((downloadURL)=>{
                    console.log(downloadURL);
                })
            })
        }

    }
    else{
        window.location.href ="/index.html";
    }
})