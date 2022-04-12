"use strict";

window.oncontextmenu = ()=>{
    return false;
};

document.getElementById("searchInput").onclick =() =>{
    document.getElementById("public").style.display ="block";
    document.getElementById("lineOne").style.display ="block";
}

// Tweet

document.getElementById("tweetBtn").onclick =()=>{
    let tweet = document.getElementById("searchInput").value;

    // Invoke Firebase

    firebase.firestore().collection("tweets").doc()
    .set({
        tweet:tweet
    }).then(()=>{
        alert("Tweet Sent Succesfully");

        document.getElementById("tweet").innerHTML = tweet;
    }).catch((error) =>{
        alert(error.message);
    })

    
}