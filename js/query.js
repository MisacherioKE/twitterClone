"use strict";

window.oncontextmenu =()=>{
    return false;
}

firebase.auth().onAuthStateChanged((user)=>{
    if(user){
     document.getElementById("searchTrends").onclick =()=>{
         let searchInput = document.getElementById("search2").value;

         firebase.firestore().collection("users").where("username", "==", searchInput)
         .get().then((querySnapshot)=>{
             querySnapshot.forEach((doc)=>{
                 let name = doc.data().nickname;
                 let email = doc.data().email;
                 let phone = doc.data().phonenumber;

                 


                 let content = "";
                 content +=`<div>`
                 content +=`<h5>${name}</h5>`
                 content +=`<h5>${email}</h5>`
                 content +=`<h5>${phone}</h5>`
                 content +=`</div>`

                 $("#trends").append(content);

             })
         })

     }
    }
    else{
        window.location.href ="/index.html";
    }
})