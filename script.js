// Game container
let game = document.querySelector(".game");
let buttonShow = document.querySelector(".show");
let buttonDouble = document.querySelector(".double");
let buttonShuffle = document.querySelector(".shuffle");
let buttonFlip = document.querySelector(".flip");
// Array containing image URLs
let url= "https://cdn.glitch.global/15166450-5804-4fff-ac7b-ab613fa0e44e/";
let cards = [
"card%231.jpeg?v=1710867632622",
"card%232.hero.png.jpg?v=1710436192814",
"card%233_III.jpeg?v=1710436202308",
"card%234.png?v=1710436206781",
"card%245.jpeg?v=1710436214182",
"image%236.jpeg?v=1710436219807",
"card%237.jpeg?v=1710436224798",
"card%238.png?v=1710436239205"


]; 
//https://cdn.glitch.global/90a65b5a-8bc0-4542-b3e8-b9363babaada/

// Button to Show Deck
buttonShow.onclick = function() {
    // Log message
    console.log("Showing the deck...");
    // For of loop
    for (let card of cards) {
        game.insertAdjacentHTML("beforeend",
            "<div style='background-image: url(" + url +
            card +
            ")' class='card'>");
    }
};

// Button to Double Deck


buttonDouble.onclick = function(){
    
};

// Button to Shuffle Cards
 

// Button to Flip All Cards


// Here we need a function for clicking on individual cards.
// (It won't work until we finish writing it.)
$(document).click(function(event) {
    // Get the id property of the clicked thing.
    let clickedId = event.target.id;
});