"use strict";


window.oncontextmenu =()=>{
    return false;
}

firebase.auth().onAuthStateChanged((user)=>{
    if(user){


        // Pull Users
        firebase.firestore().collection("users").where("userId","!=",user.uid).get()
        .then((querySnapshot)=>{
            querySnapshot.forEach((doc)=>{
                let name = doc.data().username;
                let userId = doc.data().userId;
                let downloadURL = doc.data().downloadURL;

                let content ="";
                content += `<div onClick ="sendMessage(\`${userId}\`)" class="col" id="pple" style="background-color: white; height: 25vh; display: flex;">`
                content +=`<img src="${downloadURL}" alt="" class="img" style="height: 50px; object-fit: cover; border-radius: 50%; width: 50px; margin-left: 1%; margin-bottom: 15%;">`
                content += `<h5>${name}</h5>`
                content += ` </div>`
          
                $("#msgs").append(content);
                

           
            })
        })


        window.sendMessage =(value)=>{
            alert(value);
            document.getElementById("send").onclick =()=>{
                let message = document.getElementById("msgInput").value;
                let timestamp = firebase.firestore.Timestamp.fromDate(new Date());

                // Sending to the db
                let messageDoc = firebase.firestore().collection("messages").doc();
                messageDoc.set({
                    message:message,
                    messageFrom: user.uid,
                    messageTo:value,
                    messageDocId:messageDoc.id,
                    timestamp:timestamp
                }).then(()=>{
                    alert("Message sent");

                    window.location.reload();
                }).catch((error)=>{
                    alert(error.message);
                })
            }
        }
        // Pull all messages

        firebase.firestore().collection("messages").get()
        .then((querySnapshot)=>{
            querySnapshot.forEach((doc)=>{
                let message = doc.data().message;
                let messageFrom = doc.data().messageFrom;
                let messageTo = doc.data().messageTo;
                let timestamp = doc.data().timestamp;
                let date = timestamp.toDate().toDateString();
            

                // append message
                if(messageFrom == user.uid){

                    let content = "";
                    content +=`<div id="outMsgs" style="width: 300px;height: 100px; margin-bottom: 20px; background-color: lightblue; border-radius: 30px 0px 30px 30px;">`
                    content += `<p>${message}</p>`
                    content += `<h6 style="margin-top: 55px; margin-left: 170px;">${date}</h6>`
                    content +=`</div>`
                    content += `<input type="text" id="msgInput">`
                    content += ` <button class="btn btn-primary" id="send">Send</button>`

                    $("#chats").append(content);
                }
                    if(messageTo == user.uid){

                        let content = "";
                        content +=`<div id="inMgs" style="width: 300px;height: 100px;margin-top: 10px; background-color: blue; border-radius: 0 30px 30px 30px; margin-bottom: 20px;">`
                        content += `<p>${message}</p>`
                        content += `<h6 style="margin-top: 55px; margin-left: 170px;">${date}</h6>`
                        content +=`</div>`
                      
    
                        $("#chats").append(content);


                }
            })
        })

    }
    else{
        window.location.href ="/index.html";
    }
})
   
