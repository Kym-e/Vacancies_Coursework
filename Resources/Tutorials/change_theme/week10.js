"use strict";
let postsURL = "https://jsonplaceholder.typicode.com/posts";
let usersURL = "https://jsonplaceholder.typicode.com/users";
fetch(postsURL)
  .then((response) => response.json())
  .then((responeJSON) => {
    console.log(responeJSON);
    displayPosts(responeJSON);
  });

function displayPosts(response) {
  console.log(response);

  // select the first tempalte element. As there is only one, selecting it by
  // its TagName is a valid way
  let template = document.getElementsByTagName("template")[0];

  for (let i = 0; i < response.length; i++) {
    // select the post item from the array that the API returned
    let postItem = response[i];
    console.log(postItem);

    // clones the template and its child-elements
    let post = template.content.cloneNode(true);

    // add the data from the post
    let postTitle = postItem.title;
    let postBody = postItem.body;

    // querySelector returns the FIRST element that matches
    let postHeader = post.querySelector("span.post_header");
    let postContent = post.querySelector("p.post_content");

    // assign values
    postHeader.innerText = "Title: " + postTitle;
    postContent.innerText = postBody;

    // TASK 2: fill the User with the ID
    let userIDElement = post.querySelector("span.user_id");
    userIDElement.innerText = postItem.userId;

    // TASK 2: add event listener to each button
    let postButton = post.querySelector("button.show_details");
    postButton.addEventListener("click", displayUser);

    // add the post to the postlist
    let postListSection = document.getElementById("postlist");
    postListSection.appendChild(post);
  }
}

function displayUser(evt) {
  //currentTarget property gives you the element to which the event was attached
  let btn = evt.currentTarget;
  console.log(btn);

  //navigate to other elements, in this case the parents element
  let post = btn.parentElement;
  console.log(post);

  let userId = post.querySelector(".user_id").innerText;
  console.log(userId);
  //hide or show
  if (post.querySelector("div.user_details").style.display == "") {
    //Task2: Get user data:
    // users api endpoint + / + userID
    let specificUserURL = usersURL + "/" + userId;
    fetch(specificUserURL)
      .then((response) => response.json())
      .then((responeJSON) => {
        let userDiv = console.log(responeJSON);
        post.querySelector("span.username").innerText = responeJSON.name;
        post.querySelector("span.email").innerText = responeJSON.email;
        post.querySelector("div.user_details").style.display = "block";
        btn.innerHTML = "Details &#9650;";
      });
  } else {
    post.querySelector("div.user_details").style.display = "";
    btn.innerHTML = "Details &#9660;";
  }
}

// if the variable is not stored yet, create it
if (!localStorage.getItem("theme")) {
  localStorage.setItem("theme", "light");
} else {
  setTheme();
}

function setTheme() {
  let theme = localStorage.getItem("theme");
  if (theme == "dark") {
    document.body.style.backgroundColor = "black";
  } else {
    document.body.style.backgroundColor = "white";
  }
}

function changeTheme() {
  let theme = localStorage.getItem("theme");
  if (theme == "dark") {
    localStorage.setItem("theme", "light");
  } else {
    localStorage.setItem("theme", "dark");
  }
  setTheme();
}

document
  .getElementById("theme_toggle_btn")
  .addEventListener("click", changeTheme);
