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

            let uploadimg = storageRef.child("profilePics/").child(file.name).put(file);

            uploadimg.on("state_changed", (snapshot) =>{
                var progress = Math.floor(snapshot.bytesTransferred/snapshot.totalBytes)*100 ;
                document.getElementById("uploadProgress").innerHTML = progress;
                document.getElementById("filename").innerHTML = file.name;
               

            }, (error) =>{
                alert(error.message);
            }, ()=>{
                uploadimg.snapshot.ref.getDownloadURL().then((downloadURL)=>{
                    
                    firebase.firestore().collection("users").doc(user.uid)
                    .update({
                        downloadURL:downloadURL
                    }).then(()=>{
                        alert("upload successful");
                    }).catch((error)=>{
                        alert(error.message);
                    })
                })
            })
        }

    }
    else{
        window.location.href ="/index.html";
    }
})