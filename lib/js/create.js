const database = firebase.database().ref();

database.on('child_added', addMessagesToBoard);

let divMessages = document.querySelector('.blog_container');

function addMessagesToBoard(rowData) {
    const row = rowData.val();
    const title = row.TITLE;
    const username = row.USERNAME;
    const post = row.POST;

    let divElement = document.createElement('div');
    divElement.className = "posts";
    divMessages.appendChild(divElement);
    let divMessage = document.querySelector(".posts");

    let h2ElementTitle = document.createElement('h2');
    h2ElementTitle.innerText = `${title}`;
    divMessage.appendChild(h2ElementTitle);

    let pElementUsername = document.createElement('p');
    pElementUsername.innerText = `By : ${username}`;
    divMessage.appendChild(pElementUsername);

    let pElementPost = document.createElement('p');
    pElementPost.innerText = `${post}`;
    divMessage.appendChild(pElementPost);

    // window.location.href="<./../../index.html>";



}

