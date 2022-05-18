"use strict";

window.oncontextmenu = ()=>{
    return false;
}


firebase.firestore().collection("users")
.get().then((querySnapshot)=>{
    querySnapshot.forEach((doc)=>{
        let email = doc.data().email;
        let userId = doc.data().userId;

        if(userId == user.uid){

            document.getElementById("email").value = email;
        }

       

        document.getElementById("reset").onclick = ()=>{
   
            //  let email = document.getElementById("email").value; 
           
            if(!email){
                alert("Empty field!")
                document.getElementById("email").style.border ="solid red";
            }else{
                document.getElementById("email").style.border ="solid gray";
                document.getElementById("loading").style.display ="block";
                document.getElementById("reset").style.display ="none";   
            }
            //       // invoke firebase
                  firebase.auth().sendPasswordResetEmail(email).then(()=>{
                    alert("A reset link has been sent to your email");
                    alert("please login with your new password");
                    window.location.href ="/index.html";
                }).catch((error) =>{
                    alert(error.message);
                    console.log(error.message);
                    document.getElementById("loading").style.display ="none";
                    document.getElementById("reset").style.display ="block";
                })
        
        }
    })
   
  
})



// Close Button
document.getElementById("close").onclick =()=>{
    window.location.href ="/index.html";
}