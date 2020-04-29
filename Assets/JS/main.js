// we simulate getting data from DB/SERVER/API
function getDataFromDB() {
    return [{
            id: "1",
            title: "JS is amazing",
            body: "JS is amazing and so easy to learn. I like it a lot!",
            author: "CB",
        },
        {
            id: "2",
            title: "DOM manipulation is easy",
            body: "DOM Manipulation using JS is straightforward and fun! You can intercept user actions and change things in the HTML and also in CSS.",
            author: "Anonymous",
        },
        {
            id: "3",
            title: "CSS is nice",
            body: "To style your HTML page is so much fun! I like playing with colosand images!",
            author: "AB",
        },
        {
            id: "4",
            title: "Ana are mere",
            body: "this is my awesome comment",
            author: "John",
        },
    ];
}

// We set a convention
// All variables that container a DOM element
// should start with $
var $comments = document.querySelector(".comments");

function createCommentElement(title, comment, author) {
    // we create an article element
    var $article = document.createElement("article");
    // console.dir($article);
    // 1. create header element with text
    var $header = document.createElement("header");
    $header.innerText = title;
    // 2. add header element to $article
    $article.appendChild($header);
    // 3. create p elmenet with class commnet and text
    var $p = document.createElement("p");
    $p.innerText = comment;
    $p.classList.add("comment");
    // 4. add p element to $article
    $article.appendChild($p);
    // 5. create footer element with text
    var $footer = document.createElement("footer");
    $footer.innerText = author;
    // 6. add footer element to $article
    $article.appendChild($footer);

    var $button = document.createElement("button");
    $button.textContent = "Remove";
    $button.setAttribute("data-id", "id");

    $article.appendChild($button);
    $article.classList.add("articleComm");

    return $article;
}

function listComments(comments) {
    for (var i = 0; i < comments.length; i++) {
        var comment = comments[i];
        console.log(comment);

        var $article = createCommentElement(
            comment.title,
            comment.body,
            comment.author,
            comment.button
        );

        // parent.appendChild(element) will insert element at the end of parent
        $comments.appendChild($article);
    }
}

var $title = document.querySelector('input[name="title"]');
var $comment = document.querySelector('textarea[name="comment"]');
var $author = document.querySelector('input[name="author"]');

function addComment(event) {
    console.log("add comment");
    // we stop the submit event form happening
    event.preventDefault();
    console.dir(event);
    console.log($title.value);
    console.log($comment.value);
    console.log($author.value);

    var $article = createCommentElement(
        $title.value,
        $comment.value,
        $author.value
    );

    // parent.appendChild(element) will insert element at the end of parent
    $comments.appendChild($article);

    function btnDelete() {
        var currentElement = this.parentElement;
        currentElement.remove();
    }
    var deleteButton = document.querySelectorAll("[data-id]");
    for (var i = 0; i < deleteButton.length; i++) {
        deleteButton[i].addEventListener("click", btnDelete);
    }
}

$searchInput = document.querySelector('input[name="search"]');

function onSearch(event) {
    console.log(event);
    console.log($searchInput.value);
}

function onSearchInputChange(event) {
    console.log(event);
    console.log($searchInput.value);
}

// event which triggers when document is loaded
document.addEventListener("DOMContentLoaded", function() {
    console.log("document is loaded");
    // get comments from db
    var comments = getDataFromDB();
    console.log(comments);
    // list comments in dom
    listComments(comments);

    var $form = document.querySelector("form");
    $form.addEventListener("submit", addComment);

    $searchButton = document.querySelector(".search");
    $searchButton.addEventListener("click", onSearch);

    // input event triggres when typing in the input field or when it changes
    $searchInput.addEventListener("input", onSearchInputChange);

    function btnDelete() {
        var currentElement = this.parentElement;
        currentElement.remove();
    }
    var deleteButton = document.querySelectorAll("[data-id]");
    for (var i = 0; i < deleteButton.length; i++) {
        deleteButton[i].addEventListener("click", btnDelete);
    }
});

// var deleteBtn = document.querySelector("article button");

// function onButtonClick() {
//     deleteBtn.setAttribute("id", "article 1");
//     console.log(deleteBtn.id);
// }
// deleteBtn.addEventListener("click", onButtonClick);

// var newBttn = document.querySelector("article");
//     newBttn.innerHTML += "<button>Delete</button>";

// var banner = document.querySelectorAll("article");
// console.log("article node type is:", banner.nodeType);

var dBtn = document.querySelectorAll("article button");
Array.from(dBtn).forEach(function(btn) {
    btn.addEventListener("click", function(e) {
        var article = e.target.parentElement;
        article.parentNode.removeChild(article);
    });
});

// This is only an experiment

var hideBox = document.querySelector("#hide");
hideBox.addEventListener("change", function(e) {
    if (hideBox.checked) {
        $comments.style.display = "none";
    } else {
        $comments.style.display = "initial";
    }
});