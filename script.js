// Game Container
let game = document.querySelector(".game");
let buttonShow = document.querySelector(".show");
let buttonDouble = document.querySelector(".double");
let buttonShuffle = document.querySelector(".shuffle");
let buttonFlip = document.querySelector(".flip");
// Array containing image URLs
let url = "https://cdn.glitch.global/";

let cards = [
    "0a8e2d5a-0cda-4ec6-a88c-7c4f68636948/0008631716_25.jpg?v=1712855075415",
    "15166450-5804-4fff-ac7b-ab613fa0e44e/card%232.hero.png.jpg?v=1710436192814",
    "15166450-5804-4fff-ac7b-ab613fa0e44e/card%233_III.jpeg?v=1710436202308",
    "15166450-5804-4fff-ac7b-ab613fa0e44e/card%234.png?v=1710436206781",
    "15166450-5804-4fff-ac7b-ab613fa0e44e/card%245.jpeg?v=1710436214182",
    "15166450-5804-4fff-ac7b-ab613fa0e44e/image%236.jpeg?v=1710436219807",
    "15166450-5804-4fff-ac7b-ab613fa0e44e/card%237.jpeg?v=1710436224798",
    "15166450-5804-4fff-ac7b-ab613fa0e44e/card%238.png?v=1710436239205"


];

let clickedIds = [];
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
        let audio = document.querySelector(".audio2");
        console.log(audio);
    audio.play();
    }
};

// Button to Double Deck
buttonDouble.onclick = function() {
    console.log("Deck has " + cards.length + " cards.");
    for (let card of cards) {
        if (cards.length !== 16) {
            cards.push(card);
            game.insertAdjacentHTML("beforeend", "<div style='background-image: url(" + url + card + ")' class='card'>");
       let audio = document.querySelector(".audio");
    audio.play();
        }
    }
    console.log("Now the deck has " + cards.length + "cards.");
    buttonDouble.style.color = "silver";

};

// Button to Shuffle Cards
buttonShuffle.onclick = function() {
    shuffle(cards);
    game.innerHTML = "";
    console.log("I'm shuffling the cards!");
    let i = 0;
    for (let card of cards) {
        game.insertAdjacentHTML("beforeend", "<div style='background-image: url(" + url + card + ")' id='" + i + "' class='card'>");
        i = i + 1;
        
    }
     let audio = document.querySelector(".audio2");
        console.log(audio);
    audio.play();
};
/* ---------------------------------------------------
DON'T CHANGE THE Fisher-Yates SHUFFLE FUNCTION BELOW!
--------------------------------------------------- */
function shuffle(array) {
    let currentIndex = array.length,
        randomIndex;
    // While there are elements to shuffle...
    while (currentIndex > 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex = currentIndex - 1;
        // Swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]
        ];
    }
    return array;
}
// Button to Flip All Cards
buttonFlip.onclick = function() {
    let i = 0;
    for (card of cards) {
        document.getElementById(i).style.backgroundImage = "";
        i = i + 1;
    }
    buttonFlip.style.color = "silver";
    
    let audio = document.querySelector(".audio");
    audio.play();
};

// logic to detect matches
$(document).click(function(event) { 
   // get the id Property of the clicked thing.
    let clickedId = event.target.id;
    console.log(clickedId);
    //If a card was clicked...
    if(clickedId !== "") {
    // Make background Image appear!
        document.getElementById(clickedId).style.backgroundImage = "url('" + url + cards[clickedId] + "')";
        //also add the Id to an array (and log them)
        clickedIds.push(clickedId);
        console.log(clickedIds);
        // if 1 card was clicked...
        if (clickedIds.length === 2) {
            // Get both image URLs (and log them)
            let card1picture = document.getElementById(clickedIds[0]).style.backgroundimage;
            let card2picture = document.getElementById(clickedIds[1]).style.backgroundimage;
            console.log(card1picture);
            console.log(card2picture);
            // if they are the same, just empty the array!
            if (card1picture === card2picture) { 
                console.log("match");
                document.getElementById(clickedIds [0]).id = "";
                document.getElementById(clickedIds [1]).id = "";
               clickedIds = [];
                console.log(clickedIds);
            }
            //if they are Not the same..
            //reset both backgrounds images and empty the array 
        } else if (clickedIds.length > 2) {
            document.getElementById(clickedIds[0]).style.backgroundImage ="";
            document.getElementById(clickedIds[1]).style.backgroundImage ="";                        
                                      clickedIds = [];
            clickedIds.push(clickedId);
            console.log(clickedIds);
      }
    }
});