"use strict";

window.oncontextmenu = () =>{
    return false;
}

firebase.auth().onAuthStateChanged((user)=>{
    if(user){ 

            // getting username  
            
firebase.firestore().collection("users")
.get().then((querySnapshot)=>{
    querySnapshot.forEach((doc)=>{
        let name = doc.data().nickname;
        let userId1 = doc.data().userId
 

        
        // pull all tweeets
        firebase.firestore().collection("tweets").get()
        .then((querySnapshot)=>{
            querySnapshot.forEach((doc)=>{
                let tweet = doc.data().tweet;
                let time = doc.data().timestamp;
                let newTime = time.toDate().toDateString();
                let tweetId = doc.data().tweetId;
                let userId = doc.data().userId;
      
                
                if(doc.exists){

                  

                    if(userId1 === userId){

                        let input = '';
                        input +=`<div>`
                        input +=`<p>@${name}</p>`
                        input +=`<p>${newTime}</p>`
                        input += `<p>${tweet}</p>`
    
                        if(userId === user.uid){
                            input +=`<i onclick="editTweet(\`${tweetId}\`)" class="fa-solid fa-pen-to-square h6" style="color: blue; margin:10px;"></i>`
                            input +=`<i onclick="deleteTweet(\`${tweetId}\`)"  class="fa-solid fa-trash h6" style="color: red; margin:10px;"></i>`
                        }
                       
                        input +=`</div>`
    
                        $("#sectTwoB").append(input);
    
                    }


                   
                  

                    // Deleting Tweet
                    window.deleteTweet =(value)=>{
                        // Invoke firebase
                        firebase.firestore().collection("tweets").doc(value)
                        .get().then((doc)=>{
                            let tweet = doc.data().tweet;
                            alert(tweet);
                        })
                        // Delete tweet
                        firebase.firestore().collection("tweets").doc(value)
                        .delete({
                            tweet:""
                        }).then(()=>{
                            alert("This tweet will be deleted");
                            alert("Tweet deleted successfully");
                            window.location.reload();
                        }).catch((error)=>{
                            alert(error.message);
                        })
                    }

                    // Editing the tweet
                    window.editTweet = (value) =>{
                        document.getElementById("edit").style.display ="block";

                        // alert(value);
                        // Invoke firebase
                        firebase.firestore().collection("tweets").doc(value)
                        .get().then((doc)=>{
                            let tweet = doc.data().tweet;
                            document.getElementById("newtweet").value = tweet;
                        })

                        // Edit tweet
                        document.getElementById("update").onclick =()=>{
                            let newTweet = document.getElementById("newtweet").value;

                            // Invoking firebase
                            firebase.firestore().collection("tweets").doc(value)
                            .update({
                                tweet:newTweet
                            }).then(()=>{
                                alert("Tweet updated successfully");
                                window.location.reload();
                            }).catch((error)=>{
                                alert(error.message);
                            })
                        }
                    }
                    // document.getElementById("edit").onclick =()=>{
                    //     let content ="";
                    //     content += `<div>`
                    //     content += `<p>${tweet}</p>`
                    //     content += `<button id="update">update</button>`
                    //     content += `<button id="delete">delete</button>`
                    //     content += `</div>`
                    //     $("#editBox").append(content);
                    //     document.getElementById("editBox").style.display ="block";
                    // }

                }else{
                    alert("There's no such document");
                }
              
             

                // document.getElementById("tweet").innerHTML = tweet;
                // document.getElementById("time").innerHTML = newTime;
            })
        })
    })
  

    

})



    }
    else{
        window.location.href ="index.html";
    }
})

