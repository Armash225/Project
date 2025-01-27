//Incrementing game

const countEl = document.getElementById("count-el");
const saveEl = document.getElementById("save-el");


let count = 0;
function increment(){
    count++;
    countEl.textContent=count;
}

function save(){
    let countStr = count + " - ";
    saveEl.textContent += countStr;
    count = 0;
    countEl.textContent=count
}



// Black Jack Game

let player = {
    name: "Per",
    chips: 145
}

const messageEl = document.getElementById("message-el");
const sumEl = document.getElementById("sum-el");
const cardEl = document.getElementById("card-el");
const playerEl = document.getElementById("player-el"); 
//Extra Content for disabling the start btn 
const startBtn = document.getElementById("start-btn");


let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";


playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard(){
    let randomNumber =  Math.floor(Math.random() * 13) + 1 ;
    if(randomNumber > 10){
        return 10;
    } else if(randomNumber === 1){
        return 11;
    } else{
        return randomNumber;
    }
}

function startGame(){
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard , secondCard];
    sum = firstCard + secondCard;
    renderGame();
}
function renderGame(){
    cardEl.textContent = "Cards: "
    for(let i = 0; i < cards.length; i++){
        cardEl.textContent += cards[i] + " ";   
    }
    sumEl.textContent = "Sum: " + sum;
    if(sum <= 20){
        message = "Do you want to draw a new card";
    } else if (sum === 21){
        message = "You've got Blackjack!";
        hasBlackJack = true;
    } else if (sum > 21){
        message = "You're out of the game";
        isAlive = false;
    }
    messageEl.textContent = message;

    // Extra Content
    if(sum >= 21){
        const newBtn = document.getElementById("new-btn")
        newBtn.disabled = true;
        newBtn.style.opacity = "0.6";
    } else{
        const newBtn = document.getElementById("new-btn")
        newBtn.disabled = false;
        newBtn.style.opacity = "1";
    }
}

//Extra Content Disabling the start button when start button is pressed for the forst time undisable on ln 123
startBtn.addEventListener("click", function(){
    startBtn.disabled = true ;
    startBtn.style.opacity = "0.6";
});

function newCard(){
    if(isAlive === true && hasBlackJack === false){
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        renderGame();
    } 
}

function restartGame(){
    if(sum >= 21){
        cards = [];
        sum = 0;
        hasBlackJack = false;
        isAlive = false;
        message = "";
        messageEl.textContent = "Want to play a round";
        cardEl.textContent = "Cards: ";
        sumEl.textContent = "Sum: ";
        const newBtn = document.getElementById("new-btn")
        newBtn.disabled = false;
        newBtn.style.opacity = "1";
        //Extra content for undisabling the start button when pressed the restart btn disabled on ln 94
        startBtn.disabled = false ;
        startBtn.style.opacity = "1";
    }
}


/*Chrome Extention */



