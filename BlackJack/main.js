let firstCard = getRandomCard();
let secondCard = getRandomCard();
let cardsArray = [firstCard,secondCard];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true ;
let message = ""
let messageEl = document.getElementById('message-el');
let sumEl = document.getElementById('sum-el');
let cardsEl = document.querySelector('#cards-el');
function startGame  () {
    renderGame();
}
function getRandomCard () {
    return Math.floor( Math.random()*13 ) + 1
}
function renderGame() {
    cardsEl.textContent =  " Cards : " 
    for (var i=0;i<cardsArray.length;i++) {
        cardsEl.textContent +=  cardsArray[i] + " " 
        sumEl.textContent = " sum :" + sum + " ";

    if(sum<=20){
        message = "Do you want to draw a new card? ";
        // isAlive = true;
    }
    else if (sum===21) {
        message = " You've got Blackjack!";
        hasBlackJack = true;
    }
    else {
        message = "You're out of the game! "
        isAlive = false;
    }
    messageEl.textContent = message

}}
function newCard() {
    
    let newCard = 7;
    sum+= newCard;
    cardsArray.push(newCard)
    renderGame();
}