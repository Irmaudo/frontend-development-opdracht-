// JavaScript Document
console.log("hi");


// Hamburger Menu //

const hamburgerMenu = document.querySelector('nav li:nth-of-type(1)');
const offScreenMenu = document.querySelector('.off-screen-menu');

hamburgerMenu.addEventListener('click', ()  => {
    hamburgerMenu.classList.toggle('active'); // active wordt aangeroepen, deze staat in css //
    offScreenMenu.classList.toggle('active');
})

// Dark-mode //

const toggleButton = document.querySelector("main button:nth-of-type(1)"); 
const bodyElement = document.body;

toggleButton.addEventListener("click", function() {
    bodyElement.classList.toggle("dark-mode"); //dark-mode button: https://www.w3schools.com/howto/howto_js_toggle_dark_mode.asp
});

// Show more button. Wanneer op button wordt geklikt dan komt er een nieuw artikel//
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
// Allemaal verschillende achtergrond kleur buttons // 
const newBackgroundButton1 = document.querySelector('.changingColumn button:nth-of-type(1)');
const newBackgroundButton2 = document.querySelector('.changingColumn button:nth-of-type(2)');
const newBackgroundButton3 = document.querySelector('.changingColumn button:nth-of-type(3)');
const newBackgroundButton4 = document.querySelector('.changingColumn button:nth-of-type(4)');
const newBackgroundButton5 = document.querySelector('.changingColumn button:nth-of-type(5)');
const newBackgroundButton6 = document.querySelector('.changingColumn button:nth-of-type(6)');

// verandert de column achtergrond //
const newColumnBackground = document.querySelector('.changingColumn');

// alle carrousels //
const articleChange = document.querySelector('.firstArticleCarrousel');
const secondArticleChange = document.querySelector('.secondArticleCarrousel');
const thirdArticleChange = document.querySelector('.thirdArticleCarrousel');
const fourthArticleChange = document.querySelector('.fourthArticleCarrousel');
const fifthArticleChange = document.querySelector('.fifthArticleCarrousel');
const sixthArticleChange = document.querySelector('.sixthArticleCarrousel');
 
// verstopt alle carrousels //
function hideAllCarrousels() {
    articleChange.style.display = 'none';
    secondArticleChange.style.display = 'none';
    thirdArticleChange.style.display = 'none';
    fourthArticleChange.style.display = 'none';
    fifthArticleChange.style.display = 'none';
    sixthArticleChange.style.display = 'none';
}

// wanneer op button wordt geklikt, zal de functie starten (verstopt alle carrousels behalve de articlechange en voegt een nieuwe achtergrond toe) //
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
const popUpText = document.querySelector(".emailSubmitPop-up");  // bron: confetti hoe in code zetten (heb dit alleen als basis gebruikt): https://www.youtube.com/watch?v=5YTK7Mor-wM
const emailInput = document.getElementById("email");

// checked of de email valid is//
function validEmail(email) { // bron: email validator : https://mailtrap.io/blog/javascript-email-validation/
    const emailSymbols = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    return emailSymbols.test(email);
}

// starts confetti wanneer submitbutton 'if' is //
function startConfetti() {
    confetti(); // bron: confetti: https://confetti.js.org/#
}

// starts pop-up text wanneer submitbutton 'if' is //
function displayPopUpText() {
    popUpText.style.display = "block";

    setTimeout(() => {
        popUpText.style.display = "none"; 
    }, 2000);  // wanneer de 2 seconds voorbij zijn, stopt de pop-up //
}

submitButton.addEventListener("click", function() {
    const email = emailInput.value;  // checked of the emailinput valid is//
 
    if (validEmail(email)) { // als het valid is dan zal de confetti & popup functie starten//
      
        startConfetti();
        displayPopUpText();
    } else {  // als het unvalid is komt er een alert //
    
        alert("Please enter a valid email address.");
    }
});

// video van de 2e pagina //
document.addEventListener(function() {
    var video = document.querySelector('video');
    video.play();
});




  






