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
        document.getElementById("email").style.border ="solid red";
        document.getElementById("userName").style.border ="solid gray";
        document.getElementById("phoneNumber").style.border ="solid gray";
        document.getElementById("pass").style.border ="solid gray";

    }else if(username ==""){
        alert("empty field!");
        document.getElementById("email").style.border ="solid gray";
        document.getElementById("userName").style.border ="solid red";
        document.getElementById("phoneNumber").style.border ="solid gray";
        document.getElementById("pass").style.border ="solid gray";

    }else if(phonenumber ==""){
        alert("empty field!");
        document.getElementById("email").style.border ="solid gray";
        document.getElementById("userName").style.border ="solid gray";
        document.getElementById("phoneNumber").style.border ="solid red";
        document.getElementById("pass").style.border ="solid gray";

    }else if(!password){
        document.getElementById("pass").style.border ="solid red";
        document.getElementById("email").style.border ="solid gray";
        document.getElementById("userName").style.border ="solid gray";
        document.getElementById("phoneNumber").style.border ="solid gray";
        
    }
    else{
        document.getElementById("email").style.border ="solid gray";
        document.getElementById("userName").style.border ="solid gray";
        document.getElementById("phoneNumber").style.border ="solid gray";
        document.getElementById("pass").style.border ="solid gray";


        document.getElementById("signup").style.display ="none";
        document.getElementById("loading").style.display ="block";
    // Invoking Firebase

    firebase.auth().createUserWithEmailAndPassword(email,password)
    .then((userCredentials) =>{
        let user = userCredentials.user
        let uid = user.uid;

        console.log(user);
        console.log(uid);

        alert("Account created successfully");

        document.getElementById("signup").style.display ="block";
        document.getElementById("loading").style.display ="none";
       
        // Invoking firestore
        firebase.firestore().collection("users").doc(uid)
        .set({
            email:email,
            username:username,
            phonenumber:phonenumber,
            userId: uid
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

