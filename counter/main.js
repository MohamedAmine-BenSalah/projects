// a simple counter project to get more comfortable with the basics of javascript! 

let count = 0;
let counter = document.getElementById("count-ele");
/* init declaration to the count as 0
   using the DOM to get the id of the counter.
   setting the counter to the count variable as it increment.
   doing the same for the variable as it decrements.

*/
function increment() {
    count++;
  counter.innerText = count;
  localStorage.setItem("number of people", counter.innerText);

}

function decrement(){
    count--
    counter.innerText = count
    localStorage.setItem('people left' ,counter.innerText)
    
}

function save(){
   let peopleIn =  document.getElementById('demo') 
   peopleIn.innerText = localStorage.getItem("number of people")
    let peopleLeft = document.getElementById('demotwo');
    peopleLeft.innerText = localStorage.getItem('people left');
    // counter.textContent = 0; if it was a normal counter, we will set it back to 0, but here we are trying to keep track!

}
function reset(){
    let peopleinside = document.getElementById('demo');
    peopleinside.innerText = 0;
    let peopleoutside = document.getElementById('demotwo');
    peopleoutside.innerText = 0;
    let peopleentered = document.getElementById('count-ele');
    peopleentered.innerText = 0;
    localStorage.clear();
}
function infos(){
    let saveEl = document.getElementById('infos');
    let counted = count  + " - ";
    saveEl.textContent += counted;
 // using textContent here because it renders the spaces unlike innerText wish doesn't render non readable  human caracters like a space 
 }