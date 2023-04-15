"use strict"

// Task 1

let newsArticle = document.getElementById("news");
console.log(newsArticle);

// select all p elements
let pElements = document.getElementsByTagName("p")
// loop through the elemments and log the innerHTML
for (let i = 0; i < pElements.length; i++) {
    console.log(pElements[i].innerHTML);
}

console.log(document.body.childNodes);
console.log(document.getElementsByTagName("header")[0].nextElementSibling);
let firstNewsP = document.querySelector(".news_content p");
console.log(firstNewsP);


// Task 2

// select the last paragraph element in the news_content div
// Multiple examples below
let lastNewsP = document.querySelector(".news_content p:last-of-type");
//let lastNewsP = document.getElementsByClassName("news_content")[0].lastElementChild;
//let lastNewsP = document.getElementsByClassName("news_content")[0].lastChild;
//let lastNewsP = document.getElementsByClassName("news_content")[0].childNodes[3];

// shows all the text within an element and ALL its child elements without HTML tags
console.log(lastNewsP.innerText);
// shows all the text within an element and ALL its child elements with HTML tags
console.log(lastNewsP.innerHTML);

// only shows the text within an element without parsing and rendering the HTML tags
lastNewsP.innerText = "<strong>Updated</strong> text for the news article";
// shows the text within an element with parsing and rendering the HTML tags as actual HTML elements
lastNewsP.innerHTML = "<strong>Updated</strong> text for the news article";

// a better way to update the text within an element is to use JS

// remove the content of the lastNewsP element
lastNewsP.innerHTML = "";
// create the strong element
let strong = document.createElement("strong");
// fill the strong element with text
strong.innerHTML = "Updated";
// create the remaining text node for the lastNewsP element
let text = document.createTextNode(" text for the news article");
// append the strong element to the (now empty) lastNewsP element
lastNewsP.appendChild(strong);
// append the text node to the lastNewsP element
lastNewsP.appendChild(text);

// removes the lastNewsP element from the DOM
lastNewsP.remove();

// selects the single element of class “news_header” and save the object in a variable named newsHeader.
let newsHeader = document.getElementsByClassName("news_header")[0];
console.log(newsHeader.classList);
// adds the class "arial" to the newsHeader element
newsHeader.classList.add("arial");

// Task 3

/*
newsHeader.addEventListener("click", function () {
    console.log(this)
    // select the news_content div and toggle the class "hidden"
    // we know that the news_content div is the next sibling of the newsHeader element, therefore we can use nextElementSibling
    let newsContent = this.nextElementSibling;
    // another way to select the news_content div is to use the class name, but this is not a good practice as it would not work when there are multiple news_content divs
    //let newsContent = document.getElementsByClassName("news_content")[0];
    newsContent.classList.toggle("hidden");

    // select the col_symbol span and toggle the icon
    // we know that the col_symbol is within the newsHeader element, therefore we can use querySelector to select only elements within the newsHeader
    let colSymbol = this.querySelector(".col_symbol");
    if (colSymbol.innerHTML === "+" ){
        colSymbol.innerHTML = "-";
    } else {
        colSymbol.innerHTML = "+";
    }
});
*/


function collapseNews() {
    console.log(this)
    // select the news_content div and toggle the class "hidden"
    // we know that the news_content div is the next sibling of the newsHeader element, therefore we can use nextElementSibling
    let newsContent = this.nextElementSibling;
    // another way to select the news_content div is to use the class name, but this is not a good practice as it would not work when there are multiple news_content divs
    //let newsContent = document.getElementsByClassName("news_content")[0];
    newsContent.classList.toggle("hidden");

    // select the col_symbol span and toggle the icon
    // we know that the col_symbol is within the newsHeader element, therefore we can use querySelector to select only elements within the newsHeader
    let colSymbol = this.querySelector(".col_symbol");
    if (colSymbol.innerHTML === "+") {
        colSymbol.innerHTML = "-";
    } else {
        colSymbol.innerHTML = "+";
    }
}

newsHeader.addEventListener("click", collapseNews);

