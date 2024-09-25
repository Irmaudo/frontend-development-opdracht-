// JavaScript Document
console.log("hi");

const hamburgerMenu = document.querySelector('.menuIcon');

const offScreenMenu = document.querySelector('.off-screen-menu');

hamburgerMenu.addEventListener('click', ()  => {
    hamburgerMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
})

document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.querySelector(".darkModeToggle");
    const bodyElement = document.body;

    toggleButton.addEventListener("click", function() {
        bodyElement.classList.toggle("dark-mode");
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const articleChangingButton = document.querySelector(".changingColumn button");

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


const showMoreButton = document.querySelector(".showMore");
const showMoreButton2 = document.querySelector(".showMore2");

function displayText() {
    const text = document.querySelector(".textField");
    text.style.display = "block"; 
}


function displayText2() {
    const text = document.querySelector(".newArticle");
    text.style.display = "block"; 
}



showMoreButton.addEventListener("click", displayText);
showMoreButton2.addEventListener("click", displayText2);