"use strict";

window.oncontextmenu =()=>{
    return false;
}

firebase.auth().onAuthStateChanged((user)=>{
    if(user){
     document.getElementById("searchTrends").onclick =()=>{
         let searchInput = document.getElementById("search2").value;

         firebase.firestore().collection("users").where("nickname","==",searchInput)
         .get().then((querySnapshot)=>{
             querySnapshot.forEach((doc)=>{
                 let name = doc.data().nickname;
                 let email = doc.data().email;
                 let phone = doc.data().phonenumber;
                 let downloadURL = doc.data().downloadURL;

                 


                 let content = "";
                 content +=`<div style="position: relative;background-color: whitesmoke;width: 400px;height: fit-content;">`
                 content +=`<h5 style="position: absolute;top: 12%;left: 18%;">@${name}</h5>`
                 content +=`<img src="${downloadURL}" alt="" class="img" style="height: 50px; object-fit: cover; border-radius: 50%; width: 50px; margin-left: 1%; margin-bottom: 15%;">`
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