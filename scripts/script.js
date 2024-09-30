// JavaScript Document
console.log("hi");


// Hamburger Menu //
const hamburgerMenu = document.querySelector('nav li:nth-of-type(1)');

const offScreenMenu = document.querySelector('.off-screen-menu');

hamburgerMenu.addEventListener('click', ()  => {
    hamburgerMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
})

// Dark-mode //

const toggleButton = document.querySelector("main button:nth-of-type(1)");
const bodyElement = document.body;

toggleButton.addEventListener("click", function() {
    bodyElement.classList.toggle("dark-mode");
});

// Show more button. When clicked there comes a new article //
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
// All different background buttons // 
const newBackgroundButton1 = document.querySelector('.changingColumn button:nth-of-type(1)');
const newBackgroundButton2 = document.querySelector('.changingColumn button:nth-of-type(2)');
const newBackgroundButton3 = document.querySelector('.changingColumn button:nth-of-type(3)');
const newBackgroundButton4 = document.querySelector('.changingColumn button:nth-of-type(4)');
const newBackgroundButton5 = document.querySelector('.changingColumn button:nth-of-type(5)');
const newBackgroundButton6 = document.querySelector('.changingColumn button:nth-of-type(6)');

// changes the column background //
const newColumnBackground = document.querySelector('.changingColumn');

// all the carrousels //
const articleChange = document.querySelector('.articleCarrousel');
const secondArticleChange = document.querySelector('.secondArticleCarrousel');
const thirdArticleChange = document.querySelector('.thirdArticleCarrousel');
const fourthArticleChange = document.querySelector('.fourthArticleCarrousel');
const fifthArticleChange = document.querySelector('.fifthArticleCarrousel');
const sixthArticleChange = document.querySelector('.sixthArticleCarrousel');
 
// hides all the carrousels //
function hideAllCarrousels() {
    articleChange.style.display = 'none';
    secondArticleChange.style.display = 'none';
    thirdArticleChange.style.display = 'none';
    fourthArticleChange.style.display = 'none';
    fifthArticleChange.style.display = 'none';
    sixthArticleChange.style.display = 'none';
}

// when clicked on button, the function will start (hide all the carrousels accept de articlehange and adds a new background) //
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


// mail button confetti //

const submitButton = document.querySelector(".mail button");
const popUpText = document.querySelector(".emailSubmitPop-up");
const emailInput = document.getElementById("email");

// checks of the email is valid //
function validEmail(email) {
    const emailSymbols = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    return emailSymbols.test(email);
}

// starts confetti when submitbutton 'if' is //
function startConfetti() {
    confetti();
}

// starts pop-up text when submitbutton 'if' is //
function displayPopUpText() {
    popUpText.style.display = "block";

    setTimeout(() => {
        popUpText.style.display = "none"; 
    }, 2000);  // when the 2 seconds are over, the pop-up will stop //
}

submitButton.addEventListener("click", function() {
    const email = emailInput.value;  // checks if the emailinput is valid //
 
    if (validEmail(email)) { // if its is valid the confetti & popup function will start //
      
        startConfetti();
        displayPopUpText();
    } else {  // if its unvalid there comes an alert //
    
        alert("Please enter a valid email address.");
    }
});


// video of the 2th page //
document.addEventListener('DOMContentLoaded', function() {
    var video = document.querySelector('video');
    video.play();
});




window.onload = function(){
    var article = document.querySelector('.dazed100AllColumns');
    article.classlist.add('visible');
}
