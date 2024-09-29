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

const text = document.querySelector(".textField");
const text2 = document.querySelector(".newArticle");

function displayText() {
    text.style.display = "block"; 
}

function displayText2() {
    text2.style.display = "block"; 
}

showMoreButton.addEventListener("click", displayText);
showMoreButton2.addEventListener("click", displayText2);


// Allemaal voor het vak waar de achtergrondkleuren en artikelen veranderen zodra en op een button wordt geklikt. 
const newBackgroundButton1 = document.querySelector('.changingColumn button:nth-of-type(1)');
const newBackgroundButton2 = document.querySelector('.changingColumn button:nth-of-type(2)');
const newBackgroundButton3 = document.querySelector('.changingColumn button:nth-of-type(3)');
const newBackgroundButton4 = document.querySelector('.changingColumn button:nth-of-type(4)');
const newBackgroundButton5 = document.querySelector('.changingColumn button:nth-of-type(5)');
const newBackgroundButton6 = document.querySelector('.changingColumn button:nth-of-type(6)');


const newColumnBackground = document.querySelector('.changingColumn');

const articleChange = document.querySelector('.articleCarrousel');
const secondArticleChange = document.querySelector('.secondArticleCarrousel');
const thirdArticleChange = document.querySelector('.thirdArticleCarrousel');
const fourthArticleChange = document.querySelector('.fourthArticleCarrousel');
const fifthArticleChange = document.querySelector('.fifthArticleCarrousel');
const sixthArticleChange = document.querySelector('.sixthArticleCarrousel');



showMoreButton.addEventListener("click", displayText);
 
function hideAllCarrousels() {
    articleChange.style.display = 'none';
    secondArticleChange.style.display = 'none';
    thirdArticleChange.style.display = 'none';
    fourthArticleChange.style.display = 'none';
    fifthArticleChange.style.display = 'none';
    sixthArticleChange.style.display = 'none';
}



newBackgroundButton1.addEventListener('click', function() {
    newColumnBackground.style.backgroundColor = '#9864dc';
    hideAllCarrousels();
    articleChange.style.display = 'block'; 
});

newBackgroundButton2.addEventListener('click', function() {
    newColumnBackground.style.backgroundColor = '#98fc94';
    hideAllCarrousels();
    secondArticleChange.style.display = 'block'; 
});

newBackgroundButton3.addEventListener('click', function() {
    newColumnBackground.style.backgroundColor = '#ffe45c';
    hideAllCarrousels();
    thirdArticleChange.style.display = 'block'; 
});

newBackgroundButton4.addEventListener('click', function() {
    newColumnBackground.style.backgroundColor = '#f03424';
    hideAllCarrousels();
    fourthArticleChange.style.display = 'block'; 
});

newBackgroundButton5.addEventListener('click', function() {
    newColumnBackground.style.backgroundColor = '#487cfc';
    hideAllCarrousels();
    fifthArticleChange.style.display = 'block'; 
});

newBackgroundButton6.addEventListener('click', function() {
    newColumnBackground.style.backgroundColor = '#f0644c';
    hideAllCarrousels();
    sixthArticleChange.style.display = 'block'; 
});


// mail button confetti

const submitButton = document.querySelector(".mail button");
const popUpText = document.querySelector(".emailSubmitPop-up");
const emailInput = document.getElementById("email");

function isValidEmail(email) {
    const emailSymbols = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailSymbols.test(email);
}


function startConfetti() {
    confetti();
}

function displayPopUp() {
    popUpText.style.display = "block";

    setTimeout(() => {
        popUpText.style.display = "none"; 
    }, 2000); 
}

submitButton.addEventListener("click", function() {
    const email = emailInput.value; 

 
    if (isValidEmail(email)) {
      
        startConfetti();
        displayPopUp();
    } else {
    
        alert("Please enter a valid email address.");
    }
});



