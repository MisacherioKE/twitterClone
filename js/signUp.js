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

    if(email ==""){
        alert("empty field!");
    }else if(username ==""){
        alert("empty field!");
    }else if(phonenumber ==""){
        alert("empty field!");
    }else{
       
    // Invoking Firebase

    firebase.auth().createUserWithEmailAndPassword(email,password)
    .then((userCredentials) =>{
        let user = userCredentials.user
        let uid = user.uid;

        console.log(user);
        console.log(uid);

        alert("Account created successfully");
       
        // Invoking firestore
        firebase.firestore().collection("users").doc(uid)
        .set({
            email:email,
            username:username,
            phonenumber:phonenumber
        }).then(()=>{
            alert("Please login with your credentials")

            window.location.href ="/index.html"
        }).catch((error)=>{
            alert(error.message);
            console.log(error.message);
        })
        
    }).catch((error)=>{
        alert(error.message);

        console.log(error.message);
    })
}
    }


// Close button

document.getElementById("close").onclick =()=>{
    window.location.href = "/html/signUp.html";
}

