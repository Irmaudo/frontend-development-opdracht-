// JavaScript Document
console.log("hi");

const hamburgerMenu = document.querySelector('.menuIcon');

const offScreenMenu = document.querySelector('.off-screen-menu');

hamburgerMenu.addEventListener('click', ()  => {
    hamburgerMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
})

function displayText() {
    var text = document.querySelector(".textField");
    text.style.display = "block";
}

function displayText2() {
    var text = document.querySelector(".newArticle");
    text.style.display = "block";
}

document.addEventListener("DOMContentLoaded", function() {
    var toggleButton = document.querySelector(".darkModeToggle");
    var bodyElement = document.body;

    toggleButton.addEventListener("click", function() {
        bodyElement.classList.toggle("dark-mode");
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var articleChangingButton = document.querySelector(".changingColumn button");

    articleChangingButton.addEventListener("click", function() {
        bodyElement.classList.toggle(".changingButton");
    });
});


const searchMenu = document.querySelector('.searchIcon');

const offScreenSearch = document.querySelector('.off-screen-search');

searchMenu.addEventListener('click', ()  => {
    searchMenu.classList.toggle('active');
    offScreenSearch.classList.toggle('active');
})
