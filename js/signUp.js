"use strict";

window.oncontextmenu = ()=>{
    return false;
};

//  signup button

document.getElementById("signup").onclick = () =>{
    let email = document.getElementById("email").value;
    let password = document.getElementById("pass").value;
    let username = document.getElementById("userName").value;
    let phonenumber = document.getElementById("phoneNumber").value;

    // Invoking Firebase

    firebase.auth().createUserWithEmailAndPassword(email,password)
    .then((userCredentials) =>{
        let user = userCredentials.user
        let uid = user.uid;

        console.log(user);
        console.log(uid);

        alert("user created successfully");
       
        // Invoking firestore
        firebase.firestore().collection("users").doc()
        .set({
            email:email,
            username:username,
            phonenumber:phonenumber
        }).then(()=>{
            alert("user data added succesfully")

            window.location.href ="/html/index.html"
        }).catch((error)=>{
            console.log(error.message);
        })
        
    }).catch((error)=>{
        console.log(error.message);
    })
}

