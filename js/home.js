"use strict";

window.oncontextmenu = ()=>{
    return false;
};

// Checking user credibility
firebase.auth().onAuthStateChanged((user)=>{
    if(user){


        alert(user.uid);
        document.getElementById("searchInput").onclick =() =>{
            document.getElementById("public").style.display ="block";
            document.getElementById("lineOne").style.display ="block";
        }

         // Tweet
        document.getElementById("tweetBtn").onclick =()=>{

            document.getElementById("spinner").style.display ="block";
            // document.getElementById("spinner").style.display ="flex";
            // document.getElementById("spinner").style.alignItems ="center";
            document.getElementById("spinner").style.marginLeft ="45%";
            
                let tweet = document.getElementById("searchInput").value;
                let timestamp = firebase.firestore.Timestamp.fromDate(new Date());

        if(!tweet){
            alert("empty tweet");
            document.getElementById("searchInput").style.borderStyle ="solid";
            document.getElementById("searchInput").style.borderBlockColor ="red";
            document.getElementById("spinner").style.display ="none";
        }else{
   
            document.getElementById("searchInput").style.borderStyle ="solid";
            document.getElementById("searchInput").style.borderBlockColor ="gray";

        // Invoke Firebase
            let tweetDoc = firebase.firestore().collection("tweets").doc();
        tweetDoc.set({
            timestamp: timestamp,
            tweet:tweet,
            tweetId: tweetDoc.id,
            userId: user.uid,
            // username:username
        }).then(()=>{
            alert("Tweet Sent Succesfully");
            window.location.reload();
            // document.getElementById("tweet").innerHTML = tweet;
            document.getElementById("spinner").style.display ="none";
        }).catch((error) =>{
            alert(error.message);
        })
    
        }

     
   
}
    }
    else{
        window.location.href ="/index.html";
    }
})






