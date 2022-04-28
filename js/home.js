"use strict";

window.oncontextmenu = ()=>{
    return false;
};

// Checking user credibility
firebase.auth().onAuthStateChanged((user)=>{
    if(user){

       firebase.firestore().collection("users").get()
       .then((querySnapshot)=>{
        querySnapshot.forEach((doc)=>{
            let name = doc.data().nickname;
            let userId1 = doc.data().userId;
            let userId = doc.data().userId
            
            if(userId1 === userId){
                alert(`${name} signed in`);
            }
        
        })
        }).catch((error)=>{
            alert(error.message);
        })
        

        
        document.getElementById("searchInput").onkeyup =() =>{
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
            document.getElementById("searchInput").style.border ="solid red";
            document.getElementById("spinner").style.display ="none";
        }else{
   
            document.getElementById("searchInput").style.borderStyle ="solid gray";
          
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

// Modal
   firebase.auth().onAuthStateChanged((user)=>{
       if(user){

        alert(user.uid);
           document.getElementById("searchInput1").onkeyup =()=>{
            document.getElementById("public1").style.display ="block";
            document.getElementById("lineOne1").style.display ="block";
           }
        //    tweet
        document.getElementById("tweetBtn3").onclick =()=>{
            let tweetTwo = document.getElementById("searchInput1").value;
            let timestamp =  firebase.firestore.Timestamp.fromDate(new Date());

            if(!tweetTwo){
                alert("Empty tweet!");
                document.getElementById("searchInput1").style.border ="solid red";
               
            }else{
                document.getElementById("searchInput1").style.border ="solid gray";

                // Invoke Firebase
            let tweetDoc = firebase.firestore().collection("tweets").doc();
            tweetDoc.set({
                tweet:tweetTwo,
                timestamp:timestamp,
                tweetId: tweetDoc.id,
                userId: user.uid
            }).then(()=>{
                alert("Tweet sent succesfully");
                window.location.href = "/html/home.html";
            }).catch((error)=>{
                alert(error.message);
            })
            
            }
            
        }
          
       }
        else{
        window.location.href ="/index.html";
    }
   })

// ProfileButtton
document.getElementById("profileBtn").onclick =()=>{
    document.getElementById("signOut").style.display ="block";
}
// logout
document.getElementById("logOut").onclick =()=>{
    window.location.href ="/index.html";
}

// Close
document.getElementById("closeX").onclick =()=>{
    document.getElementById("signOut").style.display ="none";
}

document.getElementById("closeX").style.position ="absolute";
document.getElementById("closeX").style.top ="0";
document.getElementById("closeX").style.right ="0";


document.getElementById("profileBtn").onmouseover =()=>{
    document.getElementById("profileBtn").style.border ="solid 1px gray";
    document.getElementById("profileBtn").style.backgroundColor ="gray";
}
document.getElementById("profileBtn").onmouseout =()=>{
    document.getElementById("profileBtn").style.border ="none";
    document.getElementById("profileBtn").style.backgroundColor ="whitesmoke";
}




