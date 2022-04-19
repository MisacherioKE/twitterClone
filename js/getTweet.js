"use strict";

window.oncontextmenu = () =>{
    return false;
}

firebase.auth().onAuthStateChanged((user)=>{
    if(user){
        // pull all tweeets
        firebase.firestore().collection("tweets").get()
        .then((querySnapshot)=>{
            querySnapshot.forEach((doc)=>{
                let tweet = doc.data().tweet;
                let time = doc.data().timestamp;
                let newTime = time.toDate();

                let content = '';
                content +=`<div>`
                content +=`<p>${newTime}</p>`
                content +=`<p>${tweet}</p>`
                content +=`</div>`
                
                $("#sectTwoB").append(content);
             

                // document.getElementById("tweet").innerHTML = tweet;
                // document.getElementById("time").innerHTML = newTime;
            })
        })

    }
    else{
        window.location.href ="index.html";
    }
})