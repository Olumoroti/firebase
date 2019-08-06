const titleElement = document.getElementById("title");
const usernameElement = document.getElementById("username");
const postElement = document.getElementById("post");
const button = document.getElementById("submit_button");
button.addEventListener("click",updateDB);

//Set database object here
const database = firebase.database().ref();

/*
  Updates the database with the username and message.
 */
function updateDB(event){
    event.preventDefault();
    const title           = titleElement.value;
    const username        = usernameElement.value;
    const post            = postElement.value; 

    titleElement.value = "";
    usernameElement.value  = "";
    postElement.value = "";

    console.log(title + " : " + username + " : " + post);

    //Update database here
    const value = {
        TITLE : title,
        USERNAME: username,
        POST: post
    }
    database.push(value);

}

