let cardsArray = [];
let sum = 0
let hasBlackJack = false;
let isAlive = false ;
let message = ""
let messageEl = document.getElementById('message-el');
let sumEl = document.getElementById('sum-el');
let cardsEl = document.querySelector('#cards-el');
function startGame  () {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cardsArray = [firstCard,secondCard];
    sum = firstCard + secondCard
    renderGame();
}
let playerStats = {
    name : "amine",
    chips : 150 ,
}
let stats = document.getElementById('stats');
stats.textContent = playerStats.name + " : " + "$" + playerStats.chips

function getRandomCard () {
    let max = Math.floor( Math.random()*13 ) + 1
    if (max===1) {
        max= 11;
    }
    else if (max>10) {
        max=10;
    }
    return max;
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
    if(isAlive && !hasBlackJack) {

        let newCard = getRandomCard();
        sum+= newCard;
        cardsArray.push(newCard)
        renderGame();
    }
    // else {
    //     document.getElementById('message-el').textContent = "try again later!"
    // }
}